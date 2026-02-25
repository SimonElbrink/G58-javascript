class Address {
    constructor(city, country) {
        this.city = city;
        this.country = country;
    }

    getFullAddress() {
        return `${this.city}, ${this.country}`;
    }
}

export default Address;  // Named export