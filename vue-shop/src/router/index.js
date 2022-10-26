// 导入路由
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../components/home.vue')

// 1.通过vue.use（插件），安装插件

// z这个名字一定要叫routes不能为其他名称，否则报错
const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
    }
]

// 2.初始化创建VueRouter实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

