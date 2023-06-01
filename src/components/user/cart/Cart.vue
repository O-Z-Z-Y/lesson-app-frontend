<template>
    <div class="min-h-[800px]">
        <section class="container flex flex-col justify-between lg:flex-row">
            <section class="w-full mr-8 shopping-list-wrapper">
                <h2 class="m-6 text-2xl font-bold">장바구니</h2>
                <hr class="h-0.5 bg-black">
                <button @click="filteredListed">
                    테스트 입니다.
                </button>
                <div class="flex justify-between my-4 cart-control">
                    <div class="flex items-center justify-between cart-select-all">
                        <input type="checkbox" class="w-5 h-5 mr-2 rounded form-checkbox text-cyan-700 focus:ring-cyan-700">
                        <label for="undefined" class="text-lg">전체선택 1/1</label>
                    </div>
                    <button class="h-10 px-4 text-pink-600 duration-200 border border-pink-600 rounded-sm active:bg-gray-100 cart-delete-selected">
                        선택삭제
                    </button>
                </div>
                <hr class="">
                <div class="cart-list">
                    <CartItem v-for="(item, index) in cartList" 
                        :key="index"
                        :id="item.id"
                        :thumbnail="item.thumbnail"
                        :title="item.title"
                        :description="item.description"
                        :price="item.price ? item.price : 0"
                    />
                </div>
            </section>
            <CartPayment />
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import CartItem from './CartItem.vue';
import CartPayment from './CartPayment.vue'


export default {
    name: 'Cart',
    components: {
        CartItem,
        CartPayment
    },
    computed: {
        ...mapState('Courses', ['mainCourseList']),
        ...mapState('User', ['userCart']),
        cartList() {
            const filteredList = []
            this.userCart.forEach(itemId => {
                filteredList.push(this.mainCourseList.find(item => item.id === itemId))
            });
            return filteredList
        }
    },
}
</script>
<style></style>