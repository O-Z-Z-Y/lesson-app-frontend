<template>
    <li v-if="navState === 'Home'"
        class="mb-6 mx-4 w-1/4 min-w-[15rem] max-w-xl h-80 flex flex-col items-center bg-white rounded-lg shadow-md">
        <div class="item-thumbnail mb-2 w-full h-auto bg-slate-500 rounded-t-lg">
            <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">
                <div class="img-wrapper relative h-36">
                    <img class="rounded-lg object-cover h-full w-full" :src="`/images/${thumbnail}`" alt="thumbnail">
                    <div class="hover-layer">
                        <a class="absolute top-2 right-2" href="#">
                            <AddCartIcon class="z- w-6 h-6 fill-white opacity-100 hover:fill-red-500" />
                        </a>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="text-wrapper p-2 w-full">
            <h4 class="mb-1 hypertext text-center">
                <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">{{ title }}</router-link>
            </h4>
            <p class="item-description text-center">{{ description }}</p>
            <div class="difficulty"></div>
        </div>
    </li>

    <li v-else-if="navState === 'Course'" class="py-6 flex border-b-2">
        <div class="item-thumbnail w-1/3 h-auto bg-slate-500 rounded-lg">
            <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">
                <div class="img-wrapper h-full relative">
                    <img class="rounded-lg object-cover h-full" :src="`/images/${thumbnail}`" alt="thumbnail">
                    <div class="hover-layer">
                        <a href="#">
                            <AddCartIcon class="z- w-6 h-6 fill-white opacity-100 hover:fill-red-500" />
                        </a>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="text-wrapper mx-6 w-2/3">
            <h4 class="hypertext">
                <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">{{ title }}</router-link>
            </h4>
            <p class="item-description">{{ description }}</p>
            <p class="item-price mt-10 float-right text-red-500">{{ price === 0 ? '무료' : price.toLocaleString('ko-KR')+'원' }}</p>
            <!-- TODO:price는 결제 유무에 따라 강의 시작하기 -->
        </div>
    </li>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import AddCartIcon from '@/assets/svg/add_cart_icon.svg';

export default {
    name: "CourseItem",
    props: {
        id: Number,
        thumbnail: String,
        title: String,
        description: String,
        price: Number,
    },
    components: {
        AddCartIcon
    },
    computed: {
        navState() {
            return this.$store.state.Nav.nav
        },
        ...mapState('Courses', ['mainCategory']),
    },
    methods: {
        ...mapMutations('Courses', ['SET_MAINCATEGORY', 'SET_MAINTHUMBNAIL', 'SET_MAINTITLE', 'SET_MAINDESCRIPTION', 'SET_MAINCOURSEPRICE']),
        ...mapMutations('Nav', ['SET_NAV']),
        onClickCourseItem() {
            this.SET_MAINCATEGORY(this.id);
            this.SET_MAINTHUMBNAIL(this.thumbnail)
            this.SET_MAINTITLE(this.title)
            this.SET_MAINDESCRIPTION(this.description)
            this.SET_MAINCOURSEPRICE(this.price)
            this.SET_NAV('Detail')
        }
    }
};
</script>

<style></style>
