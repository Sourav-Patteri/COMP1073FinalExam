// JavaScript Document
// This is class definition for a class named "Person":
class Person {
  //Below is the constructor method where we initialize properties. It is automatically called when the class is initiated.
  // A constructor method with the exact name 'constructor' is mandatory for all classes and Javascript will add an empty default constructor if one isn't already present.
  constructor(name, age, gender, classes) {//The constructor takes in values for four properties name, age, gender and classes.
    //Here we are initializing the properties. The values of the properties will be set to what is passed to the constructor when instantiating the object
    // this.name;//This expression statement is not assigned any value.
    this.name = name; // It should be like this so that the value passed to the constructor is assigned to the property.
    this.age = age;// initializing property age
    this.gender = gender;
    // this.interests = interests; // This is supposed to be classes I think.
    this.classes = classes;// it does not matter much but variable name should be meaningful if possible
  }
//this is the method definition of a method named 'greeting'
  greeting() {
    console.log(`Hi! I'm ${this.name}`);// When we call the funtion for example parth.greeting(), in console it will display - Hi! I'm Parth
    //this keyword refers to the object it belongs. If we call the method on the object parth then this.name will have a value = Parth,
    // whereas if we call harmanpreet.greeting then this.name will have a value = Harmanpreet ie, corresponding to their respective properties
  };
//this is the method definition of a method named 'bye'
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);// the extra dot after this.name is an error
    // This will display a sentence starting with the value assigned to the name property of the object it is called upon and then' has left the building. Bye for now!'
    // parth.bye();
    // Parth has left the building. Bye for now!
  };
}

//here we are instantiating new people objects based on the Person class. The properties of each object are set with the values we pass into them.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//here we are creating a subclasses called 'teacher' that inherits from the class Person
class Teacher extends Person {// extends keywords is used to inherit from classes
  // here too we have the constructor method but instead of initializing all the properties of Person class we can use the super keyword to call the parent class's constructor with the required properties
  constructor(name, last, age, gender, classes, subject, grade) {// This is supposed to be classes.
    super(name, age, gender, classes);// This is supposed to be classes.
    // subject and grade are properties specific to Teacher and can be called on Teacher objects we instantiate
    //the property last is not initialized
    this.last = last;
    this.subject = subject;
    this.grade = grade;
  }
}

let jessica = new Teacher('Benny','White',28, 'male', ['Advanced Java', 'Java'], 'Computer Programming', 90);