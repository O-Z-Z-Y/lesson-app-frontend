<template lang="">
    <div class="flex items-center justify-center h-full">
        <button @click="onAuth">인증버튼</button>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { mountPaymentElement, authPhone } from '@/service/portone/index';

export default {
    name: 'Test',
    mounted() {
        mountPaymentElement();
    },
    computed: {
        ...mapState('Modal', ['modalMode']),
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal', 'setCourseModal']),
        onCourseModal() {
            this.setCourseModal();
            this.openModal();
        },
        onAuth() {
            authPhone();
        }
    }
};
</script>