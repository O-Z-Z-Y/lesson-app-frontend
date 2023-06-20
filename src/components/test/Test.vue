<template lang="">
    <div class="flex items-center justify-center h-full">
        <button @click="onCourseModal">test</button>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Test',
    computed: {
        ...mapState('Modal', ['modalMode']),
    },
    methods: {
        ...mapActions('Modal', ['openModal', 'closeModal', 'setCourseModal']),
        onCourseModal() {
            this.setCourseModal();
            this.openModal();
        }
    }
};
</script>