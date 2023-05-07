<template>
    <div class="item-wrapper m-6 flex justify-between">
        <div class="item-body">
            <div class="item-header" role="complementary">
                <div class="title">제목인디</div>
                <div class="img-wrapper">이미지 들어갈 곳</div>
            </div>
            <div class="sub-course-list">여기가 커리큘럼
                <router-link to="/test">자 라우팅 드가자</router-link>
            </div>
            <div class="comment">댓글</div>
        </div>
        <div class="payment-wrapper">결제하기</div>
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
        fetch("SubCourses.json")
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