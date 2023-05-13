let emailElement= document.querySelector('#email');
console.log(emailElement);

let messageElement = document.querySelector('#message');

let submitButton= document.querySelector('#submit-button');
submitButton.addEventListener('click',function(e){
    e.preventDefault();

let emailValue= emailElement.value;
let messageValue =messageElement.value;
if(emailValue.includes('@')){
    alert('allright');
}
    else{
    alert('try again');
}


    console.log('Email:', emailValue);
    console.log('Message:',messageValue);
})