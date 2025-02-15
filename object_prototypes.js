//Creating an object and adding prototype to it
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function (){
    console.log(`Hello, I am ${this.name} and my age is ${this.age}`)
} 

const Person1 = new Person("Arpita",20);
const Person2= new Person("Shruti",20);
Person1.greet();
Person2.greet();
