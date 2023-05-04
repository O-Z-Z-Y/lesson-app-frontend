<template>
    <div class="px-6 course-wrapper course-list-wrapper">
        <ul class="flex flex-col">
            <CourseItem v-for="(course, index) in courses" :key="index" :thumbnail="course.thumbnail" :title="course.title"
                :description="course.description" />
        </ul>
    </div>
</template>
<script>
import CourseItem from './CourseList/CourseItem.vue';
import "/public/CourseData.json"

export default {
    name:"CourseVue",
    components: {
        CourseItem
    },
    data() {
        return {
            courses: [],
        };
    },
    mounted() {
        fetch("CourseData.json")
            .then((response) => response.json())
            .then((data) => (this.courses = data))
            .catch((error) => console.error(error));
    },
};
</script>\

<style>

</style>