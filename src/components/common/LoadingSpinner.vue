<template>
    <div class="flex justify-center items-center">
        <div class="spinner rounded-full border-t-4 border-b-4 border-gray-800 h-16 w-16"></div>
    </div>
</template>
<script>
export default {
    name: 'LoadingSpinner'
}
</script>
<style scoped>
.spinner {
    animation: spinner 1.2s linear infinite;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}
</style>