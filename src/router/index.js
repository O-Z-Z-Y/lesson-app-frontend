import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/store";

import Home from "@/components/Home/Home.vue"
import Notice from "@/components/Notice/Notice.vue"
import Course from "@/components/Course/Course.vue"
import About from "@/components/About/About.vue"
import CourseDetail from "@/components/Course/CourseDetail.vue"
import NoticeDetail from "@/components/Notice/NoticeDetail.vue"
import SubCourse from "@/components/Course/SubCourse/SubCourse.vue"

import Cart from "@/components/user/cart/Cart.vue"

import Test from "@/components/test/Test.vue"

const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },

    // notice
    {
        path: "/notice",
        name: "Notice",
        component: Notice
    },
    {
        path: "/notice/detail/:id",
        name: "NoticeDetail",
        component: NoticeDetail
    },

    // course
    {
        path: "/course",
        name: "Course",
        component: Course
    },
    {
        path:"/course/detail/:id",
        name: "CourseDetail",
        component: CourseDetail
    },
    {
        path: "/unit/:mainCategory/:id",
        name: "SubCourse",
        component: SubCourse
    },

    // about
    {
        path: "/about",
        name: "About",
        component: About
    },

    // user
    {
        path: "/user/cart",
        name: "Cart",
        component: Cart,
        meta: { 
            roles: ['ROLE_USER']
        }
    },

    // dev
    {
        path: "/test",
        name: "Test",
        component: Test,
        meta: {
            roles: ['ROLE_USER']
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.commit('Nav/SET_NAV', to.name);
    
    // route-allow
    const { roles } = to.meta;
    if (roles) {
        const roleState = store.state.Auth.isLogged ? 'ROLE_USER' : '';
        if (!roles.includes(roleState)) {
            alert('로그인이 필요합니다.')
            return next(from)
        }
    }

    next();
})

export default router;