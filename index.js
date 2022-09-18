 
function validation(){

var username = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
console.log(password)

var namecheck = /^[a-zA-Z.]{3,22}$/;
var emailcheck = /^[A-Za-z]{3,}[1-9]{1,7}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
// var passwordcheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
var passwordcheck = /^[a-zA-Z.]{3,}[1-9]{1,}$/;


if(namecheck.test(username)){
    document.getElementById('name').style.border = "2px solid green";
    document.getElementById('usererror').innerHTML='valid';
    document.getElementById('usererror').style.color = 'green';
   
}else{
    document.getElementById('name').style.border = "2px solid red";
    document.getElementById('usererror').innerHTML='user name is invalid';
    return false; 
}
 
 
if(emailcheck.test(email)){
    document.getElementById('email').style.border = "2px solid green";
    document.getElementById('emailerror').innerHTML='valid';
    document.getElementById('emailerror').style.color = 'green';
}else{
    document.getElementById('email').style.border = "2px solid red";
    document.getElementById('emailerror').innerHTML='email is invalid';
    return false; 
}


if(passwordcheck.test(password)){
    document.getElementById('password').style.border = "2px solid green";
    document.getElementById('pasworderror').innerHTML='valid';
    document.getElementById('pasworderror').style.color = 'green';
} else {
    document.getElementById('password').style.border = "2px solid red";
    document.getElementById('pasworderror').innerHTML='password is invalid';

    return false; 
} 
document.getElementById('popup').style.display='block';
 if(namecheck.test(username) && emailcheck.test(email) && passwordcheck.test(password)){
    window.alert("form submittted")
 }
} 
   

