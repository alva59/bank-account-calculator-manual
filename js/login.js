// Add event listener to the button
const btnLogin = document.getElementById('btn-login').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userEmail === "abc@gmail.com" && userPassword === "abc123" ){
        window.location.href = 'bank.html';
    }else{
        console.log('invalid user');
    }
})