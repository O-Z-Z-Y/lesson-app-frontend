<template>
    <div class="z-20 p-4 rounded modal-content w-96 bg-white/100">
        <div class="flex justify-between signup-header">
            <h2 class="mb-8 text-xl font-bold">강의제목</h2>
            <a href="#" @click="closeModal">
                <CloseIcon />
            </a>
        </div>
        <p>수강기간</p>
        <p>progress</p>
        <div class="modal-course-list">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
</template>
<script>
import CloseIcon from '@/assets/svg/close_icon.svg'

export default {
    name:'CourseListModal',
    components: {
        CloseIcon
    },
}
</script>
<style>
    
</style>