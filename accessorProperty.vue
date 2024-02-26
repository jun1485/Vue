// get과 set은 객체의 속성에 접근하거나 값을 설정하는데 사용하는 접근자 프로퍼티.
// 객체 내부의 속성을 보호, 속성에 접근하거나 설정할 때 추가적인 로직 실행 가능.

const person = {
  firstName: 'Ju',
  lastName: 'Jeong Jun',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(person.fullName); // 'Ju Jeong Jun'

person.fullName = 'Elvin';
console.log(person.fullName); // 'Elvin'


// get을 사용하면, 객체의 속성을 읽을 때마다 해당 속성을 계산하는 함수를 실행할 수 있음.
// 접근자 프로퍼티는 상속을 통해 확장될 수 있으며, 하위 클래스에서 오버라이드될 수 있음.
const user = {
  internalAge: 30,
  get age() {
    return this.internalAge;
  },
  set age(value) {
    if (value < 0) {
      throw new Error('나이는 음수가 될 수 없습니다.');
    }
    this.internalAge = value;
  }
};


// Object.defineProperty() 또는 Object.defineProperties() 메서드를 사용하여 접근자 프로퍼티 정의 가능.
const obj = {};
Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: false
});



import { watch, ref } from 'vue';

const firstName = ref('');
const lastName = ref('');

watch([() => firstName.value, () => lastName.value], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
  console.log(`이름 변경됨: ${newFirstName} ${newLastName}`);
}, { immediate: true });
