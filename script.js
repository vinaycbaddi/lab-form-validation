// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
let button = document.getElementById('isubmit');
button.addEventListener('click', checkUserName);
function checkUserName() {
    checkUser();
    checkEmail();
    checkPassword();
}
function checkUser() {
    let user = document.getElementById('iusertext').value;
    let uerror = document.getElementById('name_error');
    console.log(user);
    if (user == null || user == '') {
        uerror.innerHTML = 'Please enter a valid name'
        return false;
    }
    else if (user.length < 8) {
        uerror.innerHTML = 'Name length is less than 8 charcters'
        return false;
    }
    else if (user.length > 15) {
        uerror.innerHTML = 'Name length is more than 15 charcters'
        return false;
    }
    else if (user.match(/\s/g)) {
        uerror.innerHTML = 'Contains Whitespace.'
        return false;
    }
    else if (/^[a-zA-Z0-9]*$/.test(user) == false) {
        uerror.innerHTML = 'Contains Special Characters.'
        return false;
    }
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
    let email = document.getElementById('iemailtext').value;
    let emerror = document.getElementById('email_error')
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    ;
    if (reg.test(email) == false) {
        emerror.innerHTML = "Invalid Email";
        return (false);
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let pass = document.getElementById('ipasswordtext').value;
    let passerror = document.getElementById('password_error')
    if (!regx.test(pass)) {
        passerror.innerHTML = 'Invalid Password';
        return false;
    }
}
