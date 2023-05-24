<template>
    <div>
        <h2>Checkbox List</h2>
        <div>
            <input type="checkbox" id="selectAll" v-model="selectAllChecked" @change="toggleAllItems" />
            <label for="selectAll">Select All</label>
        </div>
        <div v-for="item in items" :key="item.id">
            <input type="checkbox" :id="item.id" :value="item.value" v-model="selectedItems" @change="checkAllSelected" />
            <label :for="item.id">{{ item.label }}</label>
        </div>
        <p>Selected Items: {{ selectedItems }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Test',
    data() {
        return {
            items: [
                { id: 1, label: 'Item 1', value: 'item1' },
                { id: 2, label: 'Item 2', value: 'item2' },
                { id: 3, label: 'Item 3', value: 'item3' },
                { id: 4, label: 'Item 4', value: 'item4' },
            ],
            selectedItems: [],
            selectAllChecked: false,
        };
    },
    methods: {
        toggleAllItems() {
            if (this.selectAllChecked) {
                this.selectedItems = this.items.map((item) => item.value);
            } else {
                this.selectedItems = [];
            }
        },
        checkAllSelected() {
            if (this.selectedItems.length === this.items.length) {
                this.selectAllChecked = true;
            } else {
                this.selectAllChecked = false;
            }
        },
    },
};
</script>