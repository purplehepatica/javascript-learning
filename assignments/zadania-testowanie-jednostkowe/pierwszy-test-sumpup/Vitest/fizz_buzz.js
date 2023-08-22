export function fizzBuzz(num) {
    if(num % 2 === 0 && num % 3 === 0) {
        return "FizzBuzz"
    }
    else if(num % 2 === 0){
        return "Fizz"
    }
    else if(num % 3 === 0){
        return "Buzz"
    }
    else {
        return "N/A"
    }
}