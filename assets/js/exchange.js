var currencies = {}
function currencyList() {
    ['USD', 'EUR', 'DKK', 'NOK', 'GBP', 'JPY'].forEach(item => {
        fetch(`https://api.exchangerate.host/convert?from=${item}&to=TRY`)
            .then((res) => res.json())
            .then((res) => {
                currencies[item] = res.result;
                $('.exchange-item[data-curr=' + item + '] .price').html(res.result.toFixed(4));
            });
        });
}

function priceFormat(price) {
    var formatPrice = new Intl.NumberFormat('tr-TR', {
        currency: 'TRY',
        style: 'currency',
        minimumFractionDigits: 2,
    });
    return formatPrice.format(price).replace('₺', '');
}

function calculate() {
    const from_currency = $("#from_currency").val();
    const from_amount = Number($("#from_amount").val());

    const rate = currencies[from_currency];
    $('#to_amount').text(priceFormat((from_amount * rate)));
}

$("#from_currency").on('change', calculate);
$("#from_amount").on('input', calculate);

$(document).ready(function () {
    currencyList();
})