<template>
    <div class="min-h-[800px]">
        <section class="container flex flex-col justify-between lg:flex-row">
            <section class="w-full mr-8 shopping-list-wrapper">
                <h2 class="m-6 text-2xl font-bold">장바구니</h2>
                <hr class="h-0.5 bg-black">
                <div class="flex justify-between my-4 cart-control">
                    <div class="flex items-center justify-between cart-select-all">
                        <input type="checkbox" class="w-5 h-5 mr-2 rounded form-checkbox text-cyan-700 focus:ring-cyan-700">
                        <label for="undefined" class="text-lg">전체선택 1/1</label>
                    </div>
                    <button class="h-10 px-4 border rounded-sm cart-delete-selected">
                        선택삭제
                    </button>
                </div>
                <hr class="">
                <div class="cart-list">
                    <article class="flex justify-between my-4 cart-item-card">
                        <div class="mr-4 cart-item-card-checkbox">
                            <input type="checkbox" class="w-5 h-5 rounded text-cyan-700 form-checkbox focus:ring-cyan-700">
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
                        <button class="w-4 h-4 close fill-gray-400"><CloseIcon /></button>
                    </article>
                </div>
            </section>
            <aside class="w-full lg:min-w-[300px] lg:max-w-[300px] p-6 mt-20 border cart-credit lg:w-[300px] rounded-md">
                <p class="mb-6 text-lg">결제창</p>
                <div class="mb-4 coupon-selection">
                    <div class="flex justify-between coupon-selection-label">
                        <label for="coupon" class="font-bold">쿠폰 할인</label>
                        <div class="coupon-usable">
                            <span class="text-gray-400 coupon-usable-label">사용가능</span>
                            <span class="text-cyan-700 coupon-usable-value"> 0 </span>
                        </div>
                    </div>
                    <div class="box-border flex items-center h-10 coupon-interactions">
                        <input class="w-full h-full px-2 mr-2 text-right border border-gray-200 rounded-sm" type="text" id="coupon" placeholder="0" disabled>
                        <button class="h-full px-2 border rounded-sm coupon-selection shrink-0">쿠폰 선택</button>
                    </div>
                </div>
                <div class="mb-4 cart-using-point">
                    <div class="flex justify-between using-point-label">
                        <label for="point" class="font-bold">포인트 사용</label>
                        <div class="point-usable">
                            <span class="text-gray-400 point-usable-label">보유</span>
                            <span class="text-cyan-700 point-usable-value"> 0 </span>
                        </div>
                    </div>
                    <div class="flex items-center h-10 point-interactions">
                        <input class="w-full h-full px-2 mr-2 text-right border border-gray-200 rounded-sm" type="text" id="point" placeholder="0" disabled>
                        <button class="h-full px-2 border rounded-sm point-selection shrink-0">전액 사용</button>
                    </div>
                </div>
                <div class="flex justify-between mb-1 price-regula">
                    <span>선택상품</span>
                    <div class="price-regular-value">
                        <span>129387123원</span>
                    </div>
                </div>
                <div class="flex justify-between mb-1 price-discoun">
                    <button class="display-discount-list-button">
                        <span class="text-red-400">할인금액</span>
                    </button>
                    <div class="price-discount-value">
                        <span>129387123원</span>
                    </div>
                </div>
                <div class="mb-1 text-gray-400 price-discount-lis">
                    <dl>
                        <div class="flex justify-between">
                            <dt>- 즉시할인</dt>
                            <dd>
                                ~~원
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>- 쿠폰할인</dt>
                            <dd>
                                ~~원
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>- 포인트사용</dt>
                            <dd>
                                ~~원
                            </dd>
                        </div>
                    </dl>
                </div>
                <div class="flex justify-between mb-2 font-bold price-pay">
                    <span>총 결제금액</span>
                    <div class="price-pay-value">
                        <span>129387123원</span>
                    </div>
                </div>
                <div class="mb-2 text-sm text-gray-400 terms-agreement">주문 내용을 확인했으며, 어쩌고저쩌고와 결제에 동의합니다.</div>
                <div class="border rounded-sm payment-button">
                    <button class="w-full h-10">결제하기</button>
                </div>
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