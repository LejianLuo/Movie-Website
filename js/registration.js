function validate() {
   let emailflag=false;
   let loginflag=false;
   let passflag=false;
   let termsflag=false;
   let regex=/^(?=.*[a-z])(?=.*[A-Z]).*$/;
    //email
    if (!email.value.match(/\S+@\S+\.\S+/)) {
        emailexception.innerText="email address invalid";
        email.style.borderColor = 'red';
        emailflag=true;
    }
    else{
        emailexception.innerText="";
        email.style.borderColor = 'black';
    }
    //password
    if(!regex.test(pass.value)){
        passexception.innerText="password must contain one uppercase and one lowercase letter";
        pass2exception.innerText="";
        pass.style.borderColor = 'red';
        pass2.style.borderColor = 'black';
        passflag=true;
    }
    if(pass.value !=pass2.value){
        pass2exception.innerText="password does not match";
        passexception.innerText="password does not match";
        pass2.style.borderColor = 'red';
        pass.style.borderColor = 'red';
        passflag=true;
    }
    if(pass.value.length<6){
        passexception.innerText="password must be at least 6 characters"; 
        if(pass.value.length==0){ 
            passexception.innerText="password can not be empty"; 
        }
        pass.style.borderColor = 'red';
        passflag=true;
    }
    if(pass2.value.length<6){
        pass2exception.innerText="password must be at least 6 characters"; 
        if(pass2.value.length==0){ 
            pass2exception.innerText="password can not be empty"; 
        }
        pass2.style.borderColor = 'red';
        passflag=true;
    }
    if(passflag==false){
        passexception.innerText="";
        pass2exception.innerText="";
        pass.style.borderColor = 'black';
        pass2.style.borderColor = 'black';
    }
    //login
    if(login.value.length >=20){
        login.style.borderColor="red";
        loginexception.innerText="username must be less than 20 characters";
        loginflag=true;
    }
    else if(login.value ==""){
        login.style.borderColor="red";
        loginexception.innerText="username can not be empty";
        loginflag=true;
    }
    if(loginflag==false){
        loginexception.innerText="";
        login.style.borderColor = 'black';
    }
    //terms
    if(!terms.checked){
        termsexception.innerText="agree to terms and conditions";
        termsflag=true;
    }
    else{
        termsexception.innerText="";
    }

    if(passflag==true || loginflag==true || emailflag==true || termsflag==true){
        return false;
    }
    else{
        login.value.toLowerCase();
        return true;
    }
  }
function spamalert(){
    if(newsletter.checked){
        alert("You have agreed to receive email from us");
    }
}
