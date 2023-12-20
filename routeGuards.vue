// 라우트 가드는 라우팅 프로세스 제어를 위한 기능.
// 라우트 가드를 사용하면 특정 라우트로의 이동을 제한하거나, 라우트 이동 전/후에 특정 로직 실행 가능.
// 권한 검사, 로그인 상태확인, 데이터 사전 로드 등에 사용.

// 전역 가드
// router.beforeEach, router.afterEach, router.beforeResolve 등 메서드 제공.
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/login' });
  } else {
    next();
  }
});

// 라우트별 가드
const router = new VueRouter({
  routes: [
    {
      path: '/secure',
      component: SecureComponent,
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          next('/login');
        } else {
          next();
        }
      }
    }
  ]
});
