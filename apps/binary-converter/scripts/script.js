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