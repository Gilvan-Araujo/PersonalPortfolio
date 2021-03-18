function toggleVisualMode() {
    var button = document.querySelector('button.visual-mode-button')
    if (button.innerHTML == '☀️') {
        button.innerHTML = '🌑'
    } else {
        button.innerHTML = '☀️'
    }

    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    header.classList.toggle('light-mode-header-footer');
    footer.classList.toggle('light-mode-header-footer');

    var main = document.querySelector('.main');
    var sidebar = document.querySelector('.sidebar');
    main.classList.toggle('light-mode-main-sidebar');
    sidebar.classList.toggle('light-mode-main-sidebar');

    var headers = document.querySelectorAll('h1, h2, h3, h4, p');
    for (var i = 0; i < headers.length; i++) {
        headers[i].classList.toggle('light-mode-headers')
    }

    var appContainer = document.querySelectorAll('.app-container');
    for (var i = 0; i < appContainer.length; i++) {
        appContainer[i].classList.toggle('light-mode-button-app-container')
    }
    button.classList.toggle('light-mode-button-app-container')

    var vectors = document.querySelectorAll('.svg');
    for (var i = 0; i < vectors.length; i++) {
        vectors[i].classList.toggle('filter-black')
    }
}

function reverseString(text) {
    var splitString = text.split("")
    var reversedArray = splitString.reverse();
    var joinedArray = reversedArray.join("")
    return joinedArray;
}

function validateBinaryNumber(binary) {
    for (i = 0; i < binary.length; i++) {
        if (binary[i] !== '1' && binary[i] !== '0') {
            return false
        }
    }
    return true
}

function convertToBinary(number) {
    if (validateBinaryNumber(number)) {
        value = 1;
        result = 0;

        for (var c = 0; c < number.length; c++) {
            if (number[c] === '1') {
                result += value;
            }
            value *= 2;
        }

        return result;
    } else {
        return '[INVALID]'
    }
}

function convert() {
    number = reverseString(document.getElementById('binary').value);
    paragraph = document.getElementById('answer');

    paragraph.innerHTML = `Decimal: ${convertToBinary(number)}`;
}