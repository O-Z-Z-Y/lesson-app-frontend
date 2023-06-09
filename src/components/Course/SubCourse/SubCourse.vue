<template>
    <div class="p-12 text-2xl font-bold sub-course-title bg-slate-100">
        <h2 class="container">{{ courseItem.title }}</h2>
    </div>
    <div class="container py-4 sub-course-body">
        <div v-if="courseItem.link" class="video-wrapper">
            <vue-plyr>
                <div class="plyr__video-embed">
                    <iframe :src="courseItem.link" allowfullscreen allowtransparency allow="autoplay"></iframe>
                </div>
            </vue-plyr>
        </div>
        <div class="content-wrapper" v-html="courseItem.content"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    name: "SubCourse",
    data() {
        return {
            courseItem: []
        }
    },
    created() {
        this.loadSubCourse()
    },
    computed: {
        ...mapState('Courses', ['subCourseList']),
        currentSubCourse() {
            return this.subCourseList.find(item =>
                item.id === parseInt(this.$route.params.id)
            )
        },
    },
    methods: {
        async loadSubCourse() {
            try {
                const response = await axios.get(`/api/v1/jobs/subcourse/detail/${this.currentSubCourse.id}`, {
                    headers: {
                        'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                    }
                })
                this.courseItem = response.data.subcourse
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>
<style></style>