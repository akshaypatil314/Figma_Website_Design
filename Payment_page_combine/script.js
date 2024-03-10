function validateForm(e) {
    e.preventDefault();

    let closePopupBtn = document.getElementById('closePopupBtn');
    let popup = document.getElementById('popup');

    let validationErrors = validation();

    function resetInputBorders() {
        var inputs = document.getElementById('myForm').getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.border = '1px solid black';
        }
    }

    if (validationErrors.length > 0) {
        errorMessages.innerHTML = '<strong>Error(s) occurred:</strong><br>' + validationErrors.join('<br>');
        popup.style.display = 'block';

    } else {
        document.getElementById('myForm').reset();
        resetInputBorders();
        alert("Form submitted successfully")
    }

    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

}


function validation() {

    let errors = []

    const firstName = document.getElementById('firstName')
    const middleName = document.getElementById('middleName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const country = document.getElementById('country')
    const time = document.getElementById("time")
    const fullName = document.getElementById('fullName')
    const cardNo = document.getElementById('cardNo')
    const expDate = document.getElementById('expDate');
    const cvc = document.getElementById('cvc');
    const guestInfo = document.getElementsByName('guestInfo');

    let name_Country_Pattern = /^[a-zA-Z]{2,30}$/;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let phonePattern = /^[0-9]{10}$/
    let fullNamePattern = /^[A-Za-z]+(?: [A-Za-z]+)*(?: [A-Za-z]+)?$/
    let cardNoPattern = /^[0-9]{16}$/
    let cvcPattern = /^[0-9]{3}$/
    let today = new Date();
    let selectedDate = new Date(expDate.value);

    let isGuestInfoChecked = false;
    for (let i = 0; i < guestInfo.length; i++) {
        if (guestInfo[i].checked) {
            isGuestInfoChecked = true;
            break;
        }
    }


    if (!isGuestInfoChecked) {
        errors.push('Please select a booking info.');
    }

    function errorStyle(inputField) {
        inputField.style.border = "2px solid red";
    }

    if (!name_Country_Pattern.test(firstName.value)) {
        errorStyle(firstName);
        errors.push('Enter a First Name in correct Format.')
    }

    if (!name_Country_Pattern.test(middleName.value)) {
        errorStyle(middleName);
        errors.push('Enter a Middle Name in correct Format.')
    }

    if (!name_Country_Pattern.test(lastName.value)) {
        errorStyle(lastName);
        errors.push('Enter a Last Name in correct Format.')
    }

    if (!name_Country_Pattern.test(country.value)) {
        errorStyle(country);
        errors.push('Enter a valid country name.')
    }


    if (!emailPattern.test(email.value)) {
        errorStyle(email);
        errors.push('Enter a valid email.')
    }


    if (!phonePattern.test(phone.value)) {
        errorStyle(phone);
        errors.push('Phone number must be of 10 digits.')
    }

    if (!cvcPattern.test(cvc.value)) {
        errorStyle(cvc);
        errors.push('CVC number should be of 3 digits.')
    }


    if (!cardNoPattern.test(cardNo.value)) {
        errorStyle(cardNo);
        errors.push('Card Number must contains 16 digits.')
    }

    if (!fullNamePattern.test(fullName.value)) {
        errorStyle(fullName);
        errors.push('Full Name on card should be in correct format.')
    }

    if (selectedDate <= today || selectedDate == "Invalid Date") {
        errorStyle(expDate);
        errors.push('Invalid expiry date. Please select a date greater than today.');
    }

    if (time.value == "") {
        errorStyle(time)
        errors.push("Please provide expected arrivale time");
    }
    return errors;
}