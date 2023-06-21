<template lang="">
    <UserPage />
    <div class="container">
        <h3 class="my-4 text-xl">회원 탈퇴</h3>
        <div class="mb-4 withdraw-notice">
            <h5 class="mb-4 text-lg font-bold">탈퇴 안내</h5>
            <p class="mb-1 text-sm text-red-500">계정 탈퇴 시, 계정과 관련된 모든 권한이 사라지며 복구할 수 없습니다.</p>
            <p class="mb-1 text-sm text-gray-600">직접 작성한 컨텐츠(게시물, 댓글 등)는 자동으로 삭제되지 않으며, 만일 삭제를 원하시면 탈퇴 이전에 삭제가 필요합니다.</p>
            <p class="mb-1 text-sm text-gray-600">탈퇴 후에 동일한 메일로 재가입이 가능하나, 탈퇴한 계정과 연동되지 않습니다.</p>
            <p class="mb-1 text-sm text-gray-600">현재 비밀번호를 입력하고 탈퇴하기를 누르시면 위 내용에 동의하는 것으로 간주됩니다.</p>
        </div>
        <div class="auth-account">
            <label for="password">탈퇴하기를 진행하고 싶으시면 비밀번호를 입력 해 주세요.</label>
            <div class="box-border flex items-center h-10 coupon-interactions">
                <input class="w-full h-full px-2 mr-2 border border-gray-200 rounded-sm lg:w-72" v-model="password" type="password" id="password" placeholder="Password" @keyup.enter="withdraw">
                <button class="h-full px-2 border rounded-sm coupon-selection shrink-0" @click="withdraw">확인</button>
            </div>
        </div>
    </div>
</template>
<script>
import UserPage from './UserPage.vue';
import { logout } from '@/service/auth/logout';

export default {
    name: 'UserWithdrawal',
    components: {
        UserPage
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    async mounted() {
        try {
            const response = await this.axios.get('/api/v1/customer/getcustomer')
            this.email = response.data.user.email
        } catch (error) {
            console.log(error)
        }
    },
    methods: {  
        async withdraw() {
            let agreement = confirm('정말 탈퇴하시겠습니까? 삭제된 정보는 복구되지 않습니다.')
            if (agreement) {
                try {
                    const response = await this.axios.post('/api/v1/customer/check', {
                        email: this.email,
                        password: this.password
                    })
                    if (response.data.data) {
                        try {
                            const response = await this.axios.post('/api/v1/customer/withdrawal')
                            alert(response.data.msg)
                        } catch (error) {
                            console.log(error)
                            alert('탈퇴에 실패하였습니다. 고객센터에 문의해 주세요.')
                        }
                        logout('withdrawal')
                    } else {
                        alert('비밀번호가 일치하지 않습니다.')
                    }
                } catch (error) {
                    console.log('check',error)
                    alert('비밀번호를 확인해 주세요.')
                }
            } else if (!agreement) {
                alert('탈퇴가 취소되었습니다.')
            }
        }
    }
}
</script>
<style lang="">
    
</style>