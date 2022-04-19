import { Toast } from "vant";
import { createRouter, createWebHashHistory, createWebHistory, NavigationFailure, NavigationGuardNext, NavigationHookAfter, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { BASE } from "../constants/config";
import { RouterChangeVibrate } from "../funny/vibrate";
import { store } from "../store";


const pageRoutes: Array<RouteRecordRaw> = [
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
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '童话村香辣藤椒劲麻裹蛋大鸡排',
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
  if (title) {
    document.title = title;
    store.commit('SetDocumentTitle', title)
  }
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log('router.beforeEach');
  SetDocumentTitle(to.meta.title as string);
  //if (false/* 需要登陆状态（to.meta.requireAuth） && 未登录 */) {
  //  // 跳登录
  //} else {
  //  Vibrate([50, 50, 50]);
  //  next();
  //}
  RouterChangeVibrate();
  next();
  Toast.loading({ duration: 0 });
});
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void) => {
  console.log('router.afterEach');
  Toast.clear();
});


export default router;
