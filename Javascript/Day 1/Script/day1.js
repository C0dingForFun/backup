// arr[arr.length-1] - values in array  -1 ; 3-1 = 2 
// arr.push(100) - inerts 100 at the end of array.


// let num1 = 12;
// let num2 = 13.5;

// let bool = true; 
// let nothing = null;
// let value = Symbol("message");

// let Object1 = {
//     type:"table",
//     price:2000, 
//     legs:{
//         color:"brown",
//         number:2
//     },
//     colors:['red','green','blue','black'],
//     // Object1.type - dot notation.
//     // Object1["type"]
    
// };

// // let calc = 3+2*4+4/2-1;

// // console.log(eval(`${input} + ${input2}`))

// // console.log( input);
// let arr = [num2, 18, "Ye"];

//conditional statements
// let input1 = +prompt("Enter a number");
// let input2 = +prompt("Enter a number2");

// if(input1 == 20 || input2 < 20 ){
//     console.log("The value1 is fr fr 20 or value2 is less than 20");
// }
// else if(input1 > 20 && input2 > 40){
//     let answer = input1 + input2;
//     if (answer <= 100){
//         console.log(`${answer} is less than 100`);
//     }
//     else{
//         console.log(`${answer} is more than 100`)
//     }
// }
// else{
//     console.log("Bleh");
// }

// let car = {
//     color:'black',
//     model:'ford',
//     transmission: 'Semi-Auto',
//     year:2014
// }

// let phone = {
//     screenSize:6.5,
//     storage:'128GB',
//     brand:'Apple',
//     OS:'ios',
//     color:'Rose Gold',
//     model:'14 Pro Max'
// }

// if(car.color == phone.color) {
//     console.log('The colors are the same.');
// }
// else if(car.model == 'ford' && phone.brand== 'Apple'){
//     if (car.color == 'pink' || phone.model == '14 Pro Max') {
//         console.log('They either have a pink car or a 14 Pro Max.'); //guessing game idea.
//     } else {
//         console.log('LOL they have neither.');
//     }
//     console.log('The car is a ford and the phone is an iPhone.');
// }
// else{
//     console.log('The colors are not the same.');
// }

//Varibale for age 

// let age = 20;

// if (age < 16 && age < 18) {
//     console.log("You are not old enough to get your learners and your driver's license.");
// }
// else if(age >= 16 && age < 18) {
//     console.log("You old enough to get your learners but you are not old enough to get your driver's license.");
// }
// else( age > 16 && age >= 18) ;{
//     console.log("You are not old enough to get your learners and driver's license.");
// }

//The key is what you are checking.
// switch (true) {
//     case age >= 16 && age <18:
//         console.log("You  only qualify for learners");
//         break;
//     case age >= 18:
//         console.log("You qualify for your driver's");
//         break;

//     default:
//         console.log("You do not qualify at all.");
//         break;
// }

// let place = "CPT";
// let age = 19;
// let male = true;
// let brain = null;
// let zero = undefined;

// console.log(typeof place);
// console.log(typeof age);
// console.log(typeof male);
// console.log(typeof brain);
// console.log(typeof zero);

// let laptop = {
//     brand:'Acer',
//     CPU:'i5',
//     ROM:'512GB',
//     RAM:'8GB',
//     SSD:'256GB',
//     color:'silver'
// }

// let license = {
//     surname:'Mabandla',
//     name:'Gwiba',
//     nationality:'RSA',
//     sex:'Male',
//     DOB:'11/11/2000',
//     ID_number:'6337845630658',
//     status:'Citizen'
// }

// let arr = [laptop, license];

// console.log(arr);

//Write a program that determines whethter a given number is positon or negative

// let number = +prompt('Enter a number between -10 & 10');

// if (number > 0){
//     console.log('Your number is positive');
// }
// else{
//     console.log('Your number is negatuve');
// }
//Write a program that determines whether a given number is an odd or an even number
// let num = +prompt('Enter a number');
// let answer = 0;

// answer = num % 2;

// if (answer == 0){
//     console.log(`${num} is an even number`);
// }
// else{
//     console.log(`${num} is an odd number`);
// }

// function checkEven(number){
//     if (number % 2 == 0) {
//         console.log(`${number} is an even number`);
//     }
//     else{
//         console.log(`${number} is an odd number`);
//     }
// }

//  number % 2 == 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`)
// Write a program(using a switch statement) that transforms a numerical grade to a letter grade (e.g grade 8 should display "A",grade 9 should display "B",..., grade 12 should display "E").
// let grade = +prompt('Enter your grade from 8-12');

// switch (grade) {
//     case grade = 8:
//         console.log('A')
//         break;
//     case grade = 9:
//         console.log('B')
//         break;
//     case grade = 10:
//         console.log('C')
//         break;
//     case grade = 11:
//         console.log('D')
//         break;
//     case grade = 12:
//         console.log('E')
//         break;

//     default:
//         console.log('You are not in high school , go away.')
//         break;
// }

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// let ticketPrice = 0;
// let age = +prompt('Enter your age');

// if (age < 12){
//     ticketPrice = 5;
//     console.log(`Your ticket price is R${ticketPrice}`);
// }
// else if(age > 12 && age < 18){
//     ticketPrice = 10;
//     console.log(`Your ticket price is R${ticketPrice}`);
// }
// else if(age > 18 && age < 60){
//     ticketPrice = 20;
//     console.log(`Your ticket price is R${ticketPrice}`);
// }
// else{
//     ticketPrice = 15;
//     console.log(`Your ticket price is R${ticketPrice}`);
// }

// Write a program that determines if a year is a leap year.
// let year = +prompt('Enter a year');
// let leap;

// leap = year % 4 ;

// if (leap == 0){
//     console.log(`${year} is a leap year.`)
// }
// else{
//     console.log(`${year} is not a leap year.`)
// }

// what is a ternary operator

// function add(number1,number2) {
//     return number1 + number2;
// }

// const add = function(number1, number2){
//     return number1 + number2;
// }

// const add =(number1, number2) => number1 + number2

// console.log(add(5,8));

// let heading = document.getElementById('heading');
//document.querySelector('#heading') ; same thing as above.
//innerText
//textContent
//innnerHTML

// heading.innerText += " Gwiba";

// let classHeading = document.getElementsByClassName('heading5')[0];
// //document.querySelector('.heading5') ; same thing as above.
// classHeading.textContent = 'h5';

// let p = document.getElementsByTagName('p');
// p[1].innerText = 'second';


// let button = document.querySelector('[name = "button"]');

// button.addEventListener('click', changeText)

// function message(){
//     alert('Hello, You pressed the button');
    
// }

// function changeText(){
//     heading.innerText = ' Mabandla';
// }

// let textBox = document.querySelector('[data-input]');
// let btn1 = document.querySelector('[value = "1"]');
// let btn2 = document.querySelector('[value = "2"]');

// btn1.addEventListener('click', ()=>{
//     textBox.value += btn1.value;
// })
// btn2.addEventListener('click', ()=>{
//     textBox.value += btn2.value;
// })

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let input3 = document.querySelector('#input3');
// let input4 = document.querySelector('#input4');
// let input5 = document.querySelector('#input5');
// let input6 = document.querySelector('#input6');
// let input7 = document.querySelector('#input7');
// let input8 = document.querySelector('#input8');

// let span1 = document.querySelector('#span1');
// let span2 = document.querySelector('#span2');
// let span3 = document.querySelector('#span3');
// let span4 = document.querySelector('#span4');

// let btnMultiply = document.querySelector('.Multiply');
// let btnAdd = document.querySelector('.Add');
// let btnMinus = document.querySelector('.Minus');
// let btnDivide = document.querySelector('.Divide');

// btnMultiply.addEventListener('click',()=>{
//     span1.innerText =  eval("input1.value * input2.value");
// })
// btnAdd.addEventListener('click',()=>{
//     span2.innerText =  eval(`${input3.value} + ${input4.value}`);
// })
// btnMinus.addEventListener('click',()=>{
//     span3.innerText =  eval("input5.value - input6.value");
// })
// btnDivide.addEventListener('click',()=>{
//     span4.innerText =  eval("input7.value / input8.value");
// })

// let car = {
//     make:'',
//     color:'',
//     tyres:{
//         make:'',
//         width:''
//     }
// }

// console.log(car.tyres.make) //dot notation.
// console.log(car["tyres"]["make"]) //bracket notation.

//fcatory functions

// const speak = function(){
//     speak(){
//         console.log(`${this.name} is speaking`)
//     }
//     console.log(`${this.name} is speaking`);
// }

// function createPersons(name){
//     return Object.create(speak, {
//         name:{
//             value:name;
//         }
//     })
    
    // return{
    //     name,
    //     walk(){
    //         console.log(`${this.name} is walking`)
    //     }
    // }
// }

// const person1 =  createPersons('Gwiba')
// person1.age = 100;

// const person1 = {
//     name:'Gwiba', 
//     color:'black',
//     walk: function(){
//         console.log(`${this.name} is walking`)
//     }

// }

// const person2 = {name:'Marcus', color:'yellow'}

//constructor functions

// function CreatePersons(name){
//     this.name = name;
// }

// const person1 = new CreatePersons('Gwiba')


//Create 5 car object with a factory functionn the properties must include make, color, and a booloean if the car is fast not.
// let message = {
//     meassage(){
//         return "Vroom Vroom"

//     }
// }

// function createCar(make, color, fast){ // doing factory functions coorrectly
//     return Object.create(message,{
//         make:{value:make},
//         color:{value:color},
//         fast:{value:fast}
//     })
// } 

// let car1 = createCar('BMW','black', true)
// let car2 = createCar('TATA','white', false)
// let car3 = createCar('Ford','blue', true)
// let car4 = createCar('Mercedes','grey', true)
// let car5 = createCar('Nissan','silver', true)



//Create 5 person objects using constructor function ans using the properties of name, favCar, and speed if function() which outputs.
// The like speeding or don't.

// function createPerson(name, favCar, speed){
//     this.name = name,
//     this.favCar = favCar,
//     this.speed = speed
//     this.speed = function(){
//         this.speed ? console.log("They like speeding") : console.log("They don't like speeding");
//     }
// }


// let person1 = new createPerson('Marcus', 'Nissan', true)
// let person2 = new createPerson('Oyitanda', 'Koenigsegg', true)
// let person3 = new createPerson('Keegan', 'Aston Martin', true)
// let person4 = new createPerson('Chandre', 'Beetle, Hippie Waggon, Volkswagen,', false)
// let person5 = new createPerson('Jayden', 'Volkswagen VR6', true)

// person1.prototype.message = function(){
//     return "Vroom vroom"
// }

// function recursive(number){
//     if (number<10){
//         return recursive(otherNumber);
//     }
//     return name()
// }
// function factorial(number){
//     if (number == 1){
//         return number
//     }   
//     return number * factorial(number-1);
// }

// console.log(factorial(5));


//1.Calculate all the number from 0 -> 10

// function recursive(number){
//         if (number == 10){
//         return number;
//     }
//     return number + recursive(number + 1)
// }
// console.log(recursive(0));

//2. Calculate sum of all even number from 0 -> 10

// function recursive(number){
//     if (number == 0){
//         return number
//     }

//     if (number % 2 === 0){
//         return number + recursive(number-2)
//     }
//     else{
//         return recursive(number -1)
//     }
// }
// console.log(recursive(11));

// 3. Calculate the power of a number 

// function recursive(number, power){
//     if(power === 0 ){
//         return 1;
//     }
//     else{
//         return number * recursive(number, power -1 )
//     }
// }
// console.log(recursive(2, 2));

// let class2 = ['Choe', 'Gwiba', 'Marcus', 'Oyintanda'];

// class2.push('Taahir');//adds element in array
// // class2.pop() //removes and displays the last element
// class2.shift()//removes and displays the first element
// class2.unshift //adds to the first element
// class2.forEach(person =>{
//     console.log(person); //returns all elements in the array
// })
// class2.slice(1, 2)
// let updateClass2 = ['Akhona', 'Yolanda', 'Lebu']
// let update = class2.concat(updateClass2) //adds more elements or combines two arrays.

// let fil = update.filter(person => person != 'Gwiba') ;//use for cart

// update.map((value) =>{
//     // console.log(value);
// })

// let sum =[1, 2, 3, 4, 5, 6 ];
// let reduced = sum.reduce((total, num) =>{
//     return num + total
// },0);
// update.find(person => person == Marcus)
//update.revert() displays all elements in the array in reverse

// update.join

// let variabe = update.splice(1,1) //deletes Gwiba
// let variabe = update.splice(1,0, 'Chany') // adds Chany
// let moreStudents = ['Caleb', 'Jordan', 'Nazneen']
// let variabe = update.splice(1,0, ..moreStudents) // adds and unpack elememts in moreStudents array.

// console.log(update.reverse().toString()); you have more than one method

//Craete a function that returns the string 'power' => 'rewop'

// function reverseText(text){
//     return text.split('').reverse().join('')
// }

// const string = 'power';
// const reversedWord = reverseText(string)

// console.log(reversegdWord);

// let buttons = document.querySelectorAll('button')

// buttons.forEach((button, index)=>{
//     if(index < 4  || index > 6 ){

//     }
// })

// buttons.foreach(button)

//Create a function that takes in 2 arguments and adds the first one to the array and
//  removes the second argument, if the second argument is empty the function should only add the item to the array
// let class2 = ['Jayden','Elvin','Zen','Mohamad']

// function names(name1, name2){
//     if (name2 !== undefined){
//         class2.splice(0,1);
//     }
//     class2.push(name1);
// }
// names('Gwiba','Elvin')

// console.log(class2);

// let person_1 = {firstName:'Asanda', favColor:'Beige'}
// let person_2 = {firstName:'Olwethu', favColor:'Black'}
// let person_3 = {firstName:'Siphokuhle', favColor:'Turquoise'}

// let people = [
//     {firstName:'Asanda', favColor:'Beige'},
//     {firstName:'Olwethu', favColor:'Black'},
//     {firstName:'Siphokuhle', favColor:'Turquoise'}
// ]

// for (const person of people) {
//     for (const item in person) {
//         console.log(person[item]);
//     }
// }

//Write a function that calculates the area of a circle and it takes in an argument of the radius 

// function area(radius){
//     return parseFloat(Math.PI * radius ** 2).toFixed(2);
// }

// console.log(area(22));

// //Write a function that returns the date of today

// function date(){
//     return new Date()
// }
// // console.log(date())

// //Create a mini to-do list.When you press submit it should add the input the unordered list below.

// let input = document.querySelector('input')
// let submit = document.querySelector('button')
// let list = document.querySelector('ul')

// submit.addEventListener('click', ()=>{
//     list.innerHTML += "<li>" + input.innerText + "</li>"
// })

//The input should be clearded when the submit button is pressed
//bonus: When clicking on a task that was added(because it was completed),it should delete the item from the list  hint:all input values must be saved into an array
// loop through array 
// for (const  of fruits) {
//     console.log(i);

//     let foodholder = document.querySelector("#foodHolder");

//     foodholder.innerHTML += "<li>" + i + "</li>"

// let person = {
//     name:'Gwiba',
//     surname:'Mabandla',
//     // getter
//     get fullname(){ // get - it makes a function readable as a property.
//         return this.name + " " + this.surname
//     }, // need a comma because the function is now property
//     // setter - reassign values that are inside an object.
//     set fullname(name){
//         let [first,last] = name.split(' ')
//         this.name = first;
//         this.surname = last

//         // console.log(first);
//     }
// }
// person.fullname = 'Ntando Mangele' // thiis is how you call a setter.
// console.log(person.fullname);

//Promises
// let numbers = [2, 5, 7];
// function sms(message){
//     console.log(message); 
// }
// async function prom(){
//     let newPromise = await new Promise((resolve, reject) =>{
//     numbers.push(8)
//     if(numbers.length > 3){
//         resolve('An item was added successfully')
//     }else{
//         reject('There was a problem')
//     }
// }).then(messageResolve=>sms(messageResolve) , messageReject=> sms(messageReject)) //this is so you can add more code after checking if its resolved or rejected

// console.log(newPromise)}
// prom()

// Local Storage - Stores information on the browser forever. 
    localStorage.getItem(key) //returns the value of the key that you specify
    localStorage.setItem(key,value) 
    localStorage.removeItem(key)

//Session Storage - Stores information on the browser, until I close my browser *use session storage for my sales.
    sessionStorage.getItem(key) //returns the value of the key that you specify
    sessionStorage.setItem(key,value) 
    sessionStorage.removeItem(key)
