import { createRouter, createWebHashHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { BASE } from "../constants/config";
import { Vibrate } from "../constants/tools";
import { store } from "../store";


const pageRoutes: Array<RouteRecordRaw> = [
  {
    path: '/studyNote',
    component: () => import('@/views/studyNote/studyNote.vue'),
    meta: {
      title: '学习笔记',
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
  history: createWebHashHistory(BASE),
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
  SetDocumentTitle(to.meta.title as string);
  //if (false/* 需要登陆状态（to.meta.requireAuth） && 未登录 */) {
  //  // 跳登录
  //} else {
  //  Vibrate([50, 50, 50]);
  //  next();
  //}
  Vibrate([50, 50, 50]);
  next();
});



export default router;
