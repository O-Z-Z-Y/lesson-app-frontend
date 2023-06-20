<template lang="">
    <UserPage />
    <div class="container">
        <div class="mx-4 mt-4 text-center" v-for="(item, index) in userPaidItems" :key="index">
            <article class="flex justify-between mx-2 my-4 cart-item-card ">
                <div class="w-32 h-20 cart-item-card-img">
                    <img class="object-cover w-full h-full m-auto rounded-lg" :src="`${thumbnailUrl}/${item.thumbnail}`" alt="thumbnail" @error="replaceDefaultImg">
                </div>
                <div class="flex flex-col justify-center w-1/3 cart-item-card-info">
                    <div class="cart-item-title">{{ item.title }}</div>
                </div>
                <div class="flex items-center justify-center w-24 cart-item-card-price">
                    {{ item.expired ? item.expired+'일' : '무제한' }}
                </div>
                <button class="w-4 h-4 close fill-gray-400" @click="deleteItem(item.id)"><CloseIcon /></button>
            </article>
            <hr v-show="index !== userPaidItems.length-1">
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { getAccessList } from '@/service/courses/maincourse';
import UserPage from './UserPage.vue';

export default {
    name: 'UserCourses',
    components: {
        UserPage
    },
    data() {
        return {
            thumbnailUrl: `${process.env.VUE_APP_BACK_URL}/public/images`,
            itemList: []
        }
    },
    created() {
        getAccessList()
        const filteredlist = this.mainCourseList.filter(item => this.userAccessList.some(itemId => itemId === item.id))
        this.SET_USERPAIDITEMS(filteredlist)
        this.itemList = filteredlist
        this.itemList = this.itemList.map(async (item) => {
            try {
                const response = await this.axios.get(`/api/v1/jobs/maincourse/getexpire/${item.id}`)
                return { ...item, expired: response.data.date}
            } catch (error) {
                console.log(error)
            }
        })
    },
    computed: {
        ...mapState('User', ['userAccessList', 'userPaidItems']),
        ...mapState('Courses', ['mainCourseList'])
    },
    methods: {
        ...mapMutations('User', ['SET_USERPAIDITEMS']),
        replaceDefaultImg(e) {
            e.target.src = `${this.thumbnailUrl}/thumbnail_default.jpeg`
        },
        async fetchExpired(id) {
            try {
                const response = await this.axios.get(`/api/v1/jobs/maincourse/getexpire/${id}`)
                this.expired = response.data.date
                return this.expired
            } catch (error) {
                console.log(error)
                return this.expired
            }
        }
    }
}
</script>
<style lang="">
    
</style>