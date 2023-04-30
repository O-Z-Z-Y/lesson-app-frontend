<template>
    <teleport to="#root-modal">
        <div class="modal" v-if="showModal">
            <div class="modal-content">
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
                <a href="#_" @click="closeModal">닫기</a>
            </div>
        </div>
    </teleport>
</template>
  
  
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            // 로그인 작업 수행
            console.log(`이메일: ${this.email}, 비밀번호: ${this.password}으로 로그인했습니다.`);
            this.closeModal();
        },
        closeModal() {
            // 모달 닫기
            this.$store.dispatch('Modal/HIDE_MODAL');
        }
    }
}
</script>
  
<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 1rem;
}
</style>
  