function animalCalculator(depth) {
    var animal = 0;

    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secoundPart = remaining * 100;
        animal = firstPart + secoundPart;
    } else {
        var firstPart = 10 * 50;
        var secoundPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 100;
        animal = firstPart + secoundPart + thirdPart;
    }
    return animal;
}

result_count = animalCalculator(20);
console.log(result_count);