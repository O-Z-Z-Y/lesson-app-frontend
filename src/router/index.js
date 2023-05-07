import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/Home/Home.vue"
import Notice from "@/components/Notice/Notice.vue"
import Course from "@/components/Course/Course.vue"
import About from "@/components/About/About.vue"
import CourseDetail from "@/components/Course/CourseDetail.vue"
import SubCourse from "@/components/Course/SubCourse/SubCourse.vue"

const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "HomeVue",
        component: Home
    },
    {
        path: "/notice",
        name: "NoticeVue",
        component: Notice
    },
    {
        path: "/course",
        name: "CourseVue",
        component: Course
    },
    {
        path:"/course/detail/:id",
        name: "CourseDetail",
        component: CourseDetail
    },
    {
        path: "/about",
        name: "AboutVue",
        component: About
    },
    {
        path: "/unit/:category/:id",
        name: "SubCourse",
        component: SubCourse
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;