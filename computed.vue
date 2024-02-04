// computed 속성은 종속된 데이터에 기반해 값을 계산하는데 사용.
// 이 값은 종속성이 변경되지 않는 한 캐싱되어, 같은 종속성에 대해 여러번 접근해도 계산을 다시 수행하지 않음.

computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// fullName은 firstName과 lastName에 종속되어 있으며, 이 두 데이터 중 하나라도 변경되면 자동으로 fullName이 업데이트.
<template>
  <div>
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>


computed: {
  fullName: {
    // getter
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1];
    }
  }
}
