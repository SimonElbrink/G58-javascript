class Person {
    constructor(name, age, isStudent, address) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.address = address; // Expecting an instance of Address
    }

    displayInfo() {
        console.log(
            this.name,
            'is',
            this.age,
            'years old',
            this.isStudent ? 'and is a student' : ''
        );
    }

    showAddress() {
        console.log(`Lives in ${this.address.getFullAddress()}`);
    }
}

export default Person;  // Default export