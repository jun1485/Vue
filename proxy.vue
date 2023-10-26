// JS의 Proxy 객체는 다른 객체를 감싸는 wrapper임.
// 객체의 property에 대한 읽기/쓰기 작업, property 삭제, 함수 호출 등 제어 가능.

// Vue3에서는 proxy 객체를 이용해 데이터의 반응성 구현.
const target = {
  name: "Alice",
  age: 30
};

const handler = {
  get: function(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    return "Property does not exist.";
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);  // Alice
console.log(proxy.age);   // 30
console.log(proxy.job);   // "Property does not exist."
