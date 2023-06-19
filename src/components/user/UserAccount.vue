<template lang="">
    <UserPage />
    <div class="container">
        <h3 class="my-4 text-xl">정보 변경</h3>
        <div class="auth-account" v-if="!isValid">
            <label for="password">정보 수정을 위해 비밀번호를 입력해 주세요.</label>
            <div class="box-border flex items-center h-10 coupon-interactions">
                <input class="w-full h-full px-2 mr-2 border border-gray-200 rounded-sm lg:w-72" v-model="password" type="password" id="password" placeholder="Password" @keyup.enter="validatePassword">
                <button class="h-full px-2 border rounded-sm coupon-selection shrink-0" @click="validatePassword">확인</button>
            </div>
            <p v-show="validateMsg !== ''">{{ validateMsg }}</p>
        </div>
        <form @submit.prevent="submitAccount" class="flex flex-col" v-else-if="isValid">
            <label class="text-lg" for="email">이메일</label>
            <input class="w-full h-10 px-2 mr-2 font-bold text-gray-400 border border-gray-200 rounded-sm lg:w-72" v-model="email" type="text" id="email" :placeholder="email" disabled>
            <label class="mt-4 text-lg font-bold" for="change-password">비밀번호 변경</label>
            <p class="mt-2">비밀번호는 영어,숫자,특수문자를 포함한 8자 이상으로 설정해주세요.</p>
            <input class="w-full h-10 px-2 mr-2 text-gray-700 border border-gray-200 rounded-sm lg:w-72" v-model="changePassword" type="password" id="change-password" placeholder="Change Password">
            <p class="text-red-500">{{passwordStrength}}</p>
            <label class="mt-4 text-lg" for="confirm-password">비밀번호 확인</label>
            <input class="w-full h-10 px-2 mr-2 text-gray-700 border border-gray-200 rounded-sm lg:w-72" v-model="confirmPassword" type="password" id="confirm-password" placeholder="Confirm Password">
            <label class="mt-4 text-lg font-bold" for="name">이름(*)</label>
            <input class="w-full h-10 px-2 mr-2 text-gray-700 border border-gray-200 rounded-sm lg:w-72" v-model="name" type="text" id="name" :placeholder="name">
            <label class="mt-4 text-lg font-bold" for="phone-number">전화번호(*)</label>
            <input class="w-full h-10 px-2 mr-2 text-gray-700 border border-gray-200 rounded-sm lg:w-72" v-model="phonenumber" type="text" id="phone-number" :placeholder="phonenumber">

            <button>변경하기</button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { checkPasswordStrength } from '@/service/auth/signup';
import { fetchUserdata } from '@/service/auth/login';
import UserPage from './UserPage.vue';

export default {
    name: 'UserAccount',
    components: {
        UserPage
    },
    data() {
        return {
            email: '',
            password: '',
            name: '',
            phonenumber: '',
            changePassword: '',
            confirmPassword: '',
            passwordStrength: '',
            isValid: false,
            validateMsg: '',
        }
    },
    watch: {
        changePassword: function (value) {
            this.passwordStrength = checkPasswordStrength(value);
        }
    },
    async mounted() {
        try {
            const response = await this.axios.get('/api/v1/customer/getcustomer')
            this.email = response.data.user.email,
            this.name = response.data.user.name,
            this.phonenumber = response.data.user.phonenumber
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        ...mapState('User', ['username', 'userEmail', ''])
    },
    methods: {
        async validatePassword() {
            this.validateMsg = '확인 중입니다.'
            try {
                const response = await this.axios.post('/api/v1/customer/check', {
                    email: this.email,
                    password: this.password
                })
                if (response.data.data === true) {
                    this.isValid = response.data.data
                } else if (response.data.data === false) {
                    alert('비밀번호가 틀립니다.')
                }
                this.validateMsg = ''
            } catch (error) {
                console.log(error)
                this.validateMsg = ''
            }
        },
        async submitAccount() {
            if (!this.name || !this.phonenumber) {
                alert('이름과 전화번호는 필수 항목입니다..');
                return;
            }
            if (this.passwordStrength) {
                alert('비밀번호를 확인 해 주세요.')
            }

            try {
                const response = await this.axios.post('/api/v1/customer/edit', {
                    name: this.name,
                    email: this.email,
                    password: (this.confirmPassword ? this.confirmPassword : this.password),
                    phonenumber: this.phonenumber
                })
                this.$cookies.set('access_token', response.data.token, 60*60)

                await fetchUserdata()
                alert('변경이 완료되었습니다.')
            } catch(error) {
                console.log(error)
            }
        },
    }
    
}
</script>
<style lang="">
    
</style>