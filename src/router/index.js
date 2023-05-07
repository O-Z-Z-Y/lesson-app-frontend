import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import TestComponent from "@/components/Course/SubCourse/TestComponent.vue";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/test",  // TestComponent.vue로 이동할 Path
        name: "TestComponent",  // router name
        component: TestComponent,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;