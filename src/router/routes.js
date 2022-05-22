
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'my-courses', component: () => import('pages/MyCourses.vue') },
      { path: 'monitor-lab', component: () => import('pages/MonitorLab.vue') },
    ]
  },

  {
    path: '/user-unverified',
    component: () => import('pages/UserUnverified.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
