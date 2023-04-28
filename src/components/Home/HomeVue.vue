<template lang="">
    <div class="container">
    <div class="h-[32rem] bg-[url('./../assets/jumbotron-back1.png')] bg-contain bg-no-repeat bg-right-bottom pl-8">
        <h3 class="font-semibold text-2xl mt-16">붓싼 풀코스로 진행하는 <span class="underline decoration-wavy decoration-zinc-400">프로그래밍 강좌</span></h3>
        <p class="text-lg pt-6 pb-8">이 것이 강의인가 <span class="text-pink-600">치킨인가</span>
            <br>수원왕갈비강좌입니다!
        </p>
        <a href="#_" @click="setNav('Course')"
            class="px-6 py-4 text-base font-bold text-white uppercase transition-all duration-150 bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none ease">
            강의 보기
        </a>
    </div>
    </div>
    <div class="bg-slate-300">
        <div class="carousel h-full pt-2">
            <CourseCarousel/>
        </div>
    </div>

    <div class="my-4 bg-gray-700 rounded-lg h-16 w-72 text-white m-auto flex justify-center items-center">
        <h3>현재 수강 가능 리스트 입니다.</h3>
    </div>
    <CourseList />
    <div class="container h-[32rem] bg-zinc-300">
        당신을 치킨을 좋아한닭
        <p class="text-orange-400">여기는 하단 wrapper 입니닭</p>
    </div>
    <div class="container h-[32rem] bg-stone-400">
        여기는 후기 입니닭
    </div>
</template>
<script>
import CourseCarousel from './../CourseCarousel.vue';
import CourseList from './CourseList/CourseList'
import { mapState, mapActions } from 'vuex';

export default {
    name: "HomeVue",
    components: {
        CourseCarousel,
        CourseList
    },
    computed: {
        ...mapState('Nav', ['nav'])
    },
    methods: {
        ...mapActions('Nav', ['setNav'])
    }
}
</script>
<style lang="">
    
</style>