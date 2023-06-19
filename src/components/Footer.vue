<template lang="">
    <footer class="relative flex items-center h-32 bg-emerald-950">
        <div class="ml-4 text-xs text-gray-200/95 py-auto text-wrapper">
            <p>{{ company.companyname }} | 대표자 : {{ company.companyrepresentativename }}</p>
            <p>사업자번호 : {{ company.companynumber }} | 통신판매업신고번호 : {{ company.internetauthnumber }}</p>
            <p>연락처: {{ company.companycontact }} | 이메일 : {{ company.companyemail }}</p>
            <p>주소: {{ company.companyaddress }}</p>
            <hr class="my-2">
            <p>© CODINGAPPLE, ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
</template>
<script>
export default {
    name:'Footer',
    data() {
        return {
            company: ''
        }
    },
    async created() {
        try {
            const response = await this.axios.get(`/api/v1/jobs/config/get`)
            this.company = response.data.data
        } catch (error) {
            console.log('footer', error)
        }
    },
}
</script>
<style lang="">
    
</style>