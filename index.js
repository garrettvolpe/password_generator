// Get the input and button elements
const input = document.querySelector('#length');
const button = document.querySelector('button');

// Create a string that includes all the alphabet letters (both upper and lower case), numbers, and special characters
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';


function random(str) {
    // Create an array of characters from the input string
    const chars = str.split('');

    // Randomize the order of the characters using the Fisher-Yates shuffle algorithm
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    // Return the randomized string
    return chars.join('');
}

// Define the generatePassword function
function generatePassword() {
    // Get the password length from the input field
    const length = input.value;

    // Use the random-js module to shuffle the characters string
    let password = random(characters);

    // Use the first `length` characters to create the password
    password = password.substring(0, length);

    // Return the password
    return password;
}

// Add an event listener to the button to generate the password when clicked
button.addEventListener('click', function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Generate the password
    const password = generatePassword();

    // Display the password
    document.querySelector('#password').textContent = password;
});