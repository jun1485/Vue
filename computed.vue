// computed 속성은 종속된 데이터에 기반해 값을 계산하는데 사용.
// 이 값은 종속된 데이터가 변경될 때만 다시 계산됨.

computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

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
