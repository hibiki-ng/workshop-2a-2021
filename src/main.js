import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Profile from './components/Profile.vue'
import AdminTicket from './components/AdminTicket.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Profile
  },
  {
    path: '/missions',
    component: AdminTicket
  }
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})