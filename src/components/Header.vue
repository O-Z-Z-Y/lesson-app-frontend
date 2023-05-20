<template>
    <header class="w-full dark:bg-[#18181b]">
        <div class="container flex items-center justify-between p-6 md:flex-row">
            <router-link to="/home" class="flex items-center font-medium text-gray-900 title-font md:mb-0">
                <img class="h-10" src="./../assets/logo.png" alt="logo">
            </router-link>
            <nav class="flex flex-wrap items-center justify-center ml-24 text-base md:ml-auto md:mr-auto">
                <router-link to="/home" :class="{ '!text-pink-500': nav.includes('Home') }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Home</router-link>
                <router-link to="/notice" :class="{ '!text-pink-500': nav.includes('Notice') }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Notice</router-link>
                <router-link to="/course" :class="{ '!text-pink-500': nav.includes('Course') }"
                    class="dark:text-white mr-5 font-medium hover:!text-pink-500">Course</router-link>
                <router-link to="/about" :class="{ '!text-pink-500': nav.includes('About') }"
                    class="dark:text-white font-medium hover:!text-pink-500">About</router-link>
            </nav>
            <div v-if="!isLogged" class="items-center h-full">
                <a href="#" @click="onLogin"
                    class="dark:text-white login-button mr-5 font-medium hover:!text-pink-500">Login</a>
                <a href="#" @click="onSignUp"
                    class="px-4 py-2 text-xs font-bold text-white transition-all duration-150 bg-pink-500 rounded shadow outline-none active:bg-pink-600 focus:outline-none ease hover:shadow-xl">
                    Sign Up
                </a>
            </div>
            <div v-else-if="isLogged" class="header-user items-center h-full" v-click-outside="onClickOutside">
                <div class="header-user-wrapper flex">
                    <p>
                        <span @click="openUserMenu" class="hypertext">{{ this.username }}</span>
                        님 안녕하세요
                    </p>
                    <router-link to="/user/cart" class="cart-wrapper relative w-6 h-6 ml-2">
                        <ShoppingCartIcon class="w-full h-full duration-300 hover:fill-orange-500"/>
                        <p class="absolute bottom-3 left-4 w-5 h-5 text-sm rounded-full bg-red-600 text-white text-center">1</p>
                    </router-link>
                </div>
                <div v-show="isUserMenuOpened"
                    class="header-usermenu block absolute border rounded-sm bg-white p-2 shadow-lg z-20">
                    <ul>
                        <li class="mb-2 cursor-pointer duration-300 hover:text-orange-600">수강중인 강좌</li>
                        <li class="mb-2 cursor-pointer duration-300 hover:text-orange-600">회원 정보 변경</li>
                        <li class="cursor-pointer duration-300 hover:text-orange-600" @click="logout">로그아웃</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ShoppingCartIcon from '@/assets/svg/shopping_cart_icon.svg'

export default {
    name: 'HeaderVue',
    components: {
        ShoppingCartIcon
    },
    data() {
        return {
            isUserMenuOpened: false,
        }
    },
    //* 초기 로그인 상태
    created() {
        const token = this.$cookies.get('access_token');
        if (token) {
            this.login()
        } else {
            this.logout()
        }
    },
    computed: {
        ...mapState('Nav', ['nav']),
        ...mapState('Auth', ['authMode', 'isLogged']),
        ...mapState('Modal', ['modalOpened']),
        ...mapState('User', ['username'])
    },
    methods: {
        ...mapMutations('Nav', ['SET_NAV']),
        ...mapActions('Auth', ['setAuthMode', 'login', 'logout']),
        ...mapActions('Modal', ['openModal', 'closeModal']),
        onLogin() {
            this.setAuthMode('login');
            this.openModal()
        },
        onSignUp() {
            this.setAuthMode('signup');
            this.openModal()
        },
        openUserMenu() {
            this.isUserMenuOpened = !this.isUserMenuOpened
        },
        onClickOutside() {
            this.isUserMenuOpened = false
        }
    }
}
</script>
<style></style>