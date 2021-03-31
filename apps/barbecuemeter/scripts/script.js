function validateFields(adults, children, duration) {
    if (isNaN(adults) || isNaN(children) || isNaN(duration)) {
        alert('Fill in the information, before calculating')
        let result = document.getElementById("result")
        result.innerHTML = ""
        return false;
    }
    return true
}

function calculate() {
    var adults = parseInt(document.getElementById("adults").value);
    var children = parseInt(document.getElementById("children").value);
    var duration = parseInt(document.getElementById("duration").value);
    let meat, beer, drinks;

    var fieldValidation = validateFields(adults, children, duration);

    if (fieldValidation) {
        if (duration <= 6) {
            meat = ((400 * adults) + (400 * (children / 2))) / 1000;
            beer = (1200 * adults) / 1000;
            drinks = ((1000 * adults) + (100 * children / 2)) / 1000;

            showResult(meat, beer, drinks);
        } else {
            meat = ((650 * adults) + (650 * (children / 2))) / 1000;
            beer = (2000 * adults) / 1000;
            drinks = ((1500 * adults) + (100 * children / 2)) / 1000;

            showResult(meat, beer, drinks);
        }
    }
}

function showResult(meat, beer, drinks) {
    var result = document.getElementById("result")
    result.innerHTML = ""
    result.innerHTML = "<h3>Required resources</h3>"
    result.innerHTML += `<p>Meat: ${meat} kilograms </p>`
    result.innerHTML += `<p>Beer: ${beer} liters </p>`
    result.innerHTML += `<p>Soda / Water: ${drinks} liters </p>`
}