// VERY HARD:

//Object prototype chain and prototypal inheritance exercise.


// 1. Create a Person constructor that has three properties: name, job, and age.

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    


// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".

exercise(){
    console.log(`Running is okay.`);
}

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer".

fetchJob() {
    console.log(`This is ${this.name} and my job is ${this.job}`);
}
}  
let p1 = new Person("Tyali Warren", "Back-End Developer", 25);
p1.exercise();
p1.fetchJob();

// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.

class Programmer {
    constructor(name, job, age, language){
        this.name = name;
        this.job = job;
        this.age = age;
        this.language = language;
        this.busy = true;
    }



// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.

completeTask(){
    return this.busy = false;
}
acceptNewTask(){
    return this.busy = true;
}

// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.

offerNewTask(){
    if (this.busy = true){
        console.log(`${this.name} is busy.`);
 }
 else {
     console.log(`${this.name} would love to take on a new responsibility.`)
 }
}



// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
// to the programmer and list off all languages the programmer knows.


learnLanguage(){
    //not sure how to finish//
}

}
// 8. Test it out - can you create different programmers and run all the methods on them? Does
// each programmer maintain their own properties properly and independently of the other
// programmers?


let programmer1 = new Programmer(p1.name, p1.job, p1.age, "English");

let programmer2 = new Programmer("Kelly Kapor", "HR Manager", 35);

let programmer3 = new Programmer("Langston K", "Carpenter", 24);

programmer1.completeTask();
programmer1.acceptNewTask();
programmer1.offerNewTask();

console.log(programmer3);





// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or
// properties to incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

const person = (name, job,age) => {this.name: name, this.job: job, this.age: age};

const programmer = (name, job, age, languages) => {this.name: name, this.job: job, this.age: age, this.language: language};