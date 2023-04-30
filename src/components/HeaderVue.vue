<template>
    <header class="w-full  text-gray-700 bg-white border-gray-100 shadow-sm body-font dark:bg-[#18181b]">
        <div class="container flex items-start justify-between p-6 mx-auto md:flex-row">
            <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                <img class="h-10" src="./../assets/logo.png" alt="">
            </a>
            <nav class="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
                <a href="#_" @click="setNav('Home')" :class="{ '!text-pink-500': nav === 'Home' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Home</a>
                <a href="#_" @click="setNav('Notice')" :class="{ '!text-pink-500': nav === 'Notice' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Notice</a>
                <a href="#_" @click="setNav('Course')" :class="{ '!text-pink-500': nav === 'Course' }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Course</a>
                <a href="#_" @click="setNav('About')" :class="{ '!text-pink-500': nav === 'About' }"
                    class="dark:text-white font-medium hover:!text-pink-500">About</a>
            </nav>
            <div class="items-center h-full">
                <a href="#_" @click="$store.dispatch('Modal/SHOW_MODAL')"
                    class="dark:text-white login-button mr-5 font-medium hover:!text-pink-500">Login</a>
                <a href="#_" 
                    class="px-4 py-2 text-xs font-bold text-white transition-all duration-150 bg-pink-500 rounded shadow outline-none active:bg-pink-600 focus:outline-none ease hover:shadow-xl">
                    Sign Up
                </a>
            </div>
        </div>
    </header>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'HeaderVue',
    computed: {
        ...mapState('Nav', ['nav']),
        showModal: {
            get() {
                return this.$store.state.Modal.showModal
            },
            set(value) {
                this.$store.commit('Modal/SET_SHOW_MODAL', value)
            }
        }
    },
    methods: {
        ...mapActions('Nav', ['setNav'])
    }
}
</script>
<style lang="">
    
</style>