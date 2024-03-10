function checkInput(e) {
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

    const place = document.getElementById('place')
    const headCount = document.getElementById('headCount')
    const date = document.getElementById('date')

    let placePattern = /^[a-zA-Z]{3,30}$/;
    let headCountPattern = /^[0-9]{1,2}\sAdults-[0-9]{1,2}\sChildrens$/
    let datePattern = /^\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}-\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$/


    function errorStyle(inputField) {
        inputField.style.border = "2px solid red";
    }

    if (!placePattern.test(place.value)) {
        errorStyle(place);
        errors.push('Enter a place name.')
    }


    if (!headCountPattern.test(headCount.value)) {
        errorStyle(headCount);
        errors.push('Please add HeadCOunt information as "13 Adults-5 Childrens".')
    }


    if (!datePattern.test(date.value)) {
        errorStyle(date);
        errors.push('Please add check in and check out date as "24 Mar 2024-26 Mar 2024".')
    }

    return errors;
}