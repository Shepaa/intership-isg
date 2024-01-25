{
    let admin, name;

    name = "John"

    admin = name;

    alert(admin)
}
// Task2

{
    let currentPlanet = "earth"
    let currentUserName = "Vanek"
}

// Task 3
{
    let name = "Ilya";

// the expression is a number 1
    alert(`hello ${1}`); // hello 1

// the expression is a string "name"
    alert(`hello ${"name"}`); // hello name

// the expression is a variable, embed it
    alert(`hello ${name}`); // hello Ilya
}

// Task 4
{
    let getName = prompt("Put your name here pls")
    alert(getName)
}

// Task 5
{
    let a = 1, b = 1;

    let c = ++a; //2
    let d = b++; //1


// "" + 1 + 0
// Result: "10"

// "" - 1 + 0
// Result: -1

// true + false
// Result: 1

// 6 / "3"
// Result: 2

// "2" * "3"
// Result: 6

// 4 + 5 + "px"
// Result: "9px"

// "$" + 4 + 5
// Result: "$45"

// "4" - 2
// Result: 2

// "4px" - 2
// Result: NaN

// "  -9  " + 5
// Result: "  -9  5"

// "  -9  " - 5
// Result: -14

// null + 1
// Result: 1

// undefined + 1
// Result: NaN

// " \t \n" - 2
// Result: -2

}

// Task 6
{
    5 > 4 // true
    "apple" > "pineapple" //// false
    "2" > "12" // true
    undefined == null// true
    undefined === null // false
    null == "\n0\n" // false
    null === +"\n0\n" // false
}

// Task 7
{
    const officialNameOfJS = prompt("What's the “official” name of JavaScript?")
    if (officialNameOfJS === 'ECMAScript') {
        console.log("right")
    } else {
        console.log("Nope dude=(")
    }

    const number = prompt("Write an number")

    if (number > 1) {
        alert(1)
    } else if (number < 0) {
        alert(-1)
    } else alert(0)

    let result = a + b < 4 ? 'Below' : 'Over';
    const message = login === 'Employee' ? 'Hello' : login === 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
}

// Task 8
{
    alert(null || 2 || undefined); //2
    alert(alert(1) || 2 || alert(3)); // 1 2
    alert(alert(1) && alert(2)); // 1 undefined
    alert(null || 2 && 3 || 4);//3
}
// Task 9


{
    while (3) {
        alert(i--);
    } // stops the loop when i = 0


    // The prefix form ++i:
    let first = 0;
    while (++first < 5) alert(first); // from 1 to 4

    // The postfix form i++
    let second = 0;
    while (second++ < 5) alert(second) // from 1 to 5


    // The postfix form:
    for (let i = 0; i < 5; i++) alert(i);

    // The prefix form:
    for (let i = 0; i < 5; ++i) alert(i);

    // from 4 to 0 in both

    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }

    let num;

    do {num = prompt("Enter a number bigger than 100?")} while (num <= 100 && num);

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    let n = 10;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


// Task 10
{
    if (browser === 'Edge') {
        alert("You've got the Edge!");
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Okay we support these browsers too');
    } else alert('We hope that this page looks ok!');


    switch (+prompt('a?', '')) {
        case 0:
            alert(0);
            break;

        case 1:
            alert(1);
            break;

        case 2:
        case 3:
            alert('2,3');
            break;
    }

}

// Task 11
{
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        return confirm('Did parents allow you?');
        // and with else will be work the same, so no difference
    }

    function checkAges(age) {
        return (age > 18) ? true : confirm('Did parents allow you?');
    }

    function minMax(a, b) {
        return a < b ? a : b;
    }

    function pow(x, n) {
        let result = x;

        for (let i = 1; i < n; i++) {
            result *= x;
        }

        return result;
    }

    let x = prompt("x?", '');
    let n = prompt("n?", '');

    if (n < 1) {
        alert(`Power ${n} is not supported, use a positive integer`);
    } else alert(pow(x, n));
}