<template>
    <div class="z-20 p-4 rounded modal-content w-96 bg-white/100">
        <div class="flex justify-between signup-header">
            <h2 class="mb-8 text-xl font-bold">회원가입</h2>
            <a @click="closeModal" class="w-5 h-5 close-icon-wrapper">
                <CloseIcon w-full h-full/>
            </a>
        </div>
        <form class="max-w-md mx-auto" @submit.prevent="submitSignup">
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="email">
                    이메일
                </label>
                <input
                    class="w-full px-3 py-2 leading-tight text-gray-700 duration-200 border rounded shadow appearance-none focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                    id="email" type="email" placeholder="Email" v-model="email" required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="username">
                    이름
                </label>
                <input
                    class="w-full px-3 py-2 leading-tight text-gray-700 duration-200 border rounded shadow appearance-none focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                    id="username" type="text" placeholder="Name" v-model="username" required>
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="phone-number">
                    전화번호
                </label>
                <input
                    class="w-full px-3 py-2 leading-tight text-gray-700 duration-200 border rounded shadow appearance-none focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                    id="phone-number" type="text" 
                    placeholder="'-' 빼고 숫자만 입력해 주세요." 
                    v-model="phonenumber"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    required
                >
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="password">
                    비밀번호
                </label>
                <input
                    class="w-full px-3 py-2 leading-tight text-gray-700 duration-200 border rounded shadow appearance-none focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
                    id="password" type="password" placeholder="8자 이상, 영어, 숫자, 특수문자 포함입니다" v-model="password" required>
                <p v-if="passwordStrength" class="text-red-500">{{ passwordStrength }}</p>
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700" for="confirm-password">
                    비밀번호 확인
                </label>
                <input
                    class="w-full px-3 py-2 leading-tight text-gray-700 duration-200 border rounded shadow appearance-none focus:outline-gray-500 focus:shadow-outline hover:bg-zinc-100"
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
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions,mapMutations } from 'vuex';
import CloseIcon from '@/assets/svg/close_icon.svg'
import { signup, checkPasswordStrength } from '@/service/auth/signup';

export default {
    name: 'SignupModal',
    components: {
        CloseIcon
    },
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
            this.passwordStrength = checkPasswordStrength(value);
        }
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal']),
        ...mapMutations('Auth', ['SET_LOGGED']),
        ...mapMutations('User', ['SET_USERNAME']),
        
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
                signup(this.username, this.email, this.password, this.phonenumber)
                this.closeModal()
            } catch (error) {
                console.error(error);
                alert(error.response.data.msg); // 회원가입 실패 알림창 표시
            }
        }
    }
}
</script>
<style></style>