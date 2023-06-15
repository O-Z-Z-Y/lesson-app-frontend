<template>
    <li v-if="navState === 'Home'"
        class="mb-6 mx-4 w-1/4 min-w-[15rem] max-w-xl h-[22rem] flex flex-col justify-between items-center bg-white rounded-lg shadow-md">
        <div class="w-full item-wrapper">
            <div class="w-full h-auto mb-2 rounded-t-lg item-thumbnail">
                <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">
                    <div class="relative img-wrapper h-36">
                        <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${thumbnail}`" alt="thumbnail" @error="replaceDefaultImg">
                        <div class="hover-layer">
                            <a class="absolute top-2 right-2">
                                <AddCartIcon class="w-6 h-6 opacity-100 z- fill-white hover:fill-red-500" />
                            </a>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="w-full p-2 text-wrapper h-36">
                <h4 class="mb-1 text-center hypertext">
                    <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">{{ title }}</router-link>
                </h4>
                <p class="text-center item-description line-clamp-3">{{ description }}</p>
            </div>
        </div>
        <p class="mb-2 ml-auto mr-4 text-lg text-red-500 item-price">{{ isPaidItem(id, price) }}</p>
    </li>

    <li v-else-if="navState === 'Course'">
        <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)"
            class="flex flex-col py-6 mx-auto border-b-2 sm:flex-row hover:bg-gray-100">
            <div class="w-full rounded-lg sm:w-1/3 item-thumbnail"
                :style="`height:${imgHeight}px`" :ref="`imgWrapper${id}`">
                <div class="relative h-full img-wrapper">
                    <img class="object-cover h-full m-auto duration-300 rounded-lg hover:scale-95" :src="`${thumbnailUrl}/${thumbnail}`" alt="thumbnail" @error="replaceDefaultImg">
                </div>
            </div>
            <div class="relative m-6 sm:my-0 sm:w-2/3 sm:h-40 text-wrapper">
                <div class="info-wrapper">
                    <h4 class="hypertext">{{ title }}</h4>
                    <p class="item-description">{{ description }}</p>
                    <button @click="getImgWidth">딸깍</button>
                </div>
                <p class="absolute right-0 text-red-500 bottom-2 item-price">{{ isPaidItem(id, price) }}</p>
                <!-- TODO:price는 결제 유무에 따라 강의 시작하기 -->
            </div>
        </router-link>
    </li>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import AddCartIcon from '@/assets/svg/add_cart_icon.svg';

export default {
    name: "CourseItem",
    props: {
        id: Number,
        thumbnail: String,
        title: String,
        description: String,
        price: Number,
    },
    components: {
        AddCartIcon
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`,
            imgWidth: null
        }
    },
    mounted() {
        this.getImgWidth()
    },
    computed: {
        navState() {
            return this.$store.state.Nav.nav
        },
        ...mapState('Courses', ['mainCategory']),
        ...mapState('User', ['userAccessList']),
        imgHeight() {
            return this.imgWidth / 16 * 9
        }
    },
    methods: {
        ...mapMutations('Courses', ['SET_MAINCATEGORY', 'SET_MAINTHUMBNAIL', 'SET_MAINTITLE', 'SET_MAINDESCRIPTION', 'SET_MAINCOURSEPRICE']),
        ...mapMutations('Nav', ['SET_NAV']),
        onClickCourseItem() {
            this.SET_MAINCATEGORY(this.id);
            this.SET_MAINTHUMBNAIL(this.thumbnail)
            this.SET_MAINTITLE(this.title)
            this.SET_MAINDESCRIPTION(this.description)
            this.SET_MAINCOURSEPRICE(this.price)
            this.SET_NAV('Detail')
        },
        isPaidItem(id, price) {
            if (this.userAccessList.includes(id)) {
                return '수강 중'
            } else {
                return price === 0 ? '무료' : price.toLocaleString('ko-KR')+'원'
            }
        },
        replaceDefaultImg(e) {
            e.target.src = `${this.thumbnailUrl}/thumbnail_default.jpeg`
        },
        getImgWidth() {
            const img = this.$refs[`imgWrapper${this.id}`];
            this.imgWidth = img.offsetWidth
            console.log(this.imgWidth)
        }
    }
};
</script>

<style></style>