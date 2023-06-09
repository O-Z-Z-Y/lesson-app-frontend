<template>
    <div class="container flex items-center justify-center">
        <table class="w-full my-8 overflow-hidden bg-white border-collapse rounded-md shadow-md">
            <thead>
                <tr>
                    <th class="px-6 py-4 font-bold text-center text-gray-700 bg-gray-100 border-b border-gray-300">No.</th>
                    <th class="px-6 py-4 font-bold text-center text-gray-700 bg-gray-100 border-b border-gray-300">Title
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in noticeList" 
                    :key="index"
                    @click="routerNoticeDetail(item.id)"
                    class="cursor-pointer hover:bg-gray-100"
                >
                    <td class="w-4 font-medium text-center border-b border-gray-300">
                        {{ item.id }}
                    </td>
                    <td class="px-6 py-4 font-medium text-center duration-300 border-b border-gray-300 cursor-pointer hover:text-orange-600">
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