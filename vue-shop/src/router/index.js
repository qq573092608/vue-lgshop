// 导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import Product from '@/components/Product'
import Order from '@/components/Order'
import Shopping from '@/components/Shopping'
import About from '@/components/About'

// const Home = () => import('../components/home.vue')

// 1.通过vue.use（插件），安装插件
Vue.use(VueRouter)

// z这个名字一定要叫routes不能为其他名称，否则报错
const routes = [
    {
        path: '/',
        redirect: '/product'
    },
    {
        path: '/product',
        component:Product
    },
    {
        path: '/shop',
        component:Shopping
    },
    {
        path: '/order',
        component:Order
    },
    {
        path: '/about',
        component:About
    }
]

// 2.初始化创建VueRouter实例
const router = new VueRouter({
    mode: 'history',
    routes
})

//在router/index.js最后添加 (解決自定義按鈕重複點擊跳轉報錯)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router

