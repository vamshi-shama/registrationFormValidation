function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('Email').value
    let city = document.getElementById('city').value
    let zip = document.getElementById('zip').value
    let check = document.getElementById('check-box').checked
    let error = false

    if (firstName.length >= 2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'

    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastName.length >= 2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'

    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }


    if (email.includes('@') &&
        email.includes('.') &&
        email.indexOf('@') != 0 &&
        email.length - email.lastIndexOf(".") >= 3) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    } else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if (city.length >= 3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'

    } else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true
    }

    let zipNumber = parseInt(zip)
    if (zip.length === 6 && !isNaN(zipNumber)) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'

    } else {
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
        error = true
    }

    if (state != 'None') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'

    } else {
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true
    }


    if (check) {
        document.getElementById('tnc-invalid').style.display = 'none'
    } else {
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }

    if (!error) {
        alert('Your details have been saved successfully')
        document.getElementById('form').reset()
        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for(i=0;i<validFeedbacks.length;i++){
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for(i=0;i<invalidFeedbacks.length;i++){
            invalidFeedbacks[i].style.display = 'none'
        }
    }
}


