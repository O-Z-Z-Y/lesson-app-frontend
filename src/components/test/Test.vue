<template>
    <p>
        테스트
    </p>
    <div class="w-6 h-6">
        <AddCartIcon class="fill-zinc-500"/>
    </div>
</template>
<script>
import AddCartIcon from '@/assets/svg/add_cart_icon.svg';

export default {
    name: 'Test',
    data() {
        return {
        }
    },
    components: {
        AddCartIcon,
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