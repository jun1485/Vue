// 구조분해 할당 -> 객체의 속성을 변수로 할당 가능.
// 여러 값을 반환할 때 유용.
const user = {
  name: 'Elvin Ju',
  age: 30
};

const { name, age } = user;
console.log(name); // Elvin Ju
console.log(age); // 28

const name = 'Juso';
const age = 22;

const user = { name, age }; // { name: 'Juso', age: 22 }


// 대괄호 표기법 : 프로그램의 실행 시점에 속성 이름을 결정해야 할 때 유용.
let eventPrefix = 'user_';
let event = {
  [eventPrefix + 'click']: true,
  [eventPrefix + 'enter']: false,
};

console.log(event.user_click); // true
console.log(event['user_enter']); // false


// 객체 병합, 스프레드 연산자
let user = { name: 'Jun', age: 28 };
let permissions = { canView: true, canEdit: false };

let userPermissions = { ...user, ...permissions };
console.log(userPermissions);
// { name: "Jun", age: 28, canView: true, canEdit: false }


let propertyName = 'status';
let job = {
  id: 1,
  [propertyName]: 'Active',
  updateStatus(newStatus) {
    this[propertyName] = newStatus;
  }
};

job.updateStatus('Inactive');
console.log(job.status); // "Inactive"


// 객체 구조분해 할당 (비구조화 할당)
let { name: userName, age = 25 } = { name: 'John' };
console.log(userName); // "John"
console.log(age); // 25
