var logInForm = document.getElementById('logInForm'); //the log in form
var createAccount = document.getElementById('createAccount'); //create account Form
var CreateAccountBtn = document.getElementById('linkCreateAccount'); //hyper link
var logInBtn = document.getElementById('linkLogIn'); //hyper link
var signUpBtn = document.getElementById('signUpBtn'); //sign up btn
//to use for the sign in later
var signInBtn = document.getElementById('signInBtn');

//create account inputs
var usrNameReg = document.getElementById('usrNameReg');
var emailReg = document.getElementById('emailReg');
var passReg = document.getElementById('passReg');
var rePassReg = document.getElementById('rePassReg');
var regData = [];

//login account inputs
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword')

//the Create account hyper Link

function createAcc() {
    // e.preventDefault()
    logInForm.classList.add('form--hidden')
    createAccount.classList.remove('form--hidden')
}

//the Log in hyper Link
function loginLink() {
    logInForm.classList.remove('form--hidden')
    createAccount.classList.add('form--hidden')
}

//local storage conditions
if ((localStorage.getItem('usersData') == null)) {
    regData = []
} else {
    regData = JSON.parse(localStorage.getItem('usersData'));
}

//add the data to local storage
function addRegData() {
    var regTable = {
        name: usrNameReg.value,
        email: emailReg.value,
        password: passReg.value,
    }
    regData.push(regTable)
    localStorage.setItem('usersData', JSON.stringify(regData))
    console.log(regData);
}

//sign up btn action
//validation of Sign up- no Regex Used
function validateSignUp() {

    if (usrNameReg.value != '') {
        document.getElementById('unameValidate').innerHTML = ''
    }
    if (emailReg.value != '') {
        document.getElementById('emailRegValidate').innerHTML = ''
    }
    if (passReg.value != '') {
        document.getElementById('passValidate').innerHTML = ''
    }
    if (rePassReg.value != '') {
        document.getElementById('passConfirmValidate').innerHTML = ''
    }

    if (usrNameReg.value == '') {
        document.getElementById('unameValidate').innerHTML = 'Username is required'
    } else if (usrNameReg.value.length < 3) {
        document.getElementById('unameValidate').innerHTML = 'Username must be at least 3 characters'
    } else if (emailReg.value == '') {
        document.getElementById('emailRegValidate').innerHTML = 'Email is required'
    } else if (passReg.value == '') {
        document.getElementById('passValidate').innerHTML = 'Password is required'
    } else if (rePassReg.value == '') {
        document.getElementById('passConfirmValidate').innerHTML = 'Please Re-enter Password'
    } else if (passReg.value != rePassReg.value) {
        document.getElementById('passConfirmValidate').innerHTML = 'Pasword Not match'
    } else {
        document.getElementById('regSuccess').innerHTML = 'Registered Succesful'
        addRegData()
        setTimeout(clearSignup, 500)
    }

}

//clear inputs after filling the Sign up form
function clearSignup() {
    usrNameReg.value = ''
    emailReg.value = ''
    passReg.value = ''
    rePassReg.value = ''
    document.getElementById('regSuccess').innerHTML = ''
}

// sign in btn navigation


function confirmUsr() {
    if (userEmail.value == '') {
        document.getElementById('usernameValidation').innerHTML = 'Email is req'
    }
    if (userPassword.value == '') {
        document.getElementById('passwordValidation').innerHTML = 'Password is req'
    }
    if (userEmail.value != '') {
        document.getElementById('usernameValidation').innerHTML = ''
    }
    if (userPassword.value != '') {
        document.getElementById('passwordValidation').innerHTML = ''
    }

    for (var m in regData) {
        if (userEmail.value == regData[m].email && userPassword.value == regData[m].password) {
            // alert('welcome '+ regData[m].name)
            // ownerName.innerHTML=`${regData[m].name}`;
            localStorage.setItem('nameUsr', regData[m].name)
            location.href = 'web pages/home.html'
        }
    }

    /*
    if(userEmail.value!=regData[index].email && userPassword.value!=regData[index].password){
        document.getElementById('passwordValidation').innerHTML='invalid Email or password'
    }
    */

}



//=========Page 2 'home'==========

//log out btn on the 2nd page
var lorem = document.querySelector('#lorem')
var ownerName = document.querySelector('#ownerName')
var logOut = document.getElementById('logOut')

/*
function nameUsrHome(){
    ownerName.innerHTML=`<h3 class="text-capitalize">${(localStorage.getItem('nameUsr'))}</h3>`
}
*/
logOut.addEventListener('click', e => {
    e.preventDefault()
    console.log('done');
    location.href = '../index.html'

})



/*
lorem.addEventListener('click',()=>{
    nameUsrHome()
    // ownerName.innerHTML=(localStorage.getItem('nameUsr'));

}) */