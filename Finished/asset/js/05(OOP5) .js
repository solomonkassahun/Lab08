//ES6 Person Object 
class Person_ES6 {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    greeting() {
        return `Hello,  ${this.fName} ${this.lName}`;
    }
}

//1. Make Customer class to extend from Person_ES6
class Customer_ES6 extends Person_ES6{

    constructor(fName, lName) {
        super(fName,lName)
        //2. Call the super class [super(fName,lName)]

    }
}
const Customer = new Customer_ES6("Joer","Mormont")

//3. Create Customer ["Jeor", "Mormont"]


//4. Display the greeting on Jeor Customer Object [remove the string when you have the object]
es6_proto.innerHTML = Customer.fName + " " + Customer.lName;
