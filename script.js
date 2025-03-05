const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


// Validate user entry
const isValid = (input) => {
    if(input === ''){
        alert('Please input a value');
        return false;
    }
    return true;
};

const clearString = (input) => {
    const regex = /[^A-Z0-9]/gi;
    return input.replace(regex, '');
};

const compareString = (input) => {
    const normal = input.split("");
    const opposite = [];
    for(const a of normal) {
        opposite.unshift(a);
    }
    
    // compare normal array and opposite array
    for(let i=0; i<normal.length; i++){
        if(normal[i] !== opposite[i]){
            return false;
        }
    }
    return true;
}


const isPalindrome = (input) => {
    // store original string
    const originalInput = input;

    // check if valid string
    if(!isValid(input)){
        return;
    }

    // reset result string
    result.textContent = '';
    
    // remove whitespace and characters
    input = clearString(input).toLowerCase();

    //check if cleared user input is valid
    if(!isValid(input)){
        result.innerText = `${originalInput} is not a palindrome.`;
        return;
    }
    
    if(compareString(input)){
        result.innerText = `${originalInput} is a palindrome.`;
    } else {
        result.innerText = `${originalInput} is not a palindrome.`;
    }
    
};


checkBtn.addEventListener('click', (event) => {
    isPalindrome(userInput.value)
    userInput.value = '';
});

userInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault()
        isPalindrome(userInput.value)
        userInput.value = '';
    }
});