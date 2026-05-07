/*
Program name: script.js
Author: Jonathan Rodriguez
Date created: 03/26/2026
Date last edited: 04/16/2026
Version: 3.0
Description: External JavaScript for patient registration form validation and review functionality.
*/

function initalizeFunctions(){
    setDateDisplay();
    setSlider();
    setReviewButton();
    setupCloseReviewButton();
}

function setDateDisplay() {
    let d = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateString = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    document.getElementById('date').textContent = dateString;
}

function validateFname() {
    let fname = document.getElementById("firstname").value;
    const namePattern = /^[a-zA-Z]+$/;

    if( fname == "") {
        document.getElementById("fname-error").innerHTML = "First name can't be blank";
        return false;
    }
    else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Only letters, apostrophes, and dashes";
        return false;
    }
    
    else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name can't exceed 30 characters";
        return false;
    }
    else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

function validateLname(){
    let lname = document.getElementById("lastname").value;
    const namePattern = /^[a-zA-Z]+$/;

    if( lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name can't be blank";
        return false;
    }
    else if ( !lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Only letters, apostrophes, and dashes";
        return false;
    }
    else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name can't exceed 30 characters";
        return false;
    }
    else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}


function validateDob() {
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSsn() {
    let ssn = document.getElementById("ssn").value;
    const ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssn) {
        document.getElementById("ssn-error").innerHTML = 
        "SSN can't be blank";
        return false;
    } 

    if(ssn.charAt(3) !== '-' ) {
        document.getElementById("ssn-error").innerHTML = "Please use a dash for spacing";
        return false;
    }

    if (ssn.charAt(6) !== '-') {
        document.getElementById("ssn-error").innerHTML = "Please use a dash for spacing";
        return false;
    }

    if (!ssn.match(ssnPattern)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    }


    else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1(){
    let addr1 = document.getElementById("address1").value;
    const addrPattern = /^[a-zA-Z0-9\s,'\-]+$/;

    if (addr1=="" ) {
        document.getElementById("address1-error").innerHTML = "Address can't be blank";
        return false;
    }
    else if (!addr1.match(addrPattern)) {
        document.getElementById("address1-error").innerHTML = "Please enter a valid address";
        return false;
    }
    else if (addr1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Address must be at least 2 characters";
        return false;
    }
    else if (addr1.length > 30) {
        document.getElementById("address1-error").innerHTML = "Address can't exceed 30 characters";
        return false;
    }
    else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

function validateCity() {
    let city = document.getElementById("city").value;
    const cityPattern = /^[a-zA-Z\s\-]+$/;

    if (city == "") {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    }
    else if (!city.match(cityPattern)) {
        document.getElementById("city-error").innerHTML = "Please enter a valid city name";
        return false;
    }
    else if (city.length < 2) {
        document.getElementById("city-error").innerHTML = "City must be at least 2 characters";
        return false;
    }
    else if (city.length > 30) {
        document.getElementById("city-error").innerHTML = "City can't exceed 30 characters";
        return false;
    }
    else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

function validateZcode() {
    let zip = document.getElementById("zcode").value;
    const zipPattern = /^\d{5}$/;

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }
    else if(!zip.match(zipPattern)) {
        document.getElementById("zcode-error").innerHTML = "Please enter a valid zip code";
        return false;
    }
    else {
        document.getElementById("zcode-error").innerHTML = "";
        return true;
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!phone) {
        document.getElementById("phone-error").innerHTML = "Phone number can't be blank";
        return false;
    }

    if (!phone.match(phonePattern)) {
        document.getElementById("phone-error").innerHTML = "Please enter a valid phone number";
        return false;
    }
    else {        
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }

}

function validateEmail() {
    let email = document.getElementById("email").value;
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        document.getElementById("email-error").innerHTML = "Email can't be blank";
        return false;
    }   
    else if(!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}



function validateUid() {
   let uid = document.getElementById("username").value;
    /*document.getElementById("username").value = uid;*/

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}


function validatePass() {
    let pass = document.getElementById("pword").value;
    let username = document.getElementById("username").value;

    const errorMessage = [];

    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }

    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }

    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }

    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");

    return errorMessage.length === 0;
}

function confirmPword() {
    let pword1 = document.getElementById("pword").value;
    let pword2 = document.getElementById("confirm_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        '<span style="color: #09e748">Passwords match</span>';
        return true;
    }
}

function validateForm(){
    let valid = true;
    let submitButton = document.getElementById("submit");
    let validateButton = document.getElementById("validate");

    if (!validateFname()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePass()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
    if (valid) {
        submitButton.style.display = "inline-block";
        validateButton.style.display = "none";
    }
    else {
        showAlert(document.getElementById("alertText").innerHTML);
    }
 }

function setSlider() {
    let painSlider = document.getElementById('painSlider');
    let painValue = document.getElementById('painValue');
    
    if (painSlider && painValue) {
        painSlider.oninput = function() {
            painValue.innerHTML = this.value;
        };
    }
}

function showAlert(message){
    let closeAlert = document.getElementById('closeAlertButton');
    let alertPanel = document.getElementById('alertPanel');

    alertPanel.style.display = 'block';

    document.getElementById("alertText").textContent = message;

    if (closeAlert) {
            closeAlert.onclick = function() {
                if (alertPanel) {
                    alertPanel.style.display = 'none';
                }
            };  
    }
}


function showReview(){
    let fname = document.getElementById('firstname') ? document.getElementById('firstname').value : '';
    let pname = document.getElementById('preferredname') ? document.getElementById('preferredname').value : '';
    let MI = document.getElementById('mi') ? document.getElementById('mi').value : '';
    let lname = document.getElementById('lastname') ? document.getElementById('lastname').value : '';
    let birth = document.getElementById('birthdate') ? document.getElementById('birthdate').value : '';
    let minor = document.querySelector('input[name="minor"]:checked') ? document.querySelector('input[name="minor"]:checked').value : '';
    let SSN = document.getElementById('ssn') ? document.getElementById('ssn').value : '';
    let sex = document.querySelector('input[name="sex"]:checked') ? document.querySelector('input[name="sex"]:checked').value : '';
    let addr1 = document.getElementById('address1') ? document.getElementById('address1').value : '';
    let addr2 = document.getElementById('address2') ? document.getElementById('address2').value : '';
    let city = document.getElementById('city') ? document.getElementById('city').value : '';
    let state = document.getElementById('state') ? document.getElementById('state').value : '';
    let zcode = document.getElementById('zcode') ? document.getElementById('zcode').value : '';
    let phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
    let email = document.getElementById('email') ? document.getElementById('email').value : '';
    let userid = document.getElementById('username') ? document.getElementById('username').value : '';
    let password = document.getElementById('pword') ? document.getElementById('pword').value : '';
    let confirmPassword = document.getElementById('confirm_pword') ? document.getElementById('confirm_pword').value : '';
    let insurance = document.querySelector('input[name="insurance"]:checked') ? document.querySelector('input[name="insurance"]:checked').value : '';
    let vaccinated = document.querySelector('input[name="vaccinated"]:checked') ? document.querySelector('input[name="vaccinated"]:checked').value : '';
    let symptoms = document.getElementById('symptoms') ? document.getElementById('symptoms').value : '';
    let pain = document.getElementById('painSlider') ? document.getElementById('painSlider').value : '5';

    let html = '<table class="reviewTable">';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">PERSONAL INFORMATION</td></tr>';
    html += '<tr><td class="reviewLabel">First Name:</td><td>' + fname + '</td></tr>';
    html += '<tr><td class="reviewLabel">Preferred Name:</td><td>' + pname + '</td></tr>';
    html += '<tr><td class="reviewLabel">MI:</td><td>' + MI + '</td></tr>';
    html += '<tr><td class="reviewLabel">Last Name:</td><td>' + lname + '</td></tr>';
    html += '<tr><td class="reviewLabel">Birthdate:</td><td>' + birth + '</td></tr>';
    html += '<tr><td class="reviewLabel">Minor:</td><td>' + minor + '</td></tr>';
    html += '<tr><td class="reviewLabel">SSN:</td><td>' + SSN + '</td></tr>';
    html += '<tr><td class="reviewLabel">Sex:</td><td>' + sex + '</td></tr>';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">ADDRESS</td></tr>';
    html += '<tr><td class="reviewLabel">Address:</td><td>' + addr1 + '<br>' + addr2 + '<br>' + city + ', ' + state + ' ' + zcode + '</td></tr>';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">CONTACT</td></tr>';
    html += '<tr><td class="reviewLabel">Phone:</td><td>' + phone + '</td></tr>';
    html += '<tr><td class="reviewLabel">Email:</td><td>' + email + '</td></tr>';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">ACCOUNT</td></tr>';
    html += '<tr><td class="reviewLabel">Username:</td><td>' + userid + '</td></tr>';
    html += '<tr><td class="reviewLabel">Password:</td><td>' + password + '</td></tr>';
    html += '<tr><td class="reviewLabel">Confirm Password:</td>' + confirmPassword + '</td></tr>';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">INSURANCE & VACCINES</td></tr>';
    html += '<tr><td class="reviewLabel">Has Insurance:</td><td>' + insurance + '</td></tr>';
    html += '<tr><td class="reviewLabel">Vaccinations:</td><td>' + vaccinated + '</td></tr>';
    
    html += '<tr class="reviewSectionHeader"><td colspan="2">HEALTH</td></tr>';
    html += '<tr><td class="reviewLabel">Symptoms:</td><td>' + symptoms + '</td></tr>';
    html += '<tr><td class="reviewLabel">Pain Level:</td><td>' + pain + '/10</td></tr>';
    
    html += '</table>';



    let reviewData = document.getElementById('reviewData');
    let reviewPanel = document.getElementById('reviewPanel');
    if (reviewData && reviewPanel) {
        reviewData.innerHTML = html;
        reviewPanel.style.display = 'block';
        reviewPanel.scrollIntoView({ behavior: 'smooth' });
    }

}   

function setReviewButton() {
    let reviewButton = document.getElementById('reviewButton');
        if (reviewButton) {
           reviewButton.onclick = showReview;
         }
}

function setupCloseReviewButton() {
    let closeBtn = document.getElementById('closeReviewButton');
    if (closeBtn) {
        closeBtn.onclick = function() {
            let reviewPanel = document.getElementById('reviewPanel');
            if (reviewPanel) {
                reviewPanel.style.display = 'none'
            }
        };
    }
}