<template>
    <div class="z-20 p-4 rounded modal-content w-96 bg-white/100">
        <div class="flex justify-between signup-header">
            <h2 class="mb-8 text-xl font-bold">강의제목</h2>
            <a @click="closeModal" class="w-5 h-5 close-icon-wrapper">
                <CloseIcon/>
            </a>
        </div>
        <p>수강기간</p>
        <p>progress</p>
        <div class="modal-course-list">
            <ul class="mt-6">
                <li class="flex items-center justify-between h-12 px-2 mb-2 text-lg font-medium border rounded-xl"
                    v-for="course in subCourseList" :key="course.id">
                    <router-link :to="`/unit/${mainCategory}/${course.id}`" v-if="isPaidItem || course.sampling"
                        class="text-green-600 duration-300 hover:text-orange-400">
                        <PlayCircleIcon class="inline mr-1" />
                        {{ course.title }}
                    </router-link>
                    <div v-else>
                        <PlayCircleIcon class="inline mr-1" />
                        {{ course.title }}
                    </div>
                    <div v-if="!isPaidItem && course.sampling"
                        class="px-2 py-1 text-pink-500 border border-pink-400 sampling rounded-xl bg-pink-50">미리보기</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import CloseIcon from '@/assets/svg/close_icon.svg'
import { mapState, mapActions } from 'vuex';

export default {
    name:'CourseListModal',
    components: {
        CloseIcon
    },
    computed: {
        ...mapState('Courses', ['mainCategory', 'subCourseList']),
        ...mapState('User', ['userAccessList']),
        ...mapActions('Modal', ['openModal', 'closeModal']),
        isPaidItem() {
            return this.userAccessList.includes(this.mainCategory)
        }
    },
    methods: {
        test() {
            console.log(this.isPaidItem)
            console.log(this.subCourseList)
        }
    }
}
</script>
<style>
    
</style>