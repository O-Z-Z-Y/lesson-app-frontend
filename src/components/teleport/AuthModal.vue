<template>
    <teleport to="#root-modal">
        <div v-if="modalOpened" class="modal fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center animate-[fadeIn_0.5s_ease-in-out]">
            <div class="modal-background absolute w-full h-full bg-black opacity-50" @click="closeModal" role="presentation" />
            <div v-if="authMode === 'login'" class="modal-content w-96 p-4 bg-white rounded opacity-100 z-20 animate-[slideUp_0.5s_ease-out]">
                <LoginModal :closeIcon="closeIcon"/>
            </div>
            <div v-else-if="authMode === 'signup'" class="modal-content w-96 p-4 bg-white rounded opacity-100 z-20 animate-[slideUp_0.5s_ease-out]">
                <SignupModal :closeIcon="closeIcon"/>
            </div>
            <div v-else-if="authMode === 'findEmail'" class="modal-content w-96 p-4 bg-white rounded opacity-100 z-20 animate-[slideUp_0.5s_ease-out]">
                <FindPassword :closeIcon="closeIcon"/>
            </div>
        </div>
    </teleport>
</template>


<script>
import { mapActions, mapState } from 'vuex';
import LoginModal from './auth/LoginModal.vue';
import SignupModal from './auth/SignupModal.vue';
import FindPassword from './auth/FindPassword.vue';
import closeIcon from './../../assets/svg/modal_close_x_icon.svg'

export default {
    name: 'ModalTeleport',
    components: {
        LoginModal,
        SignupModal,
        FindPassword
    },
    data() {
        return {
            closeIcon: closeIcon
        }
    },
    computed: {
        ...mapState('Modal', ['modalOpened']),
        ...mapState('Auth', ['authMode'])
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal'])
    }
}
</script>

<style>

</style>
