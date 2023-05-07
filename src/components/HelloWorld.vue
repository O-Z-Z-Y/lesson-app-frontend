<template>
    <Header />
    <router-view></router-view>
    <footer class="h-32 bg-slate-400">
        푸터 입니닭
    </footer>
    <DarkmodeToggle />
</template>

<script>
import Header from './Header.vue'
import DarkmodeToggle from './DarkmodeToggle.vue'
export default {
    name: 'HelloWorld',
    components: {
        Header,
        DarkmodeToggle
    },
    computed: {
        navState() {
            return this.$store.state.Nav.nav
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1023px) {
    .course-wrapper {
        width: 1410px;
        margin: 0 auto;
    }
}
</style>