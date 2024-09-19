// // let x = 20;
// // let y = 2;

// let person1 = { //deep object - because it has an object inside an object.
//     name:'Mark',
//     age:50,
//     status:{
//         verified: true
//     }  
// }
// // let person2= { //shallow object 
// //     name:'Mark',
// //     age:50,
// // }

// //shallow copy - only copies shallowm copies.
// let copy1 = {...person1}; 
// let copy2 = Object.assign({}, person1);

// // let func1 = {
// //     speech(){
// //     }
// // }

// copy1.name = 'Asanda';
// copy2.name = 'Rio';

// // JSON.stringfy - convert onject into a string
// let copy3 =  JSON.parse(JSON.stringify(person1)); //JSON.parse converts the strings back into being an object
// copy2.status.verified = false;


// // function lol(){
// //     this.name = name;
// //     this.age = age;
    
// // }

// // lol.prototype.speech = function(){
    
// // }

// console.log(copy2);

// Create a palindrome function  when the word is being reverse

// function reverseText(text){
    
//         return text.split('').reverse().join('')
// }

// function revTxt(String){
//     let word = String;
//     let reversedWord = revTxt(word);
        
//         if (reversedWord == word){
//             console.log('This is a palindrome');
//         }
//         else{
//             console.log('This is not a palindrome');
//         }
// }
// revTxt('racecar')

// Write a Javascript program to construct the following patteren below,using nested for loop
// *
// ** 
// ***
// ****
// *****

// for (let i = 0; i <= 5; i++) {
//     for(let j= 0; j < 1 ; j++){
//         if(i == 0){
//             console.log('*');
//         }
//         else if(i == 1){
//             console.log('**');
//         }
//         else if(i == 2){
//             console.log('***');
//         }
//         else if(i == 3){
//             console.log('****');
//         }
//         else if(i == 4){
//             console.log('*****');
//         }
//     }   
// }

// for (let i = 0; i < 5; i++) {
//     for (let symbol = 0; i <= 4; symbol++) {
//         symbol += '*';
//     }
//     console.log(symbol);
// }


// for (let i = 0; i <= 5; i++) {
//         for(let j= 0; j == 0 ; j++){
//             if(i == 0){
//                 console.log('*');
//             }
//             else if(i == 1){
//                 console.log('**');
//             }
//             else if(i == 2){
//                 console.log('***');
//             }
//             else if(i == 3){
//                 console.log('****');
//             }
//             else if(i == 4){
//                 console.log('*****');
//             }
//         }   
//     }