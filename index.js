//1
function getSumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//2
function getNumberArrayDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

//3
function getStringArraySymbol(str) {
    let symbol = [];
    for (let i = 0; i < str.length; i++) {
        symbol.push(str[i]);
    }
    return symbol;
}

//4
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//5
function getStringFirstCapitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//6
function getStringCapitalletterWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let CapitalletterWords = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = CapitalletterWords;
    }
    return words.join(" ");
  }

//7
function fillArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

//8
function getSumDigits(numberr) {
    let summ = 0;
    let digits = numberr.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        summ += parseInt(digits[i]);
    }
    return summ;
}


//9
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

//10
function secondsDays(seconds) {
    const secondsInDay = 86400;
    const days = Math.floor(seconds / secondsInDay);
    return days;
}

//11
function getRandomElement(arrayy) {
    const randomIndex = Math.floor(Math.random() * arrayy.length);
    return arrayy[randomIndex];
}

//12
function isPrime(numberrr) {
    if (numberrr <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numberrr); i++) {
        if (numberrr % i === 0) {
        return false;
        }
    }
    return true;
}