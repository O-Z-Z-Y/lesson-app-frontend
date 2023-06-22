<template>
    <div class="container flex items-center justify-center">
        <table class="w-full my-2 overflow-hidden bg-white border-collapse rounded-md shadow-md">
            <thead>
                <tr>
                    <th class="w-20 px-4 py-4 font-bold text-center text-gray-700 bg-gray-100 border-b border-gray-300">번호</th>
                    <th class="px-4 py-4 font-bold text-center text-gray-700 bg-gray-100 border-b border-gray-300">제목</th>
                    <th class="px-2 py-4 font-bold text-center text-gray-700 bg-gray-100 border-b border-gray-300">작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in noticeList" 
                    :key="index"
                    @click="routerNoticeDetail(item.id)"
                    class="cursor-pointer hover:bg-gray-100"
                >
                    <td class="font-medium text-center border-b border-gray-300">
                        {{ item.id }}
                    </td>
                    <td class="px-6 py-4 font-medium text-center duration-300 border-b border-gray-300 cursor-pointer hover:text-orange-600">
                        {{ item.title }}
                    </td>
                    <td class="px-2 py-4 font-medium text-center border-b border-gray-300 cursor-pointer">
                        {{ filterDate(item.createTime) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { filterDatetime } from '@/service/util'

export default {
    name: 'NoticeList',
    computed: {
        ...mapState('Notice', ['noticeList', 'selectedNoticeId']),
    },
    methods: {
        ...mapMutations('Notice', ['SET_NOTICEITEM']),
        routerNoticeDetail(noticeId) {
            this.SET_NOTICEITEM(noticeId);
            this.$router.push(`/notice/detail/${noticeId}`)
        },
        filterDate(date) {
            return filterDatetime(date)
        }
    }
}
</script>
<style></style>