import { createRouter, createMemoryHistory } from 'vue-router'
import  Login  from  '../views/login/Login.vue'
import Store from './Storage'
const Router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
    {
      path:'/login',
      component:Login,
      name:'login',
    }
  ],
})

Router.beforeEach((from) => {
   
    debugger
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true;
    } else {
        return {name: 'login'}
    }
})

export default Router;