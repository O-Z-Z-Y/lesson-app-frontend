<template>
    <div>
        <button @click="toggleAll">전체 선택</button>
        <label v-for="option in options" :key="option.value">
            <input type="checkbox" :value="option.value" v-model="selectedOptions" />
            {{ option.label }}
        </label>
    </div>
</template>

<script>

export default {
    name: 'Test',
    data() {
        return {
            selectedOption: null,
            options: [
                { label: '옵션 1', value: 'option1' },
                { label: '옵션 2', value: 'option2' },
                { label: '옵션 3', value: 'option3' },
            ],
        }
    },
    methods: {
        toggleAll() {
            if (this.selectedOptions.length === this.options.length) {
                this.selectedOptions = [];
            } else {
                this.selectedOptions = this.options.map((option) => option.value);
            }
        },
    },
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