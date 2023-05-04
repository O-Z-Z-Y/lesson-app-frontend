<template>
    <li v-if="navState === 'Home'" class="mb-6 mx-4 w-1/4 min-w-[15rem] max-w-lg h-96 flex flex-col items-center bg-white rounded-lg shadow-md">
        <div class="item-thumbnail w-full h-60 bg-slate-500 rounded-t-lg">
            <a>{{ thumbnail }}</a>
        </div>
        <h4 class="text-cyan-700 text-lg font-medium">{{ title }}</h4>
        <p class="item-description">{{ description }}</p>
        <div class="difficulty"></div>
    </li>

    <li v-else-if="navState === 'Course'" class="py-6 flex border-b-2">
        <div class="item-thumbnail w-96 h-60 bg-slate-500 rounded-lg">{{ thumbnail }}</div>
        <div class="text-wrapper mx-6 w-full">
            <h4 class="text-cyan-700 text-lg font-medium">{{ title }}</h4>
            <p class="item-description">{{ description }}</p>
            <p class="item-price mt-10 float-right text-red-500">price</p>
            <!-- TODO:price는 결제 유무에 따라 강의 시작하기 -->
        </div>
    </li>
</template>

<script>
export default {
    name: "CourseItem",
    props: {
        thumbnail: String,
        title: String,
        description: String,
    },
    computed: {
        navState() {
            return this.$store.state.Nav.nav
        }
    }
};
</script>

<style>

</style>
