import { createRouter, createMemoryHistory } from 'vue-router'
import  Login  from  '../views/login/Login.vue'
import  Home   from   '../views/home/Home.vue'
import Order from '../views/order/order.vue'
import Store from './Storage'
const Router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
    {
      path:'/login',
      component:Login,
      name:'login',
    },
    {
    
      path:'/home',
      component:Home,
      name:'home',
      children:[
        {
            path:'order/:type',// 0是普通订单 1是秒杀订单,
            component:Order,
            name:"Order"
        }],
       redirect:'/home/order/0'
    }
  ]
})

Router.beforeEach((from) => {

  //  debugger
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true;
    } else {
        return {name: 'login'}
    }
})

export default Router;

////'No match found for location with path ""'