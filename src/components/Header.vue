<template>
    <header class="sticky top-0 bg-white z-[15] dark:bg-[#18181b]">
        <transition name="dimmed">
            <div v-if="isSideBarOpened" @click="closeSideBar"
                class="fixed top-0 left-0 z-20 w-full h-full bg-black/50 sidebar-dimmed" />
        </transition>
        <transition name="sidebar">
            <aside v-if="isSideBarOpened" class="fixed right-0 z-20 w-1/3 h-full bg-white mobile-aside-bar">
                <div @click="closeSideBar" class="block h-12 mx-auto my-1 close-button-wrapper">
                    <CloseIcon class="w-full h-full" />
                </div>
                <ul class="flex flex-col nav-list">
                    <li class="text-center border-t">
                        <router-link to="/home" @click="closeSideBar" 
                            :class="{ '!text-pink-500': nav === 'Home' }"
                            class="block m-4 font-semibold text-lg hover:!text-pink-500">Home</router-link>
                    </li>
                    <li class="text-center border-t">
                        <router-link to="/notice" @click="closeSideBar"
                            :class="{ '!text-pink-500': nav === 'Notice' }"
                            class="block m-4 font-semibold text-lg hover:!text-pink-500">Notice</router-link>
                    </li>
                    <li class="text-center border-t">
                        <router-link to="/course" @click="closeSideBar"
                            :class="{ '!text-pink-500': nav === 'Course' }"
                            class="block m-4 font-semibold text-lg hover:!text-pink-500">Course</router-link>
                    </li>
                    <li class="text-center border-y">
                        <router-link to="/about" @click="closeSideBar" 
                            :class="{ '!text-pink-500': nav === 'About' }"
                            class="block m-4 font-semibold text-lg hover:!text-pink-500">About</router-link>
                    </li>
                </ul>
            </aside>
        </transition>
        <div class="container flex items-center justify-between px-4 py-2">
            <router-link to="/home" class="flex items-center font-medium text-gray-900 title-font md:mb-0">
                <img class="h-10" src="./../assets/logo.png" alt="logo">
            </router-link>
            <nav class="flex-wrap items-center justify-center hidden ml-24 text-base sm:flex tablet:hidden">
                <router-link to="/home" :class="{ '!text-pink-500': nav === 'Home' }"
                    class="mr-5 font-medium hover:!text-pink-500">Home</router-link>
                <router-link to="/notice" :class="{ '!text-pink-500': nav === 'Notice' }"
                    class="mr-5 font-medium hover:!text-pink-500">Notice</router-link>
                <router-link to="/course" :class="{ '!text-pink-500': nav === 'Course' }"
                    class="mr-5 font-medium hover:!text-pink-500">Course</router-link>
                <router-link to="/about" :class="{ '!text-pink-500': nav === 'About' }"
                    class="font-medium hover:!text-pink-500">About</router-link>
            </nav>
            <div v-if="!isLogged" class="flex items-center h-full">
                <a @click="onLogin" class="login-button mr-5 font-medium hover:!text-pink-500">로그인</a>
                <button @click="onSignUp"
                    class="hidden px-4 py-2 text-xs font-bold text-white transition-all duration-150 bg-pink-500 rounded shadow outline-none sm:block active:bg-pink-600 focus:outline-none ease hover:shadow-xl">
                    회원가입
                </button>
                <button @click="openSideBar" class="block w-5 h-5 mobile-nav sm:hidden">
                    <HamburgerIcon />
                </button>

            </div>
            <div v-else-if="isLogged" class="items-center h-full header-user" v-click-outside="onClickOutside">
                <div class="flex header-user-wrapper">
                    <p>
                        <span @click="openUserMenu" class="hypertext">{{ this.username }}</span>
                        님 안녕하세요
                    </p>
                    <router-link to="/user/cart" class="relative w-6 h-6 ml-2 mr-4 cart-wrapper">
                        <ShoppingCartIcon class="duration-300 hover:fill-orange-500" />
                        <p class="absolute w-5 h-5 text-sm text-center text-white bg-red-600 rounded-full bottom-3 left-4">
                            {{ userCart.length }}
                        </p>
                    </router-link>
                    <button @click="openSideBar" class="block w-5 h-5 mobile-nav sm:hidden">
                        <HamburgerIcon />
                    </button>
                </div>
                <transition name="usermenu">
                    <div v-show="isUserMenuOpened"
                        class="absolute z-20 block p-2 bg-white border rounded-sm shadow-lg header-usermenu">
                        <ul>
                            <li class="mb-2 duration-300 cursor-pointer hover:text-orange-600">
                                <router-link to="/user/courses" @click="onClickOutside">
                                    수강중인 강좌
                                </router-link>
                            </li>
                            <li class="mb-2 duration-300 cursor-pointer hover:text-orange-600">
                                <router-link to="/user/profile" @click="onClickOutside">
                                    회원 정보 변경
                                </router-link>
                            </li>
                            <li class="duration-300 cursor-pointer hover:text-orange-600" @click="commitLogout">로그아웃</li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
        <hr>
    </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ShoppingCartIcon from '@/assets/svg/shopping_cart_icon.svg'
import HamburgerIcon from '@/assets/svg/hamburger_icon.svg'
import CloseIcon from '@/assets/svg/close_icon.svg'
import { logout } from '@/service/auth/logout'
import { fetchUserdata } from '@/service/auth/login'
import { getAccessList } from '@/service/courses/maincourse'

export default {
    name: 'HeaderVue',
    components: {
        ShoppingCartIcon,
        HamburgerIcon,
        CloseIcon
    },
    data() {
        return {
            isSideBarOpened: false,
            isUserMenuOpened: false,
        }
    },
    //* 초기 로그인 상태
    async created() {
        const token = this.$cookies.get('access_token');
        if (token & this.username === '') {
            fetchUserdata()
            this.commitLogin()
            getAccessList()
        } else if (token) {
            this.commitLogin()
        } else {
            logout()
        }
        
        //* 초기 로딩시에 코스리스트를 불러온다.
        this.fetchMainCourseList();

    },
    computed: {
        ...mapState('Nav', ['nav']),
        ...mapState('Auth', ['authMode', 'isLogged']),
        ...mapState('Modal', ['modalOpened']),
        ...mapState('User', ['username', 'userEmail', 'userCart', 'userAccessList']),
        ...mapState('Courses', ['mainCourseList']),
    },
    methods: {
        ...mapMutations('Nav', ['SET_NAV']),
        ...mapMutations('User', ['SET_USERNAME', 'SET_USEREMAIL', 'SET_USERACCESSLIST']),
        ...mapActions('Auth', ['setAuthMode', 'commitLogin', 'commitLogout']),
        ...mapActions('Modal', ['openModal', 'closeModal']),
        ...mapActions('Courses', ['fetchMainCourseList']),
        onLogin() {
            this.setAuthMode('login');
            this.openModal()
        },
        onSignUp() {
            this.setAuthMode('signup');
            this.openModal()
        },
        openSideBar() {
            this.isSideBarOpened = true
        },
        closeSideBar() {
            this.isSideBarOpened = false
        },
        openUserMenu() {
            this.isUserMenuOpened = !this.isUserMenuOpened
        },
        onClickOutside() {
            this.isUserMenuOpened = false
        },
    }
}
</script>
<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
    @apply transition-all duration-300
}

.sidebar-enter-from,
.sidebar-leave-to {
    @apply translate-x-80
}

.dimmed-enter-active,
.dimmed-leave-active {
    @apply transition-all duration-300
}

.dimmed-enter-from,
.dimmed-leave-to {
    @apply opacity-0
}

.usermenu-enter-active,
.usermenu-leave-active {
    @apply transition-all duration-300
}

.usermenu-enter-from,
.usermenu-leave-to {
    @apply opacity-0 -translate-y-5
}</style>