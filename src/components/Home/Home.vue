<template lang="">
    <div class="container">
    <div class="h-[32rem] bg-[url('./../assets/jumbotron-back1.png')] bg-contain bg-no-repeat bg-right-bottom pl-8">
        <h3 class="font-semibold text-2xl mt-16">붓싼 풀코스로 진행하는 <span class="underline decoration-wavy decoration-zinc-400">프로그래밍 강좌</span></h3>
        <p class="text-lg pt-6 pb-8">이 것이 강의인가 <span class="text-pink-600">치킨인가</span>
            <br>수원왕갈비강좌입니다!
        </p>
        <a href="#_" @click="SET_NAV('Course')"
            class="px-6 py-4 text-base font-bold text-white transition-all duration-150 bg-pink-500 rounded drop-shadow outline-none active:bg-pink-600 hover:drop-shadow-md focus:outline-none ease">
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
    <div class="button-wrapper my-6 flex justify-center items-center">
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">더보기</span>
        </button>
    </div>
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
import CourseList from './../Course/CourseList/CourseList'
import { mapState, mapMutations } from 'vuex';

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