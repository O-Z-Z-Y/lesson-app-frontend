<template>
    <div>
        <div class="modal-content bg-white opacity-100 z-20 animate-[slideUp_0.5s_ease-out]">
            <h2>로그인</h2>
            <form @submit.prevent="login">
                <label>
                    이메일:
                    <input type="email" v-model="email" required>
                </label>

                <label>
                    비밀번호:
                    <input type="password" v-model="password" required>
                </label>

                <button type="submit">로그인</button>
            </form>
            <a href="#_" @click="CLOSE_MODAL()">닫기</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginModal',

}
</script>
<style>
    
</style>name: 'LoginModal',
