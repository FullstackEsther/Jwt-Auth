// console.log("hello")
// let x = "ade"
// console.log(x)
// var yes = 8
// console.log(yes)
// //to declare large numbers we use big int
// let num = BigInt(123456797443332222)
// console.log(typeof(num))
// let check = true;
// console.log(typeof(check))
// //WE can convert string to boolean 
// let checky = Boolean("o")
// console.log(checky)
// let name = "yes";
// if(name)
// {
//     console.log(name)
// }
// else{
//     console.log("it is not true")
// }
// //Undefined variable is when you declare a varriable without assigning a value
// let me;
// console.log(typeof(me))
// //we use keyvalue pair to declair an object
// const student = {
//     name : "Ade",
//     age : 10,
//     class : "ss1"
// }
// console.log(student)
// //or
// console.log(student["age"])
// // to loop we use for in
// for(let key in student )
// {
//     console.log(key,student[key])
// }
// // array in js accepts different datatypes
// const names = ['ade', 'shola',1,true,"fest",{name : "shade", age: 1}]
// for (let i = 0; i < names.length; i++)
//  {
//     console.log(names[i], typeof(names[i]))
    
//}
//classwork
// const student = 
// [
//     {name : "bolu", age: 12, class : "ss3", courses : {course1:"Eng", course2:"Math"}},
//     {name : "Tolu", age: 11, class : "ss1", courses : {course1:"Biology", course2:"Math", course3 :"Eng"}},
//     {name : "Folu", age: 13, class : "ss2", courses : {course1:"Biology", course2:"Chemistry", course3 :"Eng"}},
//     {name : "Solu", age: 15, class : "100l", courses : {course1:"Biology", course2:"Chemistry", course3 :"Zoology"}},
//     {name : "Dolu", age: 17, class : "200l", courses : {course1:"Biology", course2:"Chemistry", course3 :"Maths"}},
// ]


//     for (let i = 0; i < student.length; i++) 
//     {
//         for(let key in student[i])
//         {
//             if (key == "courses") 
//             {
//                 for(let course in student[i]["courses"])
//                 {
//                     console.log( course, student[i]["courses"][course])
//                 }
//             }
//             else
//             {
//                 console.log(key,student[i][key])
//             }
            
//         }
        
// //     }
// //     // to declare a date
// //     let date = new Date();
// //     console.log(date.getHours(), date.getMinutes());

//     function greet(greetings)
//     {
//         console.log(greetings);
//     }
//     greet("Hello dollars");
//     greet({name : "Ade", age:3});
//     greet(["alfa", true]);
//     //anonymous function
//     const anonymous = function(greetings)
//     {
//         console.log(greetings);
//     }
//    anonymous("yes");
//    //arrow function
//    const arrow = (response) => {
//     console.log(response);
//    }
//    arrow(4);
//    // shorter arrow method with return type
//    const add = (num1, num2)=> {console.log(num1 +num2)};
//    add(1,2);

   // classwork

//    function Calculator (num1, num2, operator) {
//     switch (operator) {
//         case "+": 
//         console.log("The result of addition is ",add(num1,num2))
//          break;
//          case "-": 
//          console.log("The result of subtraction is ",subtraction(num1,num2))
//           break;
//           case "*": 
//          console.log("The result of multiplication is ",multiplication(num1,num2))
//           break;
//           case "/": 
//           console.log("The result of division is ",divide(num1,num2))
//            break;
//            case "%": 
//          console.log("The result of subtraction is ",modulo(num1,num2))
//           break;
//            case "**": 
//            console.log("The result of exponential is ",expo(num1,num2))
//             break;
    
//         default:
//             console.log("invalid operator");
//             break;
//     }
//    }
//    function add(num1, num2) {
//      return num1+ num2;
//    }
//    function subtraction(num1, num2) {
//     return num1- num2;
//   }
//   function multiplication(num1, num2) {
//     return num1 * num2;
//   }
//   const divide = (num1, num2) => (num1 / num2);
//   const modulo = (num1, num2) => (num1 % num2);
//   const expo = (num1, num2) => (num1 ** num2);

//   Calculator(4,2,"**");
 
  //inbuilt methods
  //array methods
  const names = ["shade", "Tolu", "Bolu"];
//   names.push("Esther");
//   console.log(names);
//   console.log(names.pop());
//   console.log(names.shift());
//   console.log(names.unshift("ade"));
//console.log(names.slice(0,1));
//  console.log(names);
// const nums = [3,89,75,46];
// nums.forEach((n) => {
//     console.log(n*3 , (n*3 % 2 == 0)? "Even" : "Odd");
// })

 const students = [
    {name : "Meekness", age : 23},
    {name : "Love", age : 26},
    {name : "Joy", age : 56 }
];
const AddProperty = students.map(s =>{
    let regNo =   `${s.name[0]}${s.name[1]}${s.age}`.toUpperCase();
    return{
        ...s,
        registrationNo : regNo
    };
});
 console.log(AddProperty);
 // to print only the names
 const StudentName = students.map(a => a.name.substring(0,a.name.length-1));
 console.log(StudentName);
 const StudentsName = students.map(a => a.name);
 console.log(StudentsName);
   




