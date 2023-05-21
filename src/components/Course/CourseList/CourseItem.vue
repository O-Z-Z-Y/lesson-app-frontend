<template>
    <li v-if="navState === 'Home'"
        class="mb-6 mx-4 w-1/4 min-w-[15rem] max-w-xl h-[22rem] flex flex-col justify-between items-center bg-white rounded-lg shadow-md">
        <div class="w-full item-wrapper">
            <div class="w-full h-auto mb-2 rounded-t-lg item-thumbnail">
                <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">
                    <div class="relative img-wrapper h-36">
                        <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${thumbnail}`" alt="thumbnail">
                        <div class="hover-layer">
                            <a class="absolute top-2 right-2">
                                <AddCartIcon class="w-6 h-6 opacity-100 z- fill-white hover:fill-red-500" />
                            </a>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="w-full p-2 text-wrapper h-36">
                <h4 class="mb-1 text-center hypertext">
                    <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">{{ title }}</router-link>
                </h4>
                <p class="text-center item-description line-clamp-3">{{ description }}</p>
            </div>
        </div>
        <p class="mb-2 ml-auto mr-4 text-lg text-red-500 item-price">{{ price === 0 ? '무료' : price.toLocaleString('ko-KR')+'원' }}</p>
    </li>

    <li v-else-if="navState === 'Course'" class="flex py-6 border-b-2 hover:bg-gray-100">
        <div class="w-1/3 h-auto rounded-lg item-thumbnail">
            <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">
                <div class="relative h-full img-wrapper">
                    <img class="object-cover h-full m-auto duration-300 rounded-lg hover:scale-95" :src="`${thumbnailUrl}/${thumbnail}`" alt="thumbnail">
                </div>
            </router-link>
        </div>
        <div class="flex justify-between w-2/3 h-40 mx-6 text-wrapper">
            <div class="info-wrapper">
                <h4 class="hypertext">
                    <router-link :to="`/course/detail/${id}`" @click="onClickCourseItem(id)">{{ title }}</router-link>
                </h4>
                <p class="item-description">{{ description }}</p>
            </div>
            <p class="float-right mt-auto mb-2 text-red-500 item-price">{{ price === 0 ? '무료' : price.toLocaleString('ko-KR')+'원' }}</p>
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
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`
        }
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
