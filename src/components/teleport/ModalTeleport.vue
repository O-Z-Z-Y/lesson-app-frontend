<template>
    <teleport to="#root-modal">
        <div class="modal fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center animate-[fadeIn_0.5s_ease-in-out]" :class="isModalOpened" v-if="openModal">
            <div class="modal-background absolute w-full h-full bg-black opacity-50" @click="CLOSE_MODAL()" role="presentation" />
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
                <a href="#" @click="CLOSE_MODAL()">닫기</a>
            </div>
        </div>
    </teleport>
</template>


<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'ModalTeleport',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState('Modal', ['openModal']),
        isModalOpened() {
            return this.openModal ? 'mounted' : '';
        }
    },
    methods: {
        login() {
            // 로그인 작업 수행
            console.log(`이메일: ${this.email}, 비밀번호: ${this.password}으로 로그인했습니다.`);
            this.CLOSE_MODAL();
        },
        ...mapMutations('Modal', ['CLOSE_MODAL'])
    }
}
</script>

<style>

</style>
