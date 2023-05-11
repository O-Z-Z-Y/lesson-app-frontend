<template>
    <h2 class="text-xl font-bold mb-8">로그인</h2>
    <form class="max-w-md mx-auto" @submit.prevent="login">
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
            <button
                :class="email !== '' && password !== '' 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                    : 'bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded'"
                class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" :disabled="email === '' || password === ''">
                Log In
            </button>
        </div>
    </form>
    <a href="#" @click="closeModal()">닫기</a>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: 'LoginModal',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal']),
        async login() {
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
<style scoped>
</style>
