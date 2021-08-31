import {createRouter, createWebHistory} from "vue-router";
// import Home from "@/views/Home"
const routes = [
    {
        path: "/",
        // component: Home
        component: ()=> import ("@/views/Home")
    },
    {
        path: "/hakkimda",
        component: ()=> import ("@/views/About")
    },
    {
        path: "/detay/:userId",
        component: ()=> import ("@/views/Details")
    }
];

const router = createRouter({
    routes,
    // mode : "hash|history", // Vue2de bu şekildeydi.
    history :  createWebHistory()
}
);

export default router;