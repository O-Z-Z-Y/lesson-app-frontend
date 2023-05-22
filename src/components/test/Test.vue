<template>
    <button @click="show = !show">토글</button>
    <Transition>
        <p v-if="show">안녕</p>
    </Transition>
</template>
<script>

export default {
    name: 'Test',
    data() {
        return {
            show: true
        }
    }
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>