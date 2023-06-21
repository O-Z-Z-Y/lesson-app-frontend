import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/store";
import VueCookies from 'vue-cookies'

import Home from "@/components/Home/Home.vue"
import Notice from "@/components/Notice/Notice.vue"
import Course from "@/components/Course/Course.vue"
import About from "@/components/About/About.vue"
import CourseDetail from "@/components/Course/CourseDetail.vue"
import NoticeDetail from "@/components/Notice/NoticeDetail.vue"
import SubCourse from "@/components/Course/SubCourse/SubCourse.vue"

import Cart from "@/components/user/cart/Cart.vue"

import OrderResult from "@/components/order/OrderResult.vue"

import UserPage from "@/components/user/UserPage.vue"
import UserCourses from "@/components/user/UserCourses.vue"
import UserNotifications from "@/components/user/UserNotifications.vue"
import UserAccount from "@/components/user/UserAccount.vue"
import UserWithdrawal from "@/components/user/UserWithdrawal.vue"

import Test from "@/components/test/Test.vue"

import { logout } from "@/service/auth/logout";

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
        component: CourseDetail,
    },
    {
        path: "/unit/:mainCategory/:id",
        name: "SubCourse",
        component: SubCourse,
        meta: {
            roles: ['ROLE_USER']
        }
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

    // order result
    {
        path: "/order/result",
        name: "OrderResult",
        component: OrderResult,
        meta: {
            roles: ['ROLE_USER']
        }
    },

    // user page
    {
        path: "/user",
        name: "UserPage",
        component: UserPage,
        meta: {
            roles: ['ROLE_USER']
        }
    },
    {
        path: "/user/courses",
        name: "UserCourses",
        component: UserCourses,
        meta: {
            roles: ['ROLE_USER']
        }
    },
    {
        path: "/user/notifications",
        name: "UserNotifications",
        component: UserNotifications,
        meta: {
            roles: ['ROLE_USER']
        }
    },
    {
        path: "/user/profile",
        name: "UserAccount",
        component: UserAccount,
        meta: {
            roles: ['ROLE_USER']
        }
    },
    {
        path: "/user/withdrawal",
        name: "UserWithdrawal",
        component: UserWithdrawal,
        meta: {
            roles: ['ROLE_USER']
        }
    },

    // dev
    {
        path: "/test",
        name: "Test",
        component: Test,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.commit('Nav/SET_NAV', to.name);

    // login 세션이 끝나면 자동으로 로그아웃
    if (!VueCookies.get('access_token') && store.state.Auth.isLogged) {
        logout()
    } else {
        // route-allow
        const { roles } = to.meta;
        if (roles) {
            const roleState = store.state.Auth.isLogged ? 'ROLE_USER' : '';
            if (!roles.includes(roleState)) {
                alert('로그인이 필요합니다.')
                return next('/')
            }
        }
    }
    
    next();
})

export default router;