<template>
    <div class="container flex justify-center items-center">
        <table class="border-collapse w-full bg-white shadow-md overflow-hidden rounded-md my-8">
            <thead>
                <tr>
                    <th class="px-6 py-4 text-center border-b border-gray-300 bg-gray-100 font-bold text-gray-700">No.</th>
                    <th class="px-6 py-4 text-center border-b border-gray-300 bg-gray-100 font-bold text-gray-700">Title
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in noticeList" 
                    :key="index"
                    @click="routerNoticeDetail(item.id)"
                    class="cursor-pointer hover:bg-gray-100"
                >
                    <td class="w-4 text-center border-b border-gray-300 font-medium">
                        {{ item.id }}
                    </td>
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium cursor-pointer duration-300 hover:text-orange-600">
                        {{ item.title }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';


export default {
    name: 'NoticeList',
    computed: {
        ...mapState('Notice', ['noticeList', 'selectedNoticeId'])
    },
    methods: {
        ...mapMutations('Notice', ['SET_NOTICEITEM']),
        routerNoticeDetail(noticeId) {
            this.SET_NOTICEITEM(noticeId);
            this.$router.push(`/notice/detail/${noticeId}`)
        }
    }
    
}
</script>
<style></style>