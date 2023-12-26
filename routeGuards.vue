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


// 컴포넌트 내 가드
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 라우트로 들어오기 전에 실행되는 로직
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 라우트를 떠나기 전에 실행되는 로직
    next();
  }
};
</script>


// 라우트 가드의 주의사항
// - next()를 반드시 호출해야 함. 그렇지 않으면 라우트가 중단됨.
// - beforeRouteEnter 가드에서는 this를 사용 불가능. 대신, next(vm => {...})를 사용해 컴포넌트 인스턴스에 접근 가능.


// 데이터 프리패칭 및 상태관리
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresData) {
    try {
      const data = await fetchData(to.params.id);
      to.params.data = data; // 데이터를 라우트 파라미터에 추가
      next();
    } catch (error) {
      next('/error');
    }
  } else {
    next();
  }
});
