<template>
    <header class="w-full  text-gray-700 bg-white border-gray-100 shadow-sm body-font dark:bg-[#18181b]">
        <div class="container flex items-start justify-between p-6 mx-auto md:flex-row">
            <router-link to="/home" class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                <img class="h-10" src="./../assets/logo.png" alt="">
            </router-link>
            <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
                <router-link to="/home" :class="{ '!text-pink-500': nav === 'Home' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Home</router-link>
                <router-link to="/notice" :class="{ '!text-pink-500': nav === 'Notice' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Notice</router-link>
                <router-link to="/course" :class="{ '!text-pink-500': nav === 'Course' || nav === 'Detail' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Course</router-link>
                <router-link to="/about" :class="{ '!text-pink-500': nav === 'About' }"
                    class="dark:text-white font-medium hover:!text-pink-500">About</router-link>
            </nav>
            <div class="items-center h-full">
                <a href="#" @click="OPEN_MODAL()"
                    class="dark:text-white login-button mr-5 font-medium hover:!text-pink-500">Login</a>
                <a href="#" @click="$store.dispatch('Modal/OPEN_MODAL')"
                    class="px-4 py-2 text-xs font-bold text-white transition-all duration-150 bg-pink-500 rounded shadow outline-none active:bg-pink-600 focus:outline-none ease hover:shadow-xl">
                    Sign Up
                </a>
            </div>
        </div>
    </header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'HeaderVue',
    computed: {
        ...mapState('Nav', ['nav']),
        ...mapState('Modal', ['openModal'])
    },
    methods: {
        ...mapMutations('Nav', ['SET_NAV']),
        ...mapMutations('Modal', ['OPEN_MODAL'])
    }
}
</script>
<style lang="">
    
</style>