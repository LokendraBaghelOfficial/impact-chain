import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Source from '../views/Source.vue'
import TheForm from '../views/TheForm.vue'
import Dashboard from '../views/Dashboard.vue'
import TheGoals from '../views/TheGoals.vue'
import Crud from '../views/Crud.vue'
import Analyze from '../views/Analyze.vue'
import TheReport from '../views/TheReport'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      title:'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:'Register'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      title:'Forgot Password'
    }
  },
  {
    path: '/source',
    name: 'source',
    component: Source,
    meta:{
      title:'Source'
    }
  },
  {
    path: '/theform',
    name: 'theform',
    component: TheForm,
    meta:{
      title:'The Forms'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      title:'The Dashboard'
    }
  },
  {
    path: '/goals',
    name: 'Goals',
    component: TheGoals,
    meta:{
      title:'Plan your Goals'
    }
  },
  {
    path: '/crud',
    name: 'crud',
    component: Crud,
    meta:{
      title:'crud'
    }
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Analyze,
    meta:{
      title:'Analyze'
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: TheReport,
    meta:{
      title:'Reports'
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: '/video/:id',
  //   name: 'video-watch',
  //   component: () => import('../views/VideoWatch.vue'),
  //   params:true,
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});

export default router
