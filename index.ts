/*Why Functions?
..To perform an operation and return a result to the call location for later use.
What is the use of function?
..Eliminate code complexity by enabling re-usability
What is the advantage of function?
..For flexible and dynamic programming*/

//Example #01.
//let studentName = "Kehkashan";

function logfullName(studentName, fatherName)

// Paranthesis () used to hold argumnts for fuction
{
    console.log(studentName + fatherName);
}
//Statement that defines the function enclosed in curly brackets{} 

logfullName("Kehkashan", "AbdulSalam");

//Example #02.

let system = "Dell";
function logsystem() {
    console.log(system);
}
logsystem();

//Call a function which perform a calculatiom and return the value.
//The return statment stops the execution of a function and returns a value.
//Example #03
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

//Example #04
let result = totalMarks(480, 510);
function totalMarks(Grade09, Grade10) {
    return Grade09 + Grade10;
}
console.log(totalMarks(480, 510));

//Example #05
let answer = myFunction(4 ,3);
function myFunction(a, b){
    return a * b;
}
console.log(myFunction(4, 3));