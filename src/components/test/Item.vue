<template>
    <div>
        <input 
            type="checkbox" 
            :id="item.id" 
            :value="item.value" 
            v-model="isChecked" 
            @change="emitChange" 
        />
        <label :for="item.id">{{ item.label }}</label>
        {{ item.value }}
    </div>
</template>
  
<script>
export default {
    name: 'Item',
    props: {
        item: {
            type: Object,
            required: true,
        },
        selectedItems: {
            type: Array,
            required: true,
        },
    },
    computed: {
        isChecked: {
            get() {
                return this.selectedItems.includes(this.item.value);
            },
            set(checked) {
                if (checked) {
                    this.$emit('change', [...this.selectedItems, this.item.value]);
                } else {
                    this.$emit(
                        'change',
                        this.selectedItems.filter((item) => item !== this.item.value)
                    );
                }
            },
        },
    },
    methods: {
        emitChange() {
            this.$emit('change');
        },
    },
};
</script>
  