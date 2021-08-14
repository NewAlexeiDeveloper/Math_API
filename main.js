// provide 2 numbers and receive a random number between them (a must be smaller than b)
function random_between_two_numbers(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error("You must provide numbers")
    } else if (a >= b) {
        throw new Error("Number b must be greater than a")
    } else {
        const difference = Math.floor(Math.random() * (b - a) + 1)
        return a + difference
    }
}


// provide a length of an array and receive a number of all posible permutations
function all_possible_permutations(number) {
    if (!Number.isInteger(number)) {
        throw new Error('A number must be provided')
    } else if (number < 3) {
        throw new Error('Number must be at least 3')
    } else if (!Number.isSafeInteger(number)) {
        throw new Error('Too big number')
    } else {
        const array_with_numbers = []
        for (let i = 1; i <= number; i++) {
            array_with_numbers.push(i)
        }
        return array_with_numbers.reduce((a, b) => a * b)
    }
}

// provide a length of an array and a number that specifies the length of possible permutations (not unique). For example, if you have an array with length 5 and want to find out all posible combinations of length 2 write "all_possible_permutations_of_specific_length(5,2)"
function all_possible_permutations_of_specific_length(length, number) {
    if (!Number.isInteger(length) || !Number.isInteger(number)) {
        throw new Error('Numbers must be provided')
    } else if (number >= length) {
        throw new Error('The second argument must be smaller than the first argument')
    } else {
        return length ** number
    }
}

// quite the same as above written but having similar values (1,2) and (2,1) for example. The difference is that (2,2) and (1,1) are excluded 
function all_possible_permutations_of_specific_length_with_repeating_values(length, number) {
    if (!Number.isInteger(length) || !Number.isInteger(number)) {
        throw new Error('Numbers must be provided')
    } else if (number >= length) {
        throw new Error('The second argument must be smaller than the first argument')
    } else {
        // numberator
        const array_with_numbers = []
        for (let i = 1; i <= length; i++) {
            array_with_numbers.push(i)
        }
        const numerator = array_with_numbers.reduce((a, b) => a * b)
        // denominator
        const array_with_numbers_denominator = []
        const difference = length - number
        for (let i = 1; i <= difference; i++) {
            array_with_numbers_denominator.push(i)
        }
        const denominator = array_with_numbers_denominator.reduce((a, b) => a * b)
        // final result
        return numerator / denominator
    }
}

function all_possible_permutations_of_specific_length_unique_only(length, number) {
    if (!Number.isInteger(length) || !Number.isInteger(number)) {
        throw new Error('Numbers must be provided')
    } else if (number > length) {
        throw new Error('The second argument must be smaller or equalt to the first argument')
    } else if (number == length || number == 0) {
        return 1
    } else {
        // numberator
        const array_with_numbers = []
        for (let i = 1; i <= length; i++) {
            array_with_numbers.push(i)
        }
        const numerator = array_with_numbers.reduce((a, b) => a * b)
        // denominator
        const array_with_numbers_denominator_1 = []
        const array_with_numbers_denominator_2 = []
        const difference = length - number
        for (let i = 1; i <= difference; i++) {
            array_with_numbers_denominator_1.push(i)
        }
        for (let i = 1; i <= number; i++) {
            array_with_numbers_denominator_2.push(i)
        }
        const denominator = (array_with_numbers_denominator_1.reduce((a, b) => a * b)) * (array_with_numbers_denominator_2.reduce((a, b) => a * b))
        // final result
        return numerator / denominator
    }
}


function binom_of_Newton(a, b, power) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(power)) {
        throw new Error('Numbers must be provided')
    } else if (a < 0 || b < 0 || power < 0) {
        throw new Error('Numbers must be higher than 0')
    } else {
        let finalArray = []
        for (let i = 0; i <= power; i++) {
            const NetwonSymbol = all_possible_permutations_of_specific_length_unique_only(power, i)
            const operation_with_a = a ** (power - i)
            const operation_with_b = b ** i
            const result = NetwonSymbol * operation_with_a * operation_with_b
            finalArray.push(result)
        }
        return finalArray.reduce((a, b) => a + b)
    }
}