<template>
    <div>
        <label>
            <input type="checkbox" v-model="isChecked" />
            Check me
        </label>
        <p v-if="isChecked">Checkbox is checked!</p>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'Test',
    setup() {
        const isChecked = ref(false);

        return {
            isChecked
        };
    }
};
</script>