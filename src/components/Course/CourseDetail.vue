<template>
    <div class="container p-6 item-wrapper">
        <div class="w-full item-body">
            <div class="item-header" role="complementary">
                <h2 class="px-4 py-6 text-2xl font-bold title">{{ mainTitle }}</h2>
                <div class="img-wrapper">
                    <img class="rounded-lg max-h-96" :src="`/images/${mainThumbnail}`" alt="thumbnail">
                </div>
            </div>
            <div class="relative w-full p-4 mt-6 border rounded payment-wrapper lg:h-80 lg:min-w-[300px] lg:max-w-[300px] lg:fixed lg:top-48 lg:right-12">
                <button
                class="w-full px-6 py-4 mb-2 text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded outline-none credit-auth-button drop-shadow active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease">
                결제하기 or 수강신청
                </button>
                <button
                class="w-full px-6 py-4 mb-2 text-base font-bold text-pink-500 transition-all duration-150 bg-white rounded outline-none credit-auth-button drop-shadow active:bg-gray-100 hover:drop-shadow-md focus:outline-none ease">
                장바구니
                </button>
                <p class="text-center">{{ mainCoursePrice.toLocaleString('ko-KR') }}원</p>
                <p class="text-center">기간 ?</p>
            </div>
            <div class="mt-6 item-info">{{ mainDescription }}</div>
            <hr class="my-6">
            <div class="sub-course-list">
                <h3 class="text-xl course-list">커리큘럼 입니다. 여기 테이블로 바꿔야 합니다.</h3>
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
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: "CourseDetail",
    created() {
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