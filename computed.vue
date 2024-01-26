// computed 속성은 종속된 데이터에 기반해 값을 계산하는데 사용.
// 이 값은 종속된 데이터가 변경될 때만 다시 계산됨.

computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
