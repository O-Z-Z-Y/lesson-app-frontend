<template>
    <div class="signup-header flex justify-between">
        <h2 class="text-xl font-bold mb-8">로그인</h2>
        <a href="#" @click="closeModal">
            <img class="w-7" :src="closeIcon" alt="close">
        </a>
    </div>
    <form class="max-w-md mx-auto" @submit.prevent="submitLogin">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                이메일
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-none focus:shadow-[0_0_5px_1px_rgba(219,39,119,1)]"
                id="email" type="email" placeholder="Email" v-model="email" required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
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
        <div class="mb-4 flex justify-around">
            <a href="#" @click="SET_AUTHMODE('findpw')" class="text-cyan-700 font-medium duration-300 hover:text-orange-400">비밀번호 찾기 ></a>
            <a href="#" @click="SET_AUTHMODE('signup')" class="text-cyan-700 font-medium duration-300 hover:text-orange-400">회원 가입 ></a>
        </div>
    </form>
</template>
<script>
import axios from 'axios';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    name: 'LoginModal',
    props: ['closeIcon'],
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState('Auth', ['isLogged'])
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal']),
        ...mapMutations('Auth', ['SET_AUTHMODE', 'SET_LOGGED']),
        async submitLogin() {
            if (this.email === '' || this.password === '') {
                alert('회원 정보를 정확히 입력해 주세요.')
                return;
            }
            try {
                const response = await axios.post('api/v1/customer/login', {
                    email: this.email,
                    password: this.password
                });
                console.log(response.data);
                alert('로그인 되었습니다.')
            } catch (error) {
                console.error(error);
                alert('로그인 실패');
            }
        }
    },
}
</script>
<style scoped></style>
