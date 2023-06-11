<template>
    <div class="p-12 text-2xl font-bold sub-course-title bg-slate-100">
        <h2 class="container">{{ courseItem.title }}</h2>
    </div>
    <div class="container py-4 sub-course-body">
        <div v-if="courseItem.link" class="video-wrapper">
            <Plyr :url="videoUrl" :main="parseInt(courseItem.maincategory)" :sub="courseItem.id" />
        </div>
        <div class="content-wrapper" v-html="courseItem.content"></div>
    </div>
    <footer class="fixed bottom-0 flex items-center justify-center w-full h-20 bg-slate-200">
        <div class="mx-4 pref-course">&lt; 이전 강의</div>
        <div class="mx-4 is-watched">봤어요</div>
        <div class="mx-4 next-course">다음 강의 &gt;</div>
    </footer>
</template>
<script>
import { mapState } from 'vuex';
import Plyr from './Plyr.vue';
import axios from 'axios';

export default {
    name: "SubCourse",
    components: {
        Plyr
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
    computed: {
        ...mapState('Courses', ['mainCategory', 'subCourseList']),
        ...mapState('User', ['userAccessList']),
        currentSubCourse() {
            return this.subCourseList.find(item =>
                item.id === parseInt(this.$route.params.id)
            )
        },
        isPaidItem() {
            return this.userAccessList.includes(this.mainCategory)
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
        }
    }
}
</script>
<style></style>