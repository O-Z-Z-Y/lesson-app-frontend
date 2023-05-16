<template>
    <div class="item-wrapper m-6 flex justify-between">
        <div class="item-body w-full">
            <div class="item-header" role="complementary">
                <h2 class="title text-2xl font-bold">제목인디</h2>
                <div class="img-wrapper" >
                    <img class="rounded-lg max-h-96" src="./../../assets/thumbnail-default.jpg" alt="">
                </div>
            </div>
            <div class="item-info">내용이거든</div>
            <div class="sub-course-list">
                <h3 class="course-list text-xl">커리큘럼 입니다. 여기 테이블로 바꿔야 합니다.</h3>
                <ul>
                    <li class="text-lg font-medium text-green-600 duration-300 hover:text-orange-400" v-for="course in SubCourses" :key="course.id">
                        <router-link :to="`/unit/${category}/${course.id}`">
                            {{ course.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="comment">댓글</div>
        </div>
        <div class="payment-wrapper h-80 w-72 p-4 border">
            <button class="credit-auth-button px-6 py-4 w-full text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded drop-shadow outline-none active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease">
                결제하기 or 수강하기
            </button>
            <p class="text-center">83,000₩</p>
            <p class="text-center">아직 디자인을 못 정함</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: "SubCourse",
    data() {
        return {
            SubCourses: [],
        }
    },
    mounted() {
        fetch("/SubCourses.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const filteredData = data.filter(
                    (course) => Number(course.maincategory) === this.category
                );
                this.SubCourses = filteredData; // 추출한 데이터를 SubCourses에 할당
            });
    },
    computed: {
        ...mapState('Courses', ['category'])
    }
}
</script>

<style></style>