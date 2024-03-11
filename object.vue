// 구조분해 할당 -> 객체의 속성을 변수로 할당 가능.
// 여러 값을 반환할 때 유용.
const user = {
  name: 'Elvin Ju',
  age: 30
};

const { name, age } = user;
console.log(name); // Elvin Ju
console.log(age); // 28
