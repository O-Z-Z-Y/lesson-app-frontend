<template lang="">
    <div class="" v-for="(item, index) in cartList" :key="index">
        <article class="flex justify-between mx-2 my-4 cart-item-card">
            <div class="mr-4 cart-item-card-checkbox">
                <input 
                    type="checkbox" 
                    :id="item.id"
                    v-model="item.checked"
                    @change="emitChange"
                    class="w-5 h-5 rounded text-cyan-700 form-checkbox focus:ring-cyan-700"
                >
            </div>
            <div class="w-32 h-20 bg-gray-300 cart-item-card-img">
                <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${item.thumbnail}`" alt="thumbnail">
            </div>
            <div class="flex flex-col w-1/3 cart-item-card-info">
                <div class="item-promotion"></div>
                <div class="cart-item-title">{{ item.title }}</div>
                <div class="item-expired"></div>
            </div>
            <div class="cart-item-card-price">
                {{ item.price === 0 ? '무료' : item.price.toLocaleString('ko-KR')+'원' }}
            </div>
            <button class="w-4 h-4 close fill-gray-400" @click="TODO"><CloseIcon /></button>
        </article>
    </div>
</template>
<script>
import CloseIcon from '@/assets/svg/close_icon.svg'

export default {
    name: 'CartItem',
    components: {
        CloseIcon
    },
    props: {
        cartList: Array
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`
        }
    },
    computed: {
    },
    methods: {
        emitChange() {
            this.$emit('change');
        },
        TODO() {
            alert('내가 안 만들었는데 니가 뭘 할 수 있는데 ㅋㅋㅋ')
        }
    },
    emits: ['change']
}
</script>
<style lang="">
    
</style>