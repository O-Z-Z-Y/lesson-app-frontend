<template lang="">
    <aside class="w-full lg:min-w-[300px] lg:max-w-[300px] p-6 mt-20 border cart-credit lg:w-[300px] rounded-md">
        <p class="mb-6 text-lg">결제창</p>
        <div class="hidden">
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
                    <button class="h-full px-2 border rounded-sm coupon-selection shrink-0" @click="TODO">쿠폰 선택</button>
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
                    <button class="h-full px-2 border rounded-sm point-selection shrink-0" @click="TODO">전액 사용</button>
                </div>
            </div>
            <div class="flex justify-between mb-1 price-regular">
                <span>선택상품</span>
                <div class="price-regular-value">
                    <span>{{ formatPrice(regularPrice) }}</span>
                </div>
            </div>
            <div class="flex justify-between mb-1 price-discount">
                <button class="display-discount-list-button">
                    <span class="text-red-400">할인금액</span>
                </button>
                <div class="text-red-400 price-discount-value">
                    <span>{{ formatPrice(totalDiscountedPrice) }}</span>
                </div>
            </div>
            <div class="mb-1 text-gray-400 price-discount-list">
                <dl>
                    <div class="flex justify-between">
                        <dt>- 즉시할인</dt>
                        <dd>
                            {{ formatPrice(discountedPrice) }}
                        </dd>
                    </div>
                    <div class="flex justify-between">
                        <dt>- 쿠폰할인</dt>
                        <dd>
                            {{ formatPrice(discountedCoupon) }}
                        </dd>
                    </div>
                    <div class="flex justify-between">
                        <dt>- 포인트사용</dt>
                        <dd>
                            {{ formatPrice(discountedPoint) }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <div class="flex justify-between mb-2 font-bold price-pay">
            <span>총 결제금액</span>
            <div class="price-pay-value">
                <span>{{ formatPrice(payPrice) }}</span>
            </div>
        </div>
        <div class="mb-2 text-sm text-gray-400 terms-agreement">주문 내용을 확인했으며, 어쩌고저쩌고와 결제에 동의합니다.</div>
        <div class="payment-button">
            <button 
            @click="onClickPayment"
            class="w-full py-4 text-white duration-200 bg-pink-500 border rounded active:bg-pink-600 focus:outline-none ease">결제하기</button>
        </div>
    </aside>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CartPayment',
    props: {
        selectedItems: Array
    },
    data() {
        return {
            buyerName: '',
            buyerEmail: '',
            buyerTel: '',
        }
    },
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://cdn.iamport.kr/v1/iamport.js';
        document.body.appendChild(script);
    },
    computed: {
        // 선택 상품
        regularPrice() {
            return this.selectedItems.reduce((sum, item) => sum + item.price, 0)
        },

        //* 할인 영역 (꼭 '-'를 붙혀야 함)
        totalDiscountedPrice() {
            // 상품 자체 할인 or 할인 쿠폰 or 포인트 사용 추가 해야함
            return this.discountedPrice + this.discountedCoupon + this.discountedPoint
        },
        //* 자체 할인
        discountedPrice() {
            return 0
        },
        //* 쿠폰 할인
        discountedCoupon() {
            return 0
        },
        //* 포인트 할인
        discountedPoint() {
            return 0
        },
        payPrice() {
            return this.regularPrice - this.totalDiscountedPrice
        },

        //* 결제 관련 변수
        productName() {
            if (this.selectedItems.length === 0) {
                return '';
            } else if (this.selectedItems.length === 1){
                return this.selectedItems[0].title
            } else {
                return `${this.selectedItems[0].title} 외 ${this.selectedItems.length - 1}개`
            }
        }
    },
    methods: {
        formatPrice(price) {
            return price.toLocaleString('ko-KR') + '원';
        },

        async fetchBuyerInfo() {
            try {
                const response = await axios.get('/api/v1/customer/getcustomer', {
                    headers: {
                        'Authorization': `Bearer ${this.$cookies.get('access_token')}`
                    }
                })
                this.buyerName = response.data.user.name
                this.buyerEmail = response.data.user.email
                this.buyerTel = response.data.user.phonenumber
            } catch(error) {
                console.log(error)
            }
        },
        onClickPayment() {
            if (this.selectedItems === 0) {
                return;
            }
            else {
                this.fetchBuyerInfo()
                //* 여기가 결제
                this.initPG(); // Initalize PG
                this.requestPay(); // Call PG API
            }
        },
        /**
         * Init PaymentGateway
         */
        initPG(){
            const IMP = window.IMP;
            IMP.init("imp75375154");
            console.log("Initalize Payment Gateway..");
        },

        /**
         * Section of request PG call
         */

        requestPay() {
            IMP.request_pay({ // param
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: "ORD20180131-0000011",
            name: this.productName,
            amount: this.payPrice,
            buyer_email: this.buyerEmail,
            buyer_name: this.buyerName,
            buyer_tel: this.buyerTel,
            }, rsp => { 
                //callback
                if (rsp.success) {
                    console.log("success");
                    //* 결제 완료된 아이템은 카트에서 뺍니다.
                    this.deleteSelectedItems()
                    //* selectedItems에서 pop해와서 결과창에 보여주는걸로
                    this.$router.push(`/order/result`)
                    // 결제 성공 시 로직,
                    
                } else {
                    console.log("failed");
                    // 결제 실패 시 로직,
                }
            });
        },
        async deleteSelectedItems() {
            let filteredList = this.userCart.filter(itemId => {
                    return !this.selectedItems.some(item => item.id === itemId);
            });
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
    }
}
</script>
<style lang="">
    
</style>