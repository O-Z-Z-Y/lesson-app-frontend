<template>
    <div class="overflow-x-hidden" :key="updateSubCoursePage">
        <div class="flex items-center justify-between sub-course-title bg-slate-100">
            <h2 class="container p-6 text-2xl font-bold lg:p-12">{{ courseItem.title }}</h2>
            <router-link
                class="w-32 px-4 py-3 mx-12 text-center text-pink-500 duration-300 border border-pink-300 rounded-lg hover:bg-white"
                :to="`/course/detail/${this.mainCategory}`">
                뒤로가기
            </router-link>
        </div>
        <div class="container py-4 mb-20 sb-course-body">
            <div v-if="courseItem.link" class="video-wrapper">
                <Plyr :url="videoUrl" :main="parseInt(courseItem.maincategory)" :sub="courseItem.id" />
            </div>
            <div class="content-wrapper" v-html="courseItem.content"></div>
        </div>
        <footer v-show="isPaidItem" class="fixed bottom-0 flex items-center justify-center w-full h-20 bg-slate-200">
            <a v-show="showPageButton('prev')" @click="routeSubCourse('prev')" class="mx-4 pref-course">&lt; 이전 강의</a>
            <div v-if="!isWatchedItem" @click="updateProgressCourse" class="mx-4 cursor-pointer is-watched">봤어요</div>
            <div v-else-if="isWatchedItem" class="mx-4 is-watched">
                <CheckedIcon />
            </div>
            <a v-show="showPageButton('next')" @click="routeSubCourse('next')" class="mx-4 next-course">다음 강의 &gt;</a>
        </footer>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Plyr from './Plyr.vue';
import axios from 'axios';
import CheckedIcon from '@/assets/svg/check_icon.svg'

export default {
    name: "SubCourse",
    components: {
        Plyr,
        CheckedIcon
    },
    data() {
        return {
            courseItem: [],
            videoUrl: '',
        }
    },
    created() {
        this.loadSubCourse()
    },
    watch: {
        $route(to, from) {
            if (to.path !== from.path) this.loadSubCourse()
        }
    },
    computed: {
        ...mapState('Courses', ['mainCategory', 'subCourseList']),
        ...mapState('User', ['userId', 'userAccessList']),
        currentSubCourse() {
            return this.subCourseList.find(item =>
                item.id === parseInt(this.$route.params.id)
            )
        },
        isPaidItem() {
            return this.userAccessList.includes(this.mainCategory)
        },
        isWatchedItem() {
            if (this.courseItem.customer.includes(this.userId)) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        async loadSubCourse() {
            if (!this.isPaidItem && this.currentSubCourse.sampling) {
                try {
                    const response = await axios.get(`/api/v1/jobs/subcourse/sample/detail/${this.currentSubCourse.id}`)
                    this.courseItem = response.data.subcourse
                    this.videoUrl = response.data.subcourse.link
                    this.filterVimeo()
                } catch (error) {
                    console.log(error)
                }
            } else {
                try {
                    const response = await axios.get(`/api/v1/jobs/subcourse/detail/${this.currentSubCourse.id}`, {
                        headers: {
                            'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                        }
                    })
                    console.log(response.data)
                    this.courseItem = response.data.subcourse
                    this.videoUrl = response.data.subcourse.link
                    this.filterVimeo()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        //* vimeo는 자체 공유링크는 페이지로 연결되어 있어, 외부의 접근을 차단함. 그래서 플레이어로 치환
        filterVimeo() {
            if (this.videoUrl.includes('vimeo')) {
                this.videoUrl = this.videoUrl.replace('https://vimeo.com/', 'https://player.vimeo.com/video/')
            }
        },
        showPageButton(attr) {
            const index = this.subCourseList.findIndex(item => item.id === this.courseItem.id);

            if (index === -1) {
                return false
            } else {
                if (attr === 'prev') {
                    if (index === 0) {
                        return false
                    } else {
                        return true
                    }
                } else if (attr === 'next') {
                    if (index === this.subCourseList.length - 1) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        routeSubCourse(attr) {
            const index = this.subCourseList.findIndex(item => item.id === this.courseItem.id);
            if (attr === 'prev') {
                if (this.subCourseList[index - 1].sampling || this.isPaidItem) {
                    this.$router.push(`/unit/${this.mainCategory}/${this.subCourseList[index - 1].id}`)
                    this.updateSubCoursePage++;
                } else {
                    alert('강의를 수강하시면 볼 수 있습니다.')
                }
            } else if (attr === 'next') {
                if (this.subCourseList[index + 1].sampling || this.isPaidItem) {
                    this.$router.push(`/unit/${this.mainCategory}/${this.subCourseList[index + 1].id}`)
                    this.updateSubCoursePage++;
                } else {
                    alert('강의를 수강하시면 볼 수 있습니다.')
                }
            }
        },
        async updateProgressCourse() {
            try {
                const response = await axios.post('/api/v1/jobs/subcourse/progress/update', {
                    maincourseId: this.mainCategory,
                    subcourseId: this.courseItem.id
                },{
                    headers: {
                        'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                    }
                })
                console.log(response.data)
                this.courseItem = response.data.doc
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style></style>