<template>
    <div class="course-wrapper container course-list-wrapper">
        <ul class="flex flex-wrap justify-around">
            <CourseItem v-for="(course, index) in mainCourseList" :key="index" :id="course.id" :thumbnail="course.thumbnail" :title="course.title"
                :description="course.description" />
        </ul>
    </div>
</template>

<script>
import CourseItem from "./CourseItem.vue";
import { mapState } from 'vuex';

export default {
    name: "CourseList",
    components: {
        CourseItem
    },
    computed: {
        ...mapState('Courses', ['mainCourseList']),
    }
    
};
</script>

<style scoped>
@media (min-width: 1023px) {
    .course-wrapper {
        width: 1410px;
        margin: 0 auto;
    }
}
</style> 