<template>
    <div class="min-h-[800px]">
        <section class="container flex flex-col justify-between lg:flex-row">
            <section class="w-full mr-8 shopping-list-wrapper">
                <h2 class="m-6 text-2xl font-bold">장바구니</h2>
                <hr class="h-0.5 bg-black">
                <div class="flex justify-between my-4 cart-control">
                    <div class="flex justify-between cart-select-all">
                        <input type="checkbox">
                        <label for="undefined">전체선택</label>
                    </div>
                    <button class="cart-delete-selected" @click="() => { }">
                        선택삭제
                    </button>
                </div>
                <hr class="">
                <div class="cart-list">
                    <article class="flex justify-between my-4 cart-item-card">
                        <div class="cart-item-card-checkbox">
                            <input type="checkbox">
                        </div>
                        <div class="cart-item-card-img">
                            임지
                        </div>
                        <div class="flex flex-col cart-item-card-info">
                            <div class="item-promotion">어쩌고 저쩌고 대충 극찬하는 미사여구</div>
                            <div class="cart-item-title">무슨무슨 강의</div>
                            <div class="item-expired">무제한 수강</div>
                        </div>
                        <div class="cart-item-card-price">
                            비싸다 으이
                        </div>
                        <button class="w-4 h-4 close"><CloseIcon /></button>
                    </article>
                </div>
            </section>
            <aside class="w-full p-6 mt-20 border cart-credit lg:w-80">
                결제창
                <div class="cart-payment-coupon">쿠폰</div>
                <div class="cart-using-point">포인트</div>
                <div class="price-regular">선택상품 금액</div>
                <div class="price-discount">할인금액</div>
                <div class="price-pay">총 결제금액</div>
                <div class="terms-agreement">주문 내용을 확인했으며, 어쩌고저쩌고와 결제에 동의합니다.</div>
                <div class="payment-button">결제하기</div>
            </aside>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import CloseIcon from '@/assets/svg/close_icon.svg'


export default {
    name: 'Cart',
    components: {
        CloseIcon
    },
    computed: {
        ...mapState('courses', ['mainCourseList'])
    }
}
</script>
<style></style>