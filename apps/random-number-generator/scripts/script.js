function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("range1"), function (value) {
    return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("range2"), function (value) {
    return /^-?\d*$/.test(value);
});

function validateFields() {
    let range1 = document.getElementById('range1').value;
    let range2 = document.getElementById('range2').value;

    if (range1 === '' || range2 === '') {
        alert('[ERROR] Ranges are empty. Try again.');
        return false;
    } else if (range1 === range2) {
        alert('[ERROR] Ranges are equal. Try again.');
        return false;
    }

    return true;
}

function randomNumber(range1, range2) {
    range1 = Math.ceil(range1);
    range2 = Math.floor(range2);
    decimal = Math.random();
    finalNumber = Math.floor(Math.random() * (range2 - range1) + range1) + decimal;
    return finalNumber;
}

function generateRandomNumber() {
    if (validateFields()) {
        let range1 = document.getElementById('range1').value;
        let range2 = document.getElementById('range2').value;
        console.log(randomNumber(range1, range2).toFixed(2));
    }
}