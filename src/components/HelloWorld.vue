<template>
    <HeaderVue />
    <template v-if="navState === 'Home'">
        <HomeVue />
    </template>
    <template v-else-if="navState === 'Notice'">
        <NoticeVue />
    </template>
    <template v-else-if="navState === 'Course'">
        <div class="course-wrapper">
            <CourseList />
        </div>
    </template>
    <template v-else-if="navState === 'About'">
        <AboutVue />
    </template>
    <footer class="h-32 bg-slate-400">
        푸터 입니닭
    </footer>
    <DarkmodeToggle />
</template>

<script>
import HeaderVue from './HeaderVue.vue'
import HomeVue from './Home/HomeVue.vue'
import NoticeVue from './Notice/NoticeVue.vue'
import CourseList from './Home/CourseList/CourseList'
import AboutVue from './About/AboutVue.vue'
import DarkmodeToggle from './DarkmodeToggle.vue'
import { mapState } from 'vuex'

export default {
    name: 'HelloWorld',
    components: {
        HeaderVue,
        HomeVue,
        NoticeVue,
        CourseList,
        AboutVue,
        DarkmodeToggle
    },
    computed: {
        ...mapState('Nav', {
            navState: state => state.nav
        })
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