// 8.5 Now use a ForEach loop to add an event lister to each button that will add the value of the button to the input tag.(make use of the function made in 8.4)
buttons.forEach(button => {
    buttons.addEventListener('clicked', () => {
        input.value = buttons.value;
        input.value += add(btnValue);
    });
});
