<template>
    <div class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-emerald-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
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