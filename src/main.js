import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Profile from './components/Profile.vue'
import AdminTicket from './components/AdminTicket.vue'
import UserTicket from './components/UserTicket.vue'
import PoleGestionTicket from './components/PoleGestionTicket.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      default: Home,
    }
  },
  {
    path: '/poles',
    components: {
      default: AdminTicket,
      profile: Profile
    }
  },
  {
    path: '/missions',
    components: {
      default: UserTicket,
      profile: Profile
    }
  },
  {
    path: '/membres',
    components: {
      default: PoleGestionTicket,
      profile: Profile
    }
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