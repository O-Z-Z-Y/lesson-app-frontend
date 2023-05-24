<template lang="">
    <article class="flex justify-between my-4 cart-item-card">
        <div class="mr-4 cart-item-card-checkbox">
            <input type="checkbox" class="w-5 h-5 rounded text-cyan-700 form-checkbox focus:ring-cyan-700">
        </div>
        <div class="w-32 h-20 bg-gray-300 cart-item-card-img">
            이미지 뤠퍼
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
</template>
<script>
import CloseIcon from '@/assets/svg/close_icon.svg'

export default {
    name: 'CartItem',
    components: {
        CloseIcon
    }
}
</script>
<style lang="">
    
</style>