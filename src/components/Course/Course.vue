<template>
    <div class="container">
        <h2 class="p-10 text-2xl font-bold">현재 수강 가능 리스트입니다.</h2>
        <hr>
    </div>
    <div class="container px-6 course-wrapper course-list-wrapper">
        <ul class="flex flex-col">
            <CourseItem v-for="(course, index) in mainCourseList" 
                :key="index" 
                :id="course.id" 
                :thumbnail="course.thumbnail" 
                :title="course.title"
                :description="course.description" 
                :price="course.price ? course.price : 0"
            />
        </ul>
    </div>
</template>
<script>
import CourseItem from './CourseList/CourseItem.vue';
import { mapState } from 'vuex';

export default {
    name:"Course",
    components: {
        CourseItem
    },
    computed: {
        ...mapState('Courses', ['mainCourseList']),
    },
};
</script>

<style>

</style>