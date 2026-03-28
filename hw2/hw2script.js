/*
Program name: script.js
Author: Jonathan Rodriguez
Date created: 03/26/2026
Date last edited: 03/26/2026
Version: 1.0
Description: External JavaScript for patient registration form validation and review functionality.
*/

function initalizeFunctions(){
    setDateDisplay();
    setSliders();
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

function validateDob() {
    dob = document.getElementById("dob");
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
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validateUid() {
    uid = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = uid;

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
    const pass = document.getElementById("pword").value;
    const username = document.getElementById("username").value;

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

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("confirm_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

function setSliders() {
    let painSlider = document.getElementById('painSlider');
    let painValue = document.getElementById('painValue');
    
    if (painSlider && painValue) {
        painSlider.oninput = function() {
            painValue.innerHTML = this.value;
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
    let zip = document.getElementById('zip') ? document.getElementById('zip').value : '';
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
    html += '<tr><td class="reviewLabel">Address:</td><td>' + addr1 + '<br>' + addr2 + '<br>' + city + ', ' + state + ' ' + zip + '</td></tr>';
    
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
                reviewPanel.style.display = 'none';
            }
        };
    }
}

function setupSubmitReviewButton() {
    let submitReviewBtn = document.getElementById('submitReviewButton');
    if (submitReviewBtn) {
        submitReviewBtn.onclick = function() {
            if (validatePasswords()) {
                document.getElementById('regForm').submit();
            } else {
                alert('Please fix the password errors first!');
            }
        };
    }
}

