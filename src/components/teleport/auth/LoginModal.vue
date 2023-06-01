<template>
    <div class="z-20 p-4 rounded modal-content w-96 bg-white/100">
        <div class="flex justify-between signup-header">
            <h2 class="mb-8 text-xl font-bold">로그인</h2>
            <a @click="closeModal" class="w-5 h-5 close-icon-wrapper">
                <CloseIcon w-full h-full/>
            </a>
        </div>
        <form class="max-w-md mx-auto" @submit.prevent="submitLogin">
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="email">
                    이메일
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-none focus:shadow-[0_0_5px_1px_rgba(219,39,119,1)]"
                    id="email" type="email" placeholder="Email" v-model="email" required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="password">
                    비밀번호
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-none focus:shadow-[0_0_5px_1px_rgba(219,39,119,1)]"
                    id="password" type="password" placeholder="Password" v-model="password" required minlength="8">
            </div>
            <div class="mb-4">
                <button :class="email !== '' && password !== ''
                    ? 'w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    : 'w-full bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded'"
                    type="submit" :disabled="email === '' || password === ''">
                    Log In
                </button>
            </div>
        </form>
        <div class="flex justify-around mb-4">
            <a href="#" @click="onChangeAuthMode('findPassword')" class="hypertext">비밀번호 찾기 ></a>
            <transition name="change-modal">
                <a href="#" @click="onChangeAuthMode('signup')" class="hypertext">회원 가입 ></a>
            </transition>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapState, mapMutations } from 'vuex';
import CloseIcon from '@/assets/svg/close_icon.svg'

export default {
    name: 'LoginModal',
    components: {
        CloseIcon
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState('Auth', ['isLogged']),
        ...mapState('User', ['username', 'userCart'])
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal']),
        ...mapMutations('User', ['SET_USERNAME', 'SET_USERCART']),
        ...mapMutations('Auth', ['SET_AUTHMODE', 'SET_LOGGED']),
        
        onChangeAuthMode(value) {
            this.SET_AUTHMODE(value)
            this.closeModal()
            setTimeout(() => {
                this.openModal()
            })
        },
        async submitLogin() {
            if (this.email === '' || this.password === '') {
                alert('회원 정보를 정확히 입력해 주세요.')
                return;
            }
            try {
                const response = await axios.post('/api/v1/customer/login', {
                    email: this.email,
                    password: this.password
                });
                this.SET_USERNAME(response.data.user.name)
                this.SET_USERCART(response.data.user.abandonedcart)
                this.$cookies.set('access_token', response.data.token, 60*60)
                alert(`${this.username}님 로그인 되었습니다.`)

                this.SET_LOGGED(true)
                this.closeModal()
            } catch (error) {
                console.error(error);
                alert('로그인 실패');
            }
        },
    },
}
</script>
<style scoped></style>
