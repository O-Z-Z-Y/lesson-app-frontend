<template>
    <div>
        테스트
    </div>
    <div class="test-wrapper w-10 h-10 bg-slate-500"
        @click="onClickInside"
    >
        테스트
    </div>
</template>
<script>
export default {
    name: 'Test',
    methods: {
        outsideTest () {
            console.log('파랑 파랑')
        },
        onClickInside() {
            console.log('빨강 빨강')
        }
    }
}
</script>
<style>
    
</style>