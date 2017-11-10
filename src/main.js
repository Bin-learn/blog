// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

// vue1.0写法
// let app = Vue.extend(App);
//
// let router = new VueRouter();
//
// router.map({
//   'goods': {
//     component: goods
//   }
// });
// router.start(App, '#app');

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

// 挂载router
/* eslint-disable */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 直接跳转至goods路径下，vue1.0用法:router.go('/goods');
router.push('/goods');
