                                 // HARD//

//Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//Information)that cannot be accessed directly. The object should have at least two properties: name and
//ssn. Only the name property should be accessible, and it should be called through a public function.
//The ssn property should not be accessible at all.
//Creating private objects and private properties helps you control who has access to what data and
//helps you prevent people who shouldn't see important info like social security numbers from getting
//access to the data.
//You can use 'getName' or other get methods to access data that people might need. For example,
//people addressing a package or email may need a customer's name, but they definitely shouldn't have
//access to their ssn.


//pseudo code//

//create object pii
//2 properties: name & ssn
//name needs to be called in a public function not ssn
//use get methods to access name 

class Pii {
    constructor(name, ssn) {
        this.name = name;
        this.ssn = ssn;
        
    }   
 
}

class SSN {
    #privatefield;
    constructor(){
        return `${this.ssn}`;
    }
    }


const employeeObject = new Pii("Tyali Warren", "123-45-6789");

console.log(employeeObject.SSN);
