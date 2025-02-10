function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function avgsqrt(num1, num2, num3) {
    let avg = average(num1, num2, num3);
    return Math.sqrt(avg);
}

const obj = {
    average: average,
    avgsqrt: avgsqrt
};

module.exports = {
    average: average,
    avgsqrt: avgsqrt
};
