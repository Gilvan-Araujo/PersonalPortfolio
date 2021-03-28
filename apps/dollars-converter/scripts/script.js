var formatDollarsToCents = function (value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    if (value && value.includes('.')) {
        value = value.substring(0, value.indexOf('.') + 3);
    }

    return value ? Math.round(parseFloat(value) * 100) : 0;
}

var formatCentsToDollars = function (value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    value = parseFloat(value);
    return value ? value / 100 : 0;
}

var showCents = function () {
    var paragraph = document.getElementById('answer')
    var dollars = document.getElementById('dollars').value
    var totalCents = formatDollarsToCents(dollars)

    paragraph.innerHTML = `<p>&#162; ${totalCents}</p>`

    var quarters = Math.floor(totalCents / 25)
    var quartersText = (quarters === 1 ? 'quarter' : 'quarters')
    totalCents = totalCents % 25

    var dimes = Math.floor(totalCents / 10)
    var dimesText = (dimes === 1 ? 'dime' : 'dimes')
    totalCents = totalCents % 10

    var nickels = Math.floor(totalCents / 5)
    var nickelsText = (nickels === 1 ? 'nickel' : 'nickels')
    totalCents = totalCents % 5

    var pennies = Math.floor(totalCents / 1)
    var penniesText = (pennies === 1 ? 'penny' : 'pennies')
    totalCents = totalCents % 1
    
    paragraph.innerHTML += `<p>${quarters} ${quartersText}, ${dimes} ${dimesText}, ${nickels} ${nickelsText} and ${pennies} ${penniesText}`
}