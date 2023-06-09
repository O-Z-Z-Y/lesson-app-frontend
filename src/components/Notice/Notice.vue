<template>
    <div class="container">
        <h2 class="p-6 text-2xl font-bold">이제 누가 공지 해주냐</h2>
    </div>
    <NoticeList />
</template>
<script>
import { mapActions, mapState } from 'vuex';
import NoticeList from './NoticeList.vue'

export default {
    name: "Notice",
    components: {
        NoticeList
    },
    mounted() {
        this.fetchNoticeList()
    },
    computed: {
        ...mapState('Notice', ['noticeList', 'totalNotice'])
    },
    methods: {
        ...mapActions('Notice', ['fetchNoticeList']),
    }
}
</script>
<style>
    
</style>