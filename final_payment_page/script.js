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
    const lastName = document.getElementById('lastName')
    const phone = document.getElementById('phone')
    const cardNo = document.getElementById('cardNo')
    const expDate = document.getElementById('expDate');
    const cvc = document.getElementById('cvc');

    let namePattern = /^[a-zA-Z]{2,30}$/;
    let phonePattern = /^[0-9]{10}$/
    let cardNoPattern = /^[0-9]{16}$/
    let cvcPattern = /^[0-9]{3}$/
    let today = new Date();
    let selectedDate = new Date(expDate.value);

    function errorStyle(inputField) {
        inputField.style.border = "2px solid red";
    }

    if (!namePattern.test(firstName.value)) {
        errorStyle(firstName);
        errors.push('Enter a First Name in correct Format.')
    }

    if (!namePattern.test(lastName.value)) {
        errorStyle(lastName);
        errors.push('Enter a Last Name in correct Format.')
    }

    if (!phonePattern.test(phone.value)) {
        errorStyle(phone);
        errors.push('Phone number must be of 10 digits.')
    }

    if (!cardNoPattern.test(cardNo.value)) {
        errorStyle(cardNo);
        errors.push('Card Number must contains 16 digits.')
    }

    if (!cvcPattern.test(cvc.value)) {
        errorStyle(cvc);
        errors.push('CVC number should be of 3 digits.')
    }

    if (selectedDate <= today || selectedDate == "Invalid Date") {
        errorStyle(expDate);
        errors.push('Invalid expiry date. Please select a date greater than today.');
    }

    return errors;
}