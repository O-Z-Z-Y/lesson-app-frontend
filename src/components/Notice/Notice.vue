<template>
    <div class="container">
        <h2 class="m-6 text-2xl font-bold">이제 누가 공지 해주냐</h2>
    </div>
    <NoticeList />
</template>
<script>
import NoticeList from './NoticeList.vue'

export default {
    name: "Notice",
    components: {
        NoticeList
    }
}
</script>
<style>
    
</style>