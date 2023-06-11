<template lang="">
    <UserPage />
    <div class="container">
        <div class="mx-4 mt-4 text-center" v-for="(item, index) in userPaidItems" :key="index">
            <article class="flex justify-between mx-2 my-4 cart-item-card ">
                <div class="w-32 h-20 bg-gray-300 cart-item-card-img">
                    <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${item.thumbnail}`" alt="thumbnail" @error="replaceDefaultImg">
                </div>
                <div class="flex flex-col w-1/3 cart-item-card-info">
                    <div class="item-promotion"></div>
                    <div class="cart-item-title">{{ item.title }}</div>
                    <div class="item-expired"></div>
                </div>
                <div class="flex items-center justify-center w-24 cart-item-card-price">
                    {{ item.price === 0 ? '무료' : item.price.toLocaleString('ko-KR')+'원' }}
                </div>
                <button class="w-4 h-4 close fill-gray-400" @click="deleteItem(item.id)"><CloseIcon /></button>
            </article>
            <hr v-show="index !== userPaidItems.length-1">
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import UserPage from './UserPage.vue';

export default {
    name: 'UserCourses',
    components: {
        UserPage
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`
        }
    },
    computed: {
        ...mapState('User', ['userPaidItems'])
    },
    methods: {
        replaceDefaultImg(e) {
            e.target.src = `${this.thumbnailUrl}/thumbnail_default.jpeg`
        },
    }
}
</script>
<style lang="">
    
</style>