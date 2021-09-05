import {createRouter, createWebHashHistory} from "vue-router";
// import Home from "@/views/Home"
const routes = [
    {
        name:"HomePage",
        path: "/",
        // component: Home
        component: ()=> import ("@/views/Home")
    },
    {
        name:"AboutPage",
        path: "/hakkimda",
        component: ()=> import ("@/views/About")
    },
    {
        name:"DetailPage",
        path: "/detay/:userId",
        component: ()=> import ("@/views/Details")
    }
];

const router = createRouter({
    routes,
    // mode : "hash|history", // Vue2de bu şekildeydi.
    // history :  createWebHistory(),
    history :  createWebHashHistory()
}
);

export default router;