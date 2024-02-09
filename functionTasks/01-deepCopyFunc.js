function cloneObj(obj) {
    if (obj === null || typeof obj !== 'object') {
        alert("it's not an object")
    }
    if (Array.isArray(obj)) {
        return obj.map(cloneObj);
    }
    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = cloneObj(obj[key]);
        }
    }
    return clonedObj;
}

const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}

function compareObject(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        return false;
    }

    let len = null;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    } else {
        len = Object.keys(obj1).length;
    }

    let match = 0;
    Object.keys(obj1).forEach(i => {
        if (obj1[i] === obj2[i]) {
            match++;
        }
    })

    return match === len;
}


function makeFactorial(number) {
    if (number < 0) {
        console.log("Факториал отрицательного числа не определен")
        return;
    }
    if (number === 0 || number === 1) return 1;

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

function checkPalindrome (str) {
    return str === str.split('').reverse().join('');
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function foundUniqueValues(arr) {
    return Array.from(new Set(arr));
}

function formatTime(date) {
    if (!(date instanceof Date)) {
        return "Невірний формат дати";
    }

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}


