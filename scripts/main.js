//please look for ******* for the parts which need server code


//code for the slider
$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});

$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

window.onload =function(){
    hide("id","forgotPasswordEmail");
}

//this function is executed when the user presses on the check button under the registration panel
function check(){
    //******/ This is where i would like to check from the server if the email entered is found and if it matches with the queue number ********
    //if it is found then var found= true; else found=false;
    var found=true;
    if (found==true){
        hide("id","register-email");
        hide("id","register-queue-num");
        hide("id", "check-btn");
        createInput("password", "pass1", "", "register-show","","Choose Password"); //i created a function which will create input items, the parameters are for things such as type, ID and value 
        createInput("password", "pass2", "", "register-show","","Re-enter Password");
        createInput("button", "go-btn", register, "register-show","Go!","");
        document.getElementById("error-passMatch").innerHTML=""; //this will hide the error text for if the user has entered an email which isnt found
    }
    else{
        document.getElementById("error-passMatch").innerHTML="Email/Queue Number not found on our server, please try again";//this will show the error text for if the user has entered an email which isnt found
    }
}

//this is the function that is given to the go button that i created eithin the check() function
function register(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if (pass1.value!==pass2.value){ //checks if passwords enter match and iff not displaying error text
        document.getElementById("error-passMatch").innerHTML="Passwords do not match, please re-try";
        pass1.value="";
        pass2.value="";
    }
    else{
        if(pass1.value.length<7){ //checking whether password is long enough
            document.getElementById("error-passMatch").innerHTML="The password you have chosen is too short, please choose a new password";
        }
        else{ //we can add more validation if needed
        document.getElementById("error-passMatch").innerHTML="";
        //****** */ I would like to put the code to send the password to be stored on the server here  *******************  
        }
        
    }
}
//function for when the login button is pressed
function login(){
    var foundEmail= false;
    var passCorrect=false;
    var emailEntered=document.getElementById("login-email").value;
    var passwordEntered=document.getElementById("login-password").value;
    //******* */ this is where the code for checking the email and password on the server should go ****************
    //if email is found and password is correct then foundEmail=true and passCorrect=true;
    if (foundEmail!=true || passCorrect!=true){
        document.getElementById("error-login").innerHTML="Email/Password not found, please re-try"
        document.getElementById("login-password").value="";
    }
    else{

    }
}
function forgotPassword(){
    document.getElementById("login-text").innerHTML="FORGOT PASSWORD";
    document.getElementById("error-login").innerHTML=""
    show("id","forgotPasswordEmail");
    show("id","forgotPasswordGo");
    show("id","back");
    hide("id", "login-email");
    hide("id", "login-password");
    hide("id", "login-btn");
    hide("id", "forgotPasswordBtn");

}

function forgotPasswordBack(){
    document.getElementById("login-text").innerHTML="LOGIN";
    document.getElementById("error-login").innerHTML=""
    hide("id","forgotPasswordEmail");
    hide("id","forgotPasswordGo");
    hide("id","back");
    show("id", "login-email");
    show("id", "login-password");
    show("id", "login-btn");
    show("id", "forgotPasswordBtn");
    
}

function forgotPasswordGo(){
    //******** */ check if email is on server ************
    found=false;
    if (found==false){
        document.getElementById("error-login").innerHTML="Email not found on server, please re-try"
    }
}

function createInput(type, id1, func, where, value, placeh){
    var node1=document.createElement("INPUT");
    node1.type=type;
    node1.id=id1;
    node1.onclick=func;
    node1.value=value;
    node1.placeholder=placeh;
    document.getElementById(where).appendChild(node1);
}
function createText(type,id1, value1, where){
    var node1=document.createElement(type);
    node1.id=id1;
    node1.value=value1;
    document.getElementById(where).appendChild(node1);
}

function hide(classOrId, value){
    if (classOrId=="class"){
        document.getElementsByClassName(value).style.display ="none";
    }
    else{
        document.getElementById(value).style.display ="none";
    }
}
function show(classOrId, value){
    if (classOrId=="class"){
        document.getElementsByClassName(value).style.display ="block";
    }
    else{
        document.getElementById(value).style.display ="block";
    }
}