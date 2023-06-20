<template>
    <div v-if="isLoading" class="container item-wrapper">
        <div class="container flex flex-col justify-between lg:flex-row">
            <div class="item-header" role="complementary">
                <h2 class="p-10 text-2xl font-bold">{{ mainTitle }}</h2>
                <div class="mx-4 img-wrapper">
                    <img class="rounded-lg max-h-96" :src="preloadedImage" alt="thumbnail">
                </div>
            </div>
            <div class="bg-white relative w-full p-4 mt-20 border rounded payment-wrapper lg:h-80 lg:min-w-[300px] lg:max-w-[300px]"
                v-if="!isPaidItem">
                <button
                    class="w-full px-6 py-4 mb-2 text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded outline-none credit-auth-button drop-shadow active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease"
                    @click="addCart">
                    수강 신청하기
                </button>
                <p class="text-center">{{ mainCoursePrice.toLocaleString('ko-KR') }}원</p>
                <p class="text-center">기간 : 1년</p>
            </div>
            <div class="bg-white relative w-11/12 p-4 mt-20 border rounded payment-wrapper lg:h-64 lg:min-w-[300px] lg:max-w-[300px]"
                v-else-if="isPaidItem">
                
                <div class="progress-wrapper">
                    <div class="relative pt-1">
                        <div class="flex items-center justify-between mb-2">
                            <div>
                                <span
                                    class="inline-block px-2 py-1 text-sm text-pink-600 uppercase rounded-full bg-pink-50">
                                    현재 수강율
                                </span>
                            </div>
                            <div class="text-right">
                                <span class="inline-block text-sm font-semibold text-pink-600">
                                    {{ inProgress ? inProgress : 0 }}%
                                </span>
                            </div>
                        </div>
                        <div class="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
                            <div :style="`width:${inProgress}%`"
                                class="flex flex-col justify-center text-center text-white bg-pink-500 shadow-none whitespace-nowrap">
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full px-6 py-4 mb-4 text-base font-bold text-pink-500 transition-all duration-300 bg-white rounded outline-none hover:bg-pink-50 credit-auth-button drop-shadow active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease"
                    @click="continueSubCourse">
                    수강 계속하기
                </button>
                <hr class="mb-4">
                <p class="mb-4 text-center">남은 기간 : {{ mainCourseExpired }}일</p>
            </div>
        </div>
        <div class="course-detail">
            <div class="mt-6 item-info">{{ mainDescription }}</div>
            <hr class="my-6">
            <div class="sub-course-list">
                <h3 class="text-xl course-list">커리큘럼 입니다. 여기 테이블로 바꿔야 합니다.</h3>
                <ul class="mt-6">
                    <li class="flex items-center justify-between h-12 px-2 mb-2 text-lg font-medium border rounded-xl"
                        v-for="course in subCourseList" :key="course.id">
                        <router-link :to="`/unit/${mainCategory}/${course.id}`" v-if="isPaidItem || course.sampling"
                            class="text-green-600 duration-300 hover:text-orange-400">
                            <PlayCircleIcon class="inline mr-1" />
                            {{ course.title }}
                        </router-link>
                        <div v-else>
                            <PlayCircleIcon class="inline mr-1" />
                            {{ course.title }}
                        </div>
                        <div v-if="!isPaidItem && course.sampling"
                            class="px-2 py-1 text-pink-500 border border-pink-400 sampling rounded-xl bg-pink-50">미리보기</div>
                    </li>
                </ul>
            </div>
            <hr class="my-6">
            <div class="comment">댓글이긴 한디</div>
        </div>
    </div>
    <div v-else-if="!isLoading" class="">
        <LoadingSpinner />
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import PlayCircleIcon from '@/assets/svg/play_circle.svg'
import LoadingSpinner from '../common/LoadingSpinner.vue';

export default {
    name: "CourseDetail",
    components: {
        LoadingSpinner,
        PlayCircleIcon
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`,
            inProgress: '',
            isLoading: false,
            preloadedImage: null,
        }
    },
    async created() {
        await this.fetchSubCourseList();
        if (this.isLogged & this.isPaidItem) {
            await this.fetchMainCourseExpired();
            await this.fetchProgress();
        }
        this.fetchImage()
        this.isLoading = true
    },
    computed: {
        ...mapState('Courses', ['mainCategory', 'mainThumbnail', 'mainTitle', 'mainDescription', 'mainCoursePrice', 'mainCourseExpired', 'subCourseList',]),
        ...mapState('User', ['userEmail', 'userCart', 'userAccessList']),
        ...mapState('Auth', ['isLogged']),
        isPaidItem() {
            return this.userAccessList.includes(this.mainCategory)
        }
    },
    methods: {
        ...mapMutations('User', ['GET_CARTITEM']),
        ...mapActions('Courses', ['fetchMainCourseExpired', 'fetchSubCourseList']),
        async fetchProgress() {
            try {
                const response = await this.axios.get(`/api/v1/jobs/maincourse/getprogress/${this.mainCategory}`);
                this.inProgress = response.data.data
            } catch (error) {
                console.log(error)
            }
        },
        fetchImage() {
            const image = new Image();
            image.src = `${this.thumbnailUrl}/${this.mainThumbnail}`
            image.onload = () => {
                this.preloadedImage = image.src
            };
            image.onerror = () => {
                this.preloadedImage = `${this.thumbnailUrl}/thumbnail_default.jpeg`
            }
        },
        async addCart() {
            if (!this.userCart.includes(this.mainCategory))
                this.GET_CARTITEM(this.mainCategory)
            try {
                const response = await this.axios.post('/api/v1/customer/savecart', {
                    email: this.userEmail,
                    cart: this.userCart,
                });
                this.SET_USERCART(response.data.updateCart.abandonedcart)
            } catch (error) {
                console.log(error)
            }
            this.$router.push('/user/cart')
        },
        async continueSubCourse() {
            try {
                const response = await this.axios.get(`/api/v1/jobs/subcourse/continue/${this.mainCategory}`)
                let currentSubCourse = response.data.subcourse_id
                this.$router.push(`/unit/${this.mainCategory}/${currentSubCourse}`)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style></style>