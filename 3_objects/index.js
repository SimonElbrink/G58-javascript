let person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    country: "USA",
  },
  displayInfo() {
    console.log(
      this.name,
      "is",
      this.age,
      "years old",
      this.isStudent ? "and is a student" : "",
    );
  },
};

console.log(person.name);
console.log(person.address.city);

person.age = 31;
person["isStudent"] = true;

console.log(person.age); // Output: 31
console.log(person.isStudent); // Output: true

person.gender = "Male";

console.log(person.gender); // Output: Male

delete person.address;

console.log(person);
console.log(person.address);

person.displayInfo();




//###############
// Person and Address class Example

// Import and Export

import Person from "./Person.js"; // Default import
import Address from "./Address.js";

const johnsAddress = new Address("New York", "USA");
const john = new Person("John Doe", 30, false, johnsAddress);


john.displayInfo();
john.showAddress();
