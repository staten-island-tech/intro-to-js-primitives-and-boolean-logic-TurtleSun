/* let string = 'I am a string';
let sentence = 'Hello My Dear Friend ' + "My Pinapple";
let combine = string + sentence; 


let student = "Sandra";
let student2 = "MICHAEL";
let courseName = "COMPSCI";
let teacherName = "Whales";
let sentence = 
    student +
    " and " +
    student2 +
    " are taking " +
    courseName +
    " with " +
    teacherName;

    let betterSentence = `${student} and 
    ${student2} are taking ${courseName} with ${teacherName} next year`;

`url/${movie}`*/

//^ these are strings

////////////NUMBERS AND INTEGERS

/* let year = 2020;
let next year = year + 1;
let past year = year -1;
let future = year * 2; */

//////////////////BOOLEANS

/* let trueStatement = true;

/////////Null and Undefined

let richard;
console.log(richard);
console.log(jiayu); */

/////////////////BOOLEAN LOGIC OR IF/ELSE

/* let age = 17;
let baoSquared = "Bao Bao";
console.log(baoSquared === "Bao Bao");
console.log(age == "17"); */

/* let age = 45;
if(age < 18) {
    console.log("you are a child");
}   else if (age == 18) {
    console.log("Happy Bday");
}   else {
    console.log("you are over 18");
} */

///red, green, yellow
/* let light = "green";
if (light === "green") {
    console.log("go!");
}   else if (light === "red") {
    console.log("stop!");
}   else {
    console.log("slow!");
} */


/*  let kristyInt = false;
let baoInt = false;

if (kristyInt === true && baoInt === true) {
    console.log("almond 2");
}   else if (kristyInt === true || baoInt === true) {
    console.log("almond 1 and milk 1");
}   else {
    console.log("milk 2");
}


 */

/* function test () {
    console.log(" I'm a function");
}
test(); */

/* const add = function(x,y){
    return x + y; // return ends the function
};

console.log(add(10, 20));
const name = "Richard"; const is constant, let is varying */

/* const hello = function() {
    console.log("Hello");
};
const bye = function() {
    console.log("Bye");
};
const hiBye = function() {
    hello();
    bye();
    hello();
};
hiBye(); */

/* const name = "Thurushi";//dis is global variable or global space

function displayName() {// <- SACRED
    const name = "Kelly"; //local or function scope

    function sun() {
        console.log(name); //inner function has access to outer function
    }
    
    return sun;
}

cont myFunc = displayName();
myFunc();
//closure? */

//ARRAYS
//const names = [1,"name",true]

/* const names = ["Aarthi", "Vicky", "Bao", "Doyle"];
names.forEach(anme => console.log(anme)); */

//https://developer.mozilla.org and go to arrays
// "=>" functions need no return

/* const numbers = [1,2,3];
const add = function(x, y , z) {
    return x + y + z;
};
console.log(add(...nubmers)); */

// let students = ["Riya", "Omar", "Alan", "Jiayu", "Michael", "Bao", "I.N.", "BI"]
/* const newArr = students.filter(word => word.length < 5); // for only 4 letter put "==="
console.log(newArr); */
    //.push(); //adding another varriable
    //.forEach();
    //.map();

// check "includes" junshen
/*if (students.includes("Junshen")){
    console.log(true);
}   else {
    console.log(false);
}

//check if Alan or Savva included in "some"
    if (students.includes("Alan", "Savva")){
        console.log(true);
    }   else {
        console.log(false);
    }  */