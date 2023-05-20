<template>
    <p>
        테스트
    </p>
    <div class="w-6 h-6">
        하나둘하나둘
    </div>
</template>
<script>

export default {
    name: 'Test',
    data() {
        return {
        }
    },
    components: {
    },
    mounted() {
        console.log(this.$router.currentRoute._value.meta?.roles)
    },
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