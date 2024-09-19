// Welcome and I hope you didn't eat breakfast this morning because you are about to eat some javscript(*nom* *nom*)

// As we know things will start out easy

// 1. Change 'This is the first heading' to 'Javascript is my breakfast for today'.(set it as a variable first then change it)

let heading = document.querySelector('h1');

heading.innerText = "Javascript is my breakfast today";

// 2. DO NOT USE QUERY SELECTOR: change the first subheading to 'Javascript is awesome and cool'

document.getElementsByTagName('h4')[0].innerText = "Javascript is awesome and cool";

// 3.change the second subheading to 'I enjoy coding'

let sub2 = document.querySelectorAll('h4')[1];

sub2.innerText = "I enjoy coding";

// 4. DO NOT USE QUERYSELCTOR: change the third subheading to 'My subconsious mind is my partner in success'

document.getElementsByClassName('.thirdHeading').innerText = "My subconsious mind is my partner in success";

// 5.DO NOT USE QUERY SELECTOR: change the forht subheading to 'My body is an amazing healing mechanism'


document.getElementsByTagName('h4')[3].innerText = "My body is an amazing healing mechanism";


//6. Consider the following array ['banana', 'apple', 'orange', 'pear']

 let fruits = ['banana', 'apple', 'orange', 'pear']

// use a loop(for of) to loop through the array and log the values display the information.

for (const i of fruits) {
    console.log(i);

// 7. Use the loop in Ques 6 to display the data into the 'foodholder' id 
//(The catch...it must appear in bullet points on the html)

    let foodholder = document.querySelector("#foodHolder");

    foodholder.innerHTML += "<li>" + i + "</li>"
}


// 8.Welcome to the mini calculator that only adds+, once you see the steps you'll finish it in no time:)

// 8.1 make a variable for the input tag(where information will be written to)
// Now Time for some nandos

let input = document.querySelector('input');

// 8.2. make a variable for the equal button(=)

let equal = document.querySelectorAll('button')[6];

// 8.3 Attach a all the buttons with values to a single variable(This is will now make it/or return an array)

let buttons = document.querySelectorAll('[value]');

// 8.4 Now create a function that will add the button to the input tag.

function add(btnValue){
     input.value += btnValue;
}

// 8.5 Now use a ForEach loop to add an event lister to each button that will add the value of the button to the input tag.(make use of the function made in 8.4)

buttons.forEach(event => {
    event.addEventListener('click', ()=>{
        add(event.value);
    })
});

// 8.6 Now attach an event listener to the equal button that will evaluate( eval ) the answer

equal.addEventListener('click', ()=>{
    input.value = eval(input.value);
})
//9. Now make each button[1, 2 and 3] alert the value of 'data-textset' value in the html. for eg when I click on button1, the alert will show...'I am button 1'.

// 9.1 Attach button1, button2, and button3 to a single variable(just like earlier it will be an array) 

let btn = document.querySelectorAll('[data-textset]');

// 9.2 To attach an alert to multiple buttons make sure to use a for each loop
    //not done with the loop yet//
    btn.forEach(button => {
        btn.addEventListener('click', ()=>{
            alertMessage(button)  //haven't created this function yet.
        })
    });

// 9.3 Write a function inside of the event listener that will alert the message...for the message you need to use .getAttribute() to attach the message from the button to the alert

function alertMessage(button){
    //getAttribute will return any value of specified attribute ,
    //eg data-textset = "I am a button 3"
    message = button.getAttribute('data-textset');
    alert(message);
}

// 10 A student got the following marks Eng 59%, afrik 40%, maths 56%, physics 71%. Calculate his average for the given marks and use a switch statement to check the answer,write the message into the corresponding tag. If the student got higher than 80%, message should be 'I'm proud of you'. If the student got higher than 50%,message should be 'Dont worry I'm still proud of you'. If the student got below than 50%,message should be 'What did you think I was going to say I'm still proud of you :), regardless'

let average = (59+40+56+71)/4;
let displayMessage = document.querySelectorAll('p')
let message;



// 11.Create a factory function that will create an object with name, surname, message:function. The function should log the name and surname of that object. Create 2 objects using the factory function.

// 12 Create a constructor function that is the same as no 11. Create 2 objects using the constructor function and display the message in the first paragrph tag

// Bonus1 (), 
// create a recursive function that will return the fibonacci sequence until the limit value for, 
//eg limit value = 10 output will be 1 1 2 3 5 8
//eg limit value = 22 output will be 1 1 2 3 5 8 13 21


// bonus2
// make the background of the footer tag change color to blue when clicking on the footer button

//bonus3 
//make program that will check whether a number is a prime number. For example 3, response 'yes it is a prime number', 12, no it is not a prime number. Use your discretion


