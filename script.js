const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorSpan = document.getElementById("error-span");

form.addEventListener("submit", e => {
    e.preventDefault

    var emailValue = emailInput.value.trim();
    var regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailValue === ""){
    errorFunc("Whoops! It looks like you forgot to add your email")
    }else if(!emailValue.match(regexPattern)){
        errorFunc("Please provide a valid email");
    }
    else{
    alert("Registration completed successfully!")
    }
});

function errorFunc(message){
    errorSpan.style.display = "block";
    emailInput.className += "error";
    errorSpan.innerText = message;
};

function typing(){
    errorSpan.style.display = "none";
    if(emailInput.classList.contains("error")){
        emailInput.classList.remove("error");
    };
};