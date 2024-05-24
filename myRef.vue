function ref(initialValue) {
  let value = initialValue;
  const dep = new Set();

  const proxy = new Proxy({ value }, {
    get(target, key) {
      if (key === 'value') {
        dep.add(effect);  // 현재 실행 중인 효과를 의존성 집합에 추가
      }
      return target[key];
    },
    set(target, key, newValue) {
      target[key] = newValue;
      dep.forEach(func => func());  // 값이 변경되면 의존성에 있는 모든 효과를 실행
      return true;
    }
  });

  return proxy;
}

let effect = () => {
  console.log(`Updated value: ${count.value}`);
};

const count = ref(0);  // ref로 0을 초기 값으로 설정

count.value++;  // 값이 업데이트되고 의존성에 있는 효과가 실행됨
