<template lang="">
    <UserPage />
    <div class="container">
        <div class="mx-4 mt-4 text-center" v-for="(item, index) in itemList" :key="index">
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
            </article>
            <hr v-show="index !== itemList.length-1">
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
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
    async created() {
        const filteredList = this.mainCourseList.filter(item => this.userAccessList.some(itemId => itemId === item.id));

        for (const item of filteredList) {
            try {
                const response = await this.axios.get(`/api/v1/jobs/maincourse/getexpire/${item.id}`);
                let expired = response.data.date;
                this.itemList.push({ ...item, expired: expired });
            } catch (error) {
                console.log(error);
            }
        }
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