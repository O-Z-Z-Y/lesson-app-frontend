<template>
    <Header />
    <template v-if="navState === 'Home'">
        <Home />
    </template>
    <template v-else-if="navState === 'Notice'">
        <Notice />
    </template>
    <template v-else-if="navState === 'Course'">
        <Course />
    </template>
    <template v-else-if="navState === 'About'">
        <About />
    </template>
    <footer class="h-32 bg-slate-400">
        푸터 입니닭
    </footer>
    <DarkmodeToggle />
</template>

<script>
import Header from './Header.vue'
import Home from './Home/Home.vue'
import Notice from './Notice/Notice.vue'
import Course from './Course/Course.vue'
import About from './About/About.vue'
import DarkmodeToggle from './DarkmodeToggle.vue'
// import { mapState } from 'vuex'

export default {
    name: 'HelloWorld',
    components: {
        Header,
        Home,
        Notice,
        Course,
        About,
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