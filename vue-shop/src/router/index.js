// 导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'


// 路由嬾加載
const Product = () => import('@/components/Product')
const ProductNews = () => import('../components/ProductNews')
const ProductMsg = () => import('../components/ProductMsg')

const Order = () => import('@/components/Order')
const Shopping = () => import('@/components/Shopping')
const About = () => import('@/components/About')
const Login = () => import('@/components/Login')

const BomponentB = () => import('@/components/test/tab/ComponentB')


// 1.通过vue.use（插件），安装插件
Vue.use(VueRouter)

// z这个名字一定要叫routes不能为其他名称，否则报错
const routes = [
    {
        path: '/',
        redirect: '/shop'
    },
    {
        path: '/componentb',
        component:BomponentB
    },
    {
        path: '/product',
        component:Product,
        meta: {
            title: '商品'
        },
        children:[
            {
                path:'',
                redirect: 'new'
            },
            {
                path:'new',
                component:ProductNews,
                meta: { title: '產品新聞' }

            },
            {
                path:'msg',
                component:ProductMsg,
                meta: { title: '產品消息' }
            }
        ],
        beforeEnter:(to, from, next) => {
            console.log('beforeEnter:' + to + '---' + from)
            next()
        }
    },
    // {
    //     path: '/product/:productId',
    //     component:Product,
    //     meta: {
    //         title: '商品'
    //     },
    //     children:[
    //         {
    //             path:'',
    //             redirect: 'new'
    //         },
    //         {
    //             path:'new',
    //             component:ProductNews,
    //             meta: { title: '產品新聞' }

    //         },
    //         {
    //             path:'msg',
    //             component:ProductMsg,
    //             meta: { title: '產品消息' }
    //         }
    //     ],
    //     beforeEnter:(to, from, next) => {
    //         console.log('beforeEnter:' + to + '---' + from)
    //         next()
    //     }
    // },
    {
        path: '/shop',
        meta: {
            title: '購物車'
        },
        component:Shopping,
        beforeEnter:(to, from, next) => {
            console.log('beforeEnter:' + to + '---' + from)
            next()
        }
    },
    {
        path: '/order',
        meta: {
            title: '訂單'
        },
        component:Order,
        // beforeEnter:(to, from, next) => {
        //     console.log('order before...')
        //     next({path: '/login'})
        // }
    },
    {
        path: '/about',
        meta: {
            title: '關於'
        },
        component:About
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登錄'
        },
        component:Login
    }
]

// 2.初始化创建VueRouter实例
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    console.log(to)
    document.title = to.meta.title

    let isLogin = true
    if(to.matched[0].path.indexOf('order') !== -1 && !isLogin ) {
        next({path: '/login'})
    } else {
        next()
    }
})

//在router/index.js最后添加 (解決自定義按鈕重複點擊跳轉報錯)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router

