<template>
    <div class="z-20 p-4 rounded modal-content w-96 bg-white/100">
        <div class="flex justify-between signup-header">
            <h2 class="mb-8 text-xl font-bold">비밀번호 찾기</h2>
            <a href="#" @click="closeModal">
                <CloseIcon />
            </a>
        </div>
        <form class="max-w-md mx-auto" @submit.prevent="submitFindPassword">
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
                <button :class="email !== '' && phonenumber !== ''
                    ? 'w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    : 'w-full bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded'"
                    type="submit" :disabled="email === '' || phonenumber === ''">
                    Log In
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import CloseIcon from '@/assets/svg/close_icon.svg'

export default {
    name:'FindPasswordModal',
    components: {
        CloseIcon
    },
    data() {
        return {
            email: '',
            phonenumber: ''
        }
    },
    methods: {
        async submitFindPassword() {
            if (!this.email || !this.phonenumber) {
                alert('모든 항목을 입력해주세요.');
                return;
            }

            try {
                const response = await this.axios.post('/api/응몰라', {
                    email: this.email,
                    phonenumber: this.phonenumber,
                });
                console.log(response.data);
                alert('두둥탁')
            } catch (error) {
                console.error(error);
                alert('안돼여, 몰라여');
            }
        }
    }
}
</script>
<style>
    
</style>