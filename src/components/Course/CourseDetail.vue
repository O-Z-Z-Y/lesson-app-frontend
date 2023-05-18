<template>
    <div class="container item-wrapper m-6">
        <div class="item-body w-full">
            <div class="item-header" role="complementary">
                <h2 class="title py-6 px-4 text-2xl font-bold">{{ mainTitle }}</h2>
                <div class="img-wrapper">
                    <img class="rounded-lg max-h-96" :src="`/images/${mainThumbnail}`" alt="thumbnail">
                </div>
            </div>
            <div class="payment-wrapper mt-6 relative w-auto laptop:h-80 laptop:w-72 p-4 border rounded laptop:fixed laptop:top-48 laptop:right-12">
                <button
                    class="credit-auth-button px-6 py-4 w-full text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded drop-shadow outline-none active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease">
                    결제하기 or 수강하기
                </button>
                <p class="text-center">{{ mainCoursePrice.toLocaleString('ko-KR') }}원</p>
                <p class="text-center">아직 디자인을 못 정함</p>
            </div>
            <div class="item-info mt-6">{{ mainDescription }}</div>
            <hr class="my-6">
            <div class="sub-course-list">
                <h3 class="course-list text-xl">커리큘럼 입니다. 여기 테이블로 바꿔야 합니다.</h3>
                <ul class="mt-6">
                    <li class="text-lg font-medium text-green-600 duration-300 hover:text-orange-400"
                        v-for="course in subCourseList" :key="course.id">
                        <router-link :to="`/unit/${mainCategory}/${course.id}`">
                            {{ course.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr class="my-6">
            <div class="comment">댓글이긴 한디</div>
        </div>
    </div>

    <div class="h-[3000px]"></div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: "CourseDetail",
    mounted() {
        this.fetchSubCourseList()
    },
    computed: {
        ...mapState('Courses', ['mainCategory', 'mainThumbnail', 'mainTitle', 'mainDescription', 'mainCoursePrice', 'subCourseList',])
    },
    methods: {
        ...mapActions('Courses', ['fetchSubCourseList'])
    }
}
</script>

<style></style>