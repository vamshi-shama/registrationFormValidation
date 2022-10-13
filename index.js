function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('Email').value
    let city = document.getElementById('city').value
    let zip = document.getElementById('zip').value
    let check = document.getElementById('check-box').checked
    console.log(firstName, lastName, email, city, zip, check)

    if (firstName.length >= 2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'

    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    if (lastName.length >= 2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'

    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
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
    }

    if (city.length >= 3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'

    } else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }

    let zipNumber = parseInt(zip)
    if (zip.length === 6 && !isNaN(zipNumber)) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'

    } else {
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
    }

    if (state != 'None') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'

    } else {
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
    }


    if (check){
        document.getElementById('tnc-invalid').style.display = 'none'
    }else{
        document.getElementById('tnc-invalid').style.display = 'block'
    }
}


    