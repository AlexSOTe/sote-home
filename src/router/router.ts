import { createRouter, createWebHashHistory, createWebHistory, } from "vue-router";
import type { NavigationFailure, NavigationGuardNext, NavigationHookAfter, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { BASE } from "../constants/config";
import { RouterChangeVibrate } from "../funny/vibrate";
import { useMainStore } from "../store/main.store";


const pageRoutes: RouteRecordRaw[] = [
  {
    path: '/studyNote',
    component: () => import('@/views/studyNote/studyNote.vue'),
    meta: {
      title: '技术点梳理',
    },
  },
  {
    path: '/paperCuts',
    component: () => import('@/views/paperCuts/paperCuts.vue'),
    meta: {
      title: '窗花',
    },
  },
];
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/Home',
    redirect: '/',
  },
  ...pageRoutes,
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/notFound/NotFound.vue') },
];
const router = createRouter({
  history: createWebHistory(BASE),
  routes,
});

/**
 * 设置文档title并同步到store
 * @param title
 */
function SetDocumentTitle(title: string) {
  const mainStore = useMainStore();
  if (title) {
    document.title = `个人学习笔记 - ${title}`;
    mainStore.SetDocumentTitle(document.title);
  }
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log('router.beforeEach');
  SetDocumentTitle(to.meta.title as string);
  RouterChangeVibrate();
  //跳转也面前显示loading
  // Toast.loading({ duration: 0 });
  next();
});
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void) => {
  console.log('router.afterEach');
  //页面加载完，移除loading
  // Toast.clear();
});


export default router;
