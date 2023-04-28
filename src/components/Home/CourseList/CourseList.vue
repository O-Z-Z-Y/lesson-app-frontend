<template>
    <div class="course-wrapper container course-list-wrapper">
        <ul class="flex flex-wrap justify-center mx-4">
            <CourseItem v-for="(course, index) in courses" :key="index" :thumbnail="course.thumbnail" :title="course.title"
                :description="course.description" />
        </ul>
    </div>
</template>

<script>
import CourseItem from "./CourseItem.vue";
import "/public/CourseData.json"

export default {
    name: "CourseList",
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
</script>

<style scoped>
@media (min-width: 1023px) {
    .course-wrapper {
        width: 1410px;
        margin: 0 auto;
    }
}
</style>