function isMultipleOf3Or7(number) {
    if (number <= 0) {
        return "Please enter a positive number.";
    }

    if (number % 3 === 0 || number % 7 === 0) {
        return `${number} is a multiple of 3 or 7.`;
    } else {
        return `${number} is not a multiple of 3 or 7.`;
    }
}



console.log(isMultipleOf3Or7(21));


console.log(isMultipleOf3Or7(50));


console.log(isMultipleOf3Or7(14));


console.log(isMultipleOf3Or7(15));