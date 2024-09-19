 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
 let heading = document.getElementById('heading').innerText = "Javascript";
// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'
 let para =  document.getElementsByClassName('paragraph')[0].innerText = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself";
// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
 let subH = document.querySelector('h3').innerText = "Things I've accomplished so far";
// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
 subH = document.querySelectorAll('h3')[0].innerText = "I have discovered that I can accomplish anything I put my mind to"
// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable
 let input1 = document.querySelectorAll('input')[0];
// 5.2. Attach the second input to a variable
 let input2 = document.querySelectorAll('input')[1];
// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
 let btn1 = document.querySelectorAll('button')[0];
// 5.4. Attach the FIRST span element to a variable(To display the information to)
 let span1 = document.querySelectorAll('span')[0];
//         P.S. for the next step make use of console.log() to keep track of where data is going  
// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
 function multiplyNum(num1, num2){
    return num1 * num2;
 }
  
// 5.6. Add an event listener to the button that runs the function that tyou created
btn1.addEventListener('click', () =>{
    span1.innerText = multiplyNum(input1.value, input2.value)
})
 
// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 
let input3 = document.querySelectorAll('input')[2];
// 6.2 Set the send modulud input to a variable
let input4 = document.querySelectorAll('input')[3];
// 6.3 Set the SECOND span to a varable(will display answer)
let span2 = document.querySelectorAll('span')[1];
// 6.4 Set the SECOND button to a variable(to run event listener)
let btn2 = document.querySelectorAll('button')[1];
// 6.5 Create a normal function to calculate the modulus of the inputs
function modulusNum(number1, number2){
    return number1 % number2;
 }
// 6.6 Add an event listener to the button which will run the function you created
btn2.addEventListener('click', () =>{
    span2.innerText = modulusNum(input3.value, input4.value)
})
// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
 document.querySelector('#bubbleTea').innerText = "White Tea";
// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.querySelector('#bubbleTea').innerText = "Black Tea";
// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
document.querySelector('#bubbleTea').innerText = "Herbal Tea";
// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)
 let lastName = "Ntulini"
// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
 let parentsAge = 20;
// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
 let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
//             Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
 coolCars[3] = 'Lamborghini';
// 12. Use a for loop to loop through the array, and console.log every value inside of the array.
 for (let i = 0; i < coolCars.length; i++) {
    const cars = coolCars[i];
    // console.log(cars);
}
// 13. Reverse the array and console.log the reversed array.
 let rev = coolCars.reverse()
// console.log(rev);
// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
let pop1 = coolCars.pop();
// console.log(pop1);
// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
 let merc = 'Mercedes';
 coolCars.unshift(merc)
//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
 let age = 15 ;

 if (age < 18){
    console.log('You are younger than 18');
 }
 else{
    console.log('You are older than 18');
 }

 // 17. Make use of a switch statement and create a possible soultion for no.16

switch(true){
    case age<18 :
        console.log('You are under age');
        break;
    case age >= 18 :
        console.log('You are of age');
        break;
    default:
        break;
}
// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')
 
let physics = 77;
let english = 50;

let avg = (physics + english) / 200 * 100;
let studentMark = avg;
let message
switch(true){
    case avg <= 100 && avg >= 80:
        message = console.log(`You did well your average was ${avg}%`);
    break;
    case avg <= 79 && avg >= 70:
        message = console.log(`You average was good, it was ${avg}%`);
    break;
    case avg <= 69 && avg >= 50:
        message = console.log(`Your average was okay, it was ${avg}%`);
    break;
    case avg <= 49 && avg >= 0:
        message = console.log(`You must work harder next time ${avg}%`);
    break;

}
// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1
let inc = 0
while (inc <= 20){
    // console.log(inc);
    inc++;
}

// 20. USE while or a do while loop to print out the array of Question15(coolCars).
 let loopA = 0;

 while (loopA <= coolCars.length) {
    console.log(coolCars[loopA]);
 }
// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.
// 23.1.   What code will I write to view the value of the armRestBars.
// 23.2    What code can I use to delete the property of legs with the value of 4.

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description
// 24. Create 4 objects of your choice using a factory function and console.log() each of them
// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

// 26. Create 4 objects of your own and print to the console all of the created objects.
// 27. After, push the 4 objects to an array called 'informationAboutCars'.
// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'
// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements
// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element
