<template>
    <Header />
    <div id="content" class="h-auto" :style="`min-height:${resizeHeight}px`">
        <router-view></router-view>
    </div>
    <Footer v-if="nav !== 'SubCourse'"/>
    <DarkmodeToggle class="hidden" />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

import DarkmodeToggle from './DarkmodeToggle.vue'
import { mapState } from 'vuex';
export default {
    name: 'HelloWorld',
    components: {
        Header,
        Footer,
        DarkmodeToggle
    },
    data() {
        return {
            screenHeight: '',
        }
    },
    mounted() {
        this.setScreenHeight();
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },
    computed: {
        ...mapState('Nav' ['nav']),
        resizeHeight() {
            return (this.screenHeight - 128 - 57)
        }
    },
    methods: {
        handleResize() {
            // 디바운스 (Debounce)를 적용하여 많은 resize 이벤트를 처리하지 않도록 합니다.
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(this.setScreenHeight, 200);
        },
        setScreenHeight() {
            this.screenHeight = window.innerHeight
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