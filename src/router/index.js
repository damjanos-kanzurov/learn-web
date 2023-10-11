import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        auth: true,
        title: 'Dashboard'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
      meta: {
        auth: true,
        title: 'Profile'
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      meta: {
        auth: false,
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue'),
      meta: {
        auth: false,
        title: 'Register'
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForgotPasswordView.vue'),
      meta: {
        auth: false,
        title: 'Forgot Password'
      }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResetPasswordView.vue'),
      meta: {
        auth: false,
        title: 'Reset Password'
      }
    },
    {
      path: '/logger',
      name: 'logger',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoggerView.vue'),
      children: [
        {
          name: 'expense',
          path: 'expense',
          component: () => import('../components/tabs/Expense.vue'),
          meta: { name: 'Expense' }
        },
        {
          name: 'income',
          path: 'income',
          component: () => import('../components/tabs/Income.vue'),
          meta: { name: 'Income' }
        }
      ],
      meta: {
        auth: false,
        title: 'Logger - Add spendlogs'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.authUser) {
    return { name: 'login' }
  }
})

export default router
