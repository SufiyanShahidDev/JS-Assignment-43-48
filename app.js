
// Answer1

function power(base, exponent) {
    var result = 1;

    for (var i = 1; i <= exponent; i++) {
        result = result * base;
    }

    return result;
}
