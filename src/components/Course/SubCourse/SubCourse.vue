<template>
    <div class="sub-course-title p-12 bg-slate-100 text-2xl font-bold">
        <h2 class="container">{{ currentSubCourse.title }}</h2>
    </div>
    <div class="container sub-course-body py-4">
        <div v-if="currentSubCourse.link" class="video-wrapper">
            <vue-plyr>
                <div class="plyr__video-embed">
                    <iframe
                        :src="currentSubCourse.link"
                        allowfullscreen allowtransparency allow="autoplay"></iframe>
                </div>
            </vue-plyr>
        </div>
        <div class="content-wrapper" v-html="currentSubCourse.content"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: "SubCourse",
    computed: {
        ...mapState('Courses', ['subCourseList']),
        currentSubCourse() {
            return this.subCourseList.find(item => 
                item.id === parseInt(this.$route.params.id)
            )
        },
    },
}
</script>
<style></style>