<template>
    <section class="container">
        <h2 class="m-6 text-2xl font-bold">장바구니</h2>
        <hr class="my-4 h-0.5 bg-black">
        <div class="shopping-list-wrapper">
            <div class="cart-control flex justify-between">
                <div class="cart-select-all">
                    전체선택
                </div>
                <button class="cart-delete-selected" @click="() => { }">
                    선택삭제
                </button>
            </div>
            <hr class="my-4">
            <ul class="cart-list">
                <li>1번</li>
            </ul>
        </div>
    </section>
</template>
<script>

export default {
    name: 'Cart',
}
</script>
<style></style>