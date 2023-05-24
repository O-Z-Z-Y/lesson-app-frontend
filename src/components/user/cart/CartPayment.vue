<template lang="">
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
        <div class="payment-button">
            <button class="w-full py-4 text-white duration-200 bg-pink-500 border rounded active:bg-pink-600 focus:outline-none ease">결제하기</button>
        </div>
    </aside>
</template>
<script>
export default {
    name: 'CartPayment'
}
</script>
<style lang="">
    
</style>