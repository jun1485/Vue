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
