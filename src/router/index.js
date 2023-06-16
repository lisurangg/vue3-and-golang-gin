//1.index.js里引入router模块
import { createRouter, createWebHashHistory } from "vue-router";

//引入这两个组件  写的两个.vue组件  

//2.定义路由  定义的时候，要在src的components下建两个vue组件，像上边一样
const routes = [
  { path: "/",
  name: "login",
   component: () =>import("@/components/login.vue")  //3000接口直接进入home.所有组件都可以这么写，不用写name
   },
   
  {
    path: "/home",
    name: "home",
    component: () =>import("@/components/home.vue"),
    children: [   //嵌套路由，当/home/all时展示all
    {             //注意点！！在home.vue里el的index要写完整的路由，例如 index:/home/all
      path: 'all',
      name: 'all',
      component: () =>import('@/components/all.vue')
    },
    {
      path: 'one',
      name: 'one',
      component: () =>import('@/components/one.vue')
    },
    {
      path: 'tow',
      name: 'tow',
      component: () =>import('@/components/tow.vue')
    }
    ]
  },
]


//3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
//4.导出路由----去main.js导入
export default router
