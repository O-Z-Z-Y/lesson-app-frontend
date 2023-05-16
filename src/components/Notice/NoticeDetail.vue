<template>
    <div class="container">
        <h2 class="m-6 text-2xl font-bold">이제 누가 공지 해주냐</h2>
        <h3 class="m-6 text-xl font-bold">{{ noticeItem.title }}</h3>
        <hr class="my-4">
        <div class="m-6 text-wrapper" v-html="noticeItem.content"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';


export default {
    name: "NoticeDetail",
    computed: {
        ...mapState('Notice', ['noticeList']),
        noticeItem() {
            return this.noticeList.find(item => 
                item.id === parseInt(this.$route.params.id)
            )
        },
    },
}
</script>
<style>
    
</style>