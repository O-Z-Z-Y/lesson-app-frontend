<template lang="">
    <div class="container">
    <div class="h-[32rem] bg-[url('./../assets/img/jumbotron-back1.png')] bg-[length:80%] sm:bg-contain bg-no-repeat bg-right-bottom px-8">
        <h3 class="mt-10 text-2xl font-semibold bg-white/20">실무같은 실습으로 배워보는 <span class="underline bg-white decoration-wavy decoration-zinc-400">프로그래밍 강좌</span></h3>
        <p class="pt-6 pr-2 mb-8 text-lg bg-white/50 w-fit rounded-2xl">어디부터 시작할지 막막한 
            <span class="text-pink-600">프로그래밍</span>
            <br>자신감부터 필수지식까지 모든 것을 알려드립니다! 
        </p>
        <router-link to="/course" @click="SET_NAV('Course')"
            class="px-6 py-4 text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded outline-none drop-shadow active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease">
            강의 보기
        </router-link>
    </div>
    </div>
    <div class="bg-slate-300">
        <div class="h-full pt-2 carousel">
            <CourseCarousel/>
        </div>
    </div>

    <div class="flex items-center justify-center h-16 m-auto my-4 text-white bg-gray-700 rounded-lg w-72">
        <h3>현재 수강 가능 리스트 입니다.</h3>
    </div>
    <CourseList />
    <div class="flex items-center justify-center my-6 button-wrapper">
        <router-link to="/course" @click="SET_NAV('Course')" >
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">더보기</span>
            </button>
        </router-link>
    </div>
    <div class="hidden container h-[32rem] bg-zinc-300">
        당신을 치킨을 좋아한닭
        <p class="text-orange-400">여기는 하단 wrapper 입니닭</p>
    </div>
    <div class="hidden container h-[32rem] bg-stone-400">
        여기는 후기 입니닭
    </div>
</template>
<script>
import CourseCarousel from './../CourseCarousel.vue';
import CourseList from './../Course/CourseList/CourseList'
import { mapState, mapMutations } from 'vuex';

export default {
    name: "Home",
    components: {
        CourseCarousel,
        CourseList
    },
    computed: {
        ...mapState('Nav', ['nav'])
    },
    methods: {
        ...mapMutations('Nav', ['SET_NAV'])
    }
}
</script>
<style scoped>
    button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
    }
    button.learn-more {
        width: 12rem;
        height: auto;
    }
    button.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #ec4899;
        border-radius: 1.625rem;
    }
    button.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
    }
    button.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
    }
    button.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: "";
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
    }
    button.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: #ec4899;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
    }
    button:hover .circle {
        width: 100%;
    }
    button:hover .circle .icon.arrow {
        background: #fff;
        transform: translate(1rem, 0);
    }
    button:hover .button-text {
        color: #fff;
    }
</style>