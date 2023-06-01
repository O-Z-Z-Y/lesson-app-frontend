<template lang="">
    <article class="flex justify-between my-4 cart-item-card">
        <div class="mr-4 cart-item-card-checkbox">
            <input type="checkbox" class="w-5 h-5 rounded text-cyan-700 form-checkbox focus:ring-cyan-700">
        </div>
        <div class="w-32 h-20 bg-gray-300 cart-item-card-img">
            <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${thumbnail}`" alt="thumbnail">
        </div>
        <div class="flex flex-col cart-item-card-info">
            <div class="item-promotion"></div>
            <div class="cart-item-title">{{ title }}</div>
            <div class="item-expired"></div>
        </div>
        <div class="cart-item-card-price">
            {{ price === 0 ? '무료' : price.toLocaleString('ko-KR')+'원' }}
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
    },
    props: {
        id: Number,
        thumbnail: String,
        title: String,
        description: String,
        price: Number,
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`
        }
    },
}
</script>
<style lang="">
    
</style>