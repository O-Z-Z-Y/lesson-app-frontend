<template>
    <teleport to="#root-modal">
        <transition name="modal" mode="out-in">
            <div v-if="modalOpened" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full modal">
                <div class="absolute w-full h-full bg-black/50 modal-background" @click="closeModal" role="presentation" />
                <component :is="activeModal"></component>
            </div>
        </transition>
    </teleport>
</template>


<script>
import { mapActions, mapState } from 'vuex';
import LoginModal from './auth/LoginModal.vue';
import SignupModal from './auth/SignupModal.vue';
import FindPasswordModal from './auth/FindPasswordModal.vue';

export default {
    name: 'ModalTeleport',
    components: {
        LoginModal,
        SignupModal,
        FindPasswordModal
    },
    computed: {
        ...mapState('Modal', ['modalOpened']),
        ...mapState('Auth', ['authMode']),
        activeModal() {
            switch (this.authMode) {
                case 'login':
                    return 'LoginModal';
                case 'signup':
                    return 'SignupModal';
                case 'findPassword':
                    return 'FindPasswordModal';
                default:
                    return null; // 다른 authMode 값에 대한 처리를 원한다면, 해당 처리를 추가하세요.
            }
        }
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal'])
    }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    @apply transition-opacity duration-300
}

.modal-enter-from,
.modal-leave-to {
    @apply opacity-0
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
    @apply transition-transform duration-300
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
    @apply translate-y-96
}
</style>
