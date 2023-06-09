<template>
    <div class="min-h-[800px]">
        <section class="container flex flex-col justify-between lg:flex-row">
            <section class="w-full mr-8 shopping-list-wrapper">
                <h2 class="m-6 text-2xl font-bold">장바구니</h2>
                <hr class="h-0.5 bg-black">
                <div class="flex justify-between mx-2 my-4 cart-control">
                    <div class="flex items-center justify-between cart-select-all">
                        <input type="checkbox" id="selectAll" v-model="selectAllChecked"
                            class="w-5 h-5 mr-2 rounded form-checkbox text-cyan-700 focus:ring-cyan-700"
                            @change="toggleAllItems">
                        <label for="undefined" class="text-lg">전체선택 <span>{{ selectedItems ? selectedItems.length : 0 }}/{{ cartList.length }}</span></label>
                    </div>
                    <button
                        class="h-10 px-4 text-pink-600 duration-200 border border-pink-600 rounded-sm active:bg-gray-100 cart-delete-selected"
                        @click="deleteSelectedItems"
                    >
                        선택삭제
                    </button>
                </div>
                <hr class="">
                <div class="cart-list">
                    <CartItem 
                        :cartList="cartList"
                        @delete-item="deleteSelectedItems"
                        @change="changeSelectedItems" 
                    />
                </div>
            </section>
            <CartPayment 
                :selectedItems="selectedItems"
            />
        </section>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import CartItem from './CartItem.vue';
import CartPayment from './CartPayment.vue'
import axios from 'axios';

export default {
    name: 'Cart',
    components: {
        CartItem,
        CartPayment
    },
    data() {
        return {
            selectedItems: [],
            selectAllChecked: false,
        }
    },
    computed: {
        ...mapState('Courses', ['mainCourseList']),
        ...mapState('User', ['userEmail', 'userCart']),
        cartList() {
            let filteredList = []
            this.userCart.forEach(itemId => {
                filteredList.push(this.mainCourseList.find(item => item.id === itemId))
            });
            return filteredList
        }
    },
    methods: {
        ...mapMutations('User', ['SET_USERCART']),
        changeSelectedItems() {
            // items에 checked 값 넣기
            this.selectedItems = this.cartList.filter(item => item.checked)
            
            // checked가 All 인지
            if (this.selectedItems.length === this.cartList.length) {
                this.selectAllChecked = true;
            } else {
                this.selectAllChecked = false;
            }
        },
        toggleAllItems() {
            if (this.selectAllChecked) {
                this.cartList.forEach(item => {
                    item.checked = true;
                });
                this.selectedItems = this.cartList.filter(item => item.checked)

            } else {
                this.cartList.forEach(item => {
                    item.checked = false;
                })
                this.selectedItems = [];
            }
        },
        async deleteSelectedItems(id) {
            let filteredList;
            if (!id) {
                filteredList = this.userCart.filter(itemId => {
                    return !this.selectedItems.some(item => item.id === itemId);
                });
            } else {
                filteredList = this.userCart.filter(itemId => itemId !== id)
            }
            
            this.SET_USERCART(filteredList)
            try {
                const response = await axios.post('/api/v1/customer/savecart', {
                    email: this.userEmail,
                    cart: filteredList,
                },{
                    headers: {
                        'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                    }
                });
                this.SET_USERCART(response.data.updateCart.abandonedcart)
            } catch(error) {
                console.log(error)
            }
        },
        TODO() {
            alert('내가 안 만들었는데 니가 뭘 할 수 있는데 ㅋㅋㅋ')
        }
    }
}
</script>
<style></style>