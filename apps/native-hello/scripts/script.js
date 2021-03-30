function darkenBorder(element) {
    element.style.border = 'solid 1.5px black'
}

function validateFields(user, password) {
    if (user.value === '' && password.value === '') {
        alert('[ERROR] Both fields invalid')
        password.style.border = 'solid 1px red'
        user.style.border = 'solid 1.5px red'
        return true
    }

    else if (user.value === '') {
        alert('[ERROR] Invalid user')
        user.style.border = 'solid 1.5px red'
        return true
    }

    else if (password.value === '') {
        alert('[ERROR] Invalid password')
        password.style.border = 'solid 1.5px red'
        return true
    }

    return false
}

async function fetchIp() {
    let response = await fetch('http://ip-api.com/json/?fields=57847')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

async function fetchHello(json) {
    let response = await fetch(`https://fourtonfish.com/hellosalut/?cc=${json['countryCode']}&ip=${json['query']}`)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

async function fetchHelloUser(json, countryCode) {
    let response = await fetch(`https://fourtonfish.com/hellosalut/?lang=${countryCode}&ip=${json['query']}`)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

async function fillHello() {
    var user = document.getElementById('user')
    var password = document.getElementById('password')
    var language = document.getElementById('language')
    var greetings = document.getElementById('greetings')
    greetings.innerHTML = ''

    if (!validateFields(user, password)) {
        if (language.value === '') {
            fetchIp()
                .then((json) => {
                    fetchHello(json)
                        .then((json) => {
                            let p = document.getElementById('greetings')
                            p.innerHTML += `${json['hello']}, ${user.value}! <br> You have successfully logged in!<br>`
                        })
                })
        } else {
            fetchIp()
                .then((json) => {
                    fetchHelloUser(json, language.value)
                        .then((json) => {
                            let p = document.getElementById('greetings')
                            p.innerHTML += `${json['hello']}, ${user.value}! <br> You have successfully logged in!<br>`
                        })
                })
        }
    }
}

async function fillInfo(paragraph) {
    fetchIp()
        .then((json) => {
            paragraph.innerHTML += `<br>Extra informations`
            paragraph.innerHTML += `<br>IP: ${json['query']}`
            paragraph.innerHTML += `<br>City: ${json['city']}`
            paragraph.innerHTML += `<br>Region: ${json['region']}`
            paragraph.innerHTML += `<br>Country: ${json['country']}`
            paragraph.innerHTML += `<br>Zip code: ${json['zip']}`
            paragraph.innerHTML += `<br>Longitude: ${json['lon']}`
            paragraph.innerHTML += `<br>Latitude: ${json['lat']}`
            paragraph.innerHTML += `<br>Timezone: ${json['timezone']}`
        })
}

function login() {
    fillHello()
        .then(() => fillInfo(greetings))
}

function logout() {
    var user = document.getElementById('user')
    var password = document.getElementById('password')
    var paragraph = document.getElementById('greetings')

    if (user.value !== '' && password.value !== '') {
        alert(`Have a great day, ${user.value}`)

        user.value = ''
        password.value = ''
        paragraph.innerHTML = ''
    }
}
