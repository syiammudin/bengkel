import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router =  new VueRouter({
  mode: 'history',
  base : APP_BASE ,
  routes : [
    { path : '/', name : 'home', component : require('./home').default, },
    { path : '/home2', name : 'home2', component : require('./home2').default, },


  ]
})

export default router
