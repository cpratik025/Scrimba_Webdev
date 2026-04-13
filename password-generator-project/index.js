firstPassword=document.getElementById("first-password");
secondPassword=document.getElementById("second-password");
generateBtn=document.getElementById("generate-btn");
characters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?']
passwordLength=document.getElementById("input-number");

function generatePassword(){
    let isPasswordLengthValid=passwordLengthValue();
    if (isPasswordLengthValid === true){
        passwordLength=document.getElementById("input-number").value;
        let password1="";
        let password2="";
        for(let i=0; i<passwordLength; i++){
            let randomIndex1=Math.floor(Math.random()*characters.length);
            let randomIndex2=Math.floor(Math.random()*characters.length);
            password1+=characters[randomIndex1];
            password2+=characters[randomIndex2];
        }   
        firstPassword.textContent=password1;
        secondPassword.textContent=password2;
    }
    else{
        alert("Please enter a valid password length (between 8 and 16 characters).");
    }
}

function passwordLengthValue(){
    passwordLengthVal=document.getElementById("input-number").value;
    if (passwordLengthVal < 8 || passwordLengthVal > 16){
        return false
    }
    else{
        return true
    }
}