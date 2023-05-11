<template>
    <form class="max-w-md mx-auto">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="username">
                Username
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username" v-model="username">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Email" v-model="email">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password" v-model="password">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                Confirm Password
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type= "password" placeholder="Confirm Password" v-model="confirmPassword">
        </div>
        <div class="mb-4">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="signup">
                Sign Up
            </button>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        signup() {
            // 회원가입 로직을 작성합니다.
        },
    },
};
</script>