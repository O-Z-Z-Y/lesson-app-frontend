<template>
    <div class="signup-header flex justify-between">
        <h2 class="text-xl font-bold mb-8">회원가입</h2>
        <a href="#" @click="closeModal">
            <img class="w-7" :src="closeIcon" alt="close">
        </a>
    </div>
    <form class="max-w-md mx-auto" @submit.prevent="submitSignup">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                이메일
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                id="email" type="email" placeholder="Email" v-model="email" required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="username">
                이름
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                id="username" type="text" placeholder="Name" v-model="username" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone-number">
                전화번호
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                id="phone-number" type="text" 
                placeholder="'-' 빼고 숫자만 입력해 주세요." 
                v-model="phonenumber"
                inputmode="numeric"
                pattern="[0-9]*"
                required
            >
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
                비밀번호
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                id="password" type="password" placeholder="8자 이상, 영어, 숫자, 특수문자 포함입니다" v-model="password" required>
            <p v-if="passwordStrength" class="text-red-500">{{ passwordStrength }}</p>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                비밀번호 확인
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-200 focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                id="confirm-password" type="password" placeholder="Confirm Password" v-model="confirmPassword" required>
        </div>
        <div class="mb-4">
            <button
                :class="inputChecker()
                    ? 'bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                    : 'bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded'"
                type="submit" :disabled="!inputChecker()">
                Sign In
            </button>
            <button
                @click="testChecker()" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                >
                test
            </button>
        </div>
    </form>
</template>
<script>
import { mapActions } from 'vuex';
import axios from "axios"

export default {
    name: 'SignupModal',
    props: ['closeIcon'],
    data() {
        return {
            username: '',
            email: '',
            phonenumber: '',
            password: '',
            confirmPassword: '',
            passwordStrength: ''
        }
    },
    watch: {
        password: function (value) {
            this.passwordStrength = this.checkPasswordStrength(value);
        }
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal']),
        
        //* 비밀번호 강도 체크
        checkPasswordStrength(password) {
            // 비밀번호 안전도를 검사하는 함수
            // TODO:대소문자 포함여부
            const minLength = 8;
            const passwordLowerCase = password.toLowerCase();
            // const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            // eslint-disable-next-line no-useless-escape
            const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

            if (passwordLowerCase.length < minLength) {
                return '비밀번호는 최소 ' + minLength + '자 이상이어야 합니다.';
            }

            if (!(hasLowerCase && hasNumber && hasSpecialChar)) {
                return '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.';
            }

            return '';
        },

        //* 모든 칸에 입력이 다 되었는지
        inputChecker() {
            if (
                this.username !== '' && 
                this.email !== '' && 
                this.phonenumber !== '' && 
                this.password !== '' && 
                this.confirmPassword !== '' &&
                this.confirmPassword === this.password &&
                this.passwordStrength === ''
                ) {
                return true;
            } else {
                return false;
            }
            
        },

        testChecker() {
            console.log(typeof this.phonenumber)
            console.log(this.phonenumber)
        },

        //* 회원가입
        async submitSignup() {
            if (!this.email || !this.username || !this.password || !this.phonenumber) {
                alert('모든 항목을 입력해주세요.');
                return;
            }

            if (this.password !== this.confirmPassword) {
                alert('비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
                return;
            }

            if (this.passwordStrength) {
                alert(this.passwordStrength);
                return;
            }

            try {
                const response = await axios.post('/api/v1/customer/register', {
                    name: this.username,
                    email: this.email,
                    password: this.password,
                    phonenumber: this.phonenumber,
                });
                console.log(response.data); // 서버로부터 받은 응답을 콘솔에 출력
                alert('회원가입이 완료되었습니다.'); // 회원가입 성공 알림창 표시
            } catch (error) {
                console.error(error);
                alert(error.response.data.msg); // 회원가입 실패 알림창 표시
            }
        }
    }
}
</script>
<style></style>