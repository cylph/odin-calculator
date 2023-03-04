function add(a,b) {
    a = a * 1
    b = b * 1
    return a + b
}

function subtract(a,b) {
    a = a * 1
    b = b * 1
    return a - b
}

function multiply(a,b) {
    a = a * 1
    b = b * 1
    return a * b
}

function divide(a,b) {
    a = a * 1
    b = b * 1
    console.log(a,b)
    if (a === 0 || b === 0) {
        document.getElementById("screen").innerHTML = "ERROR"
    }else {
        console.log("wrong")
        return Math.round((a / b)*1000)/1000
    }
}

// console.log(add(1,3))

function operate(a,operator,b) {
    //console.log(a+b)
    if (operator === "+") {
        return add(a,b);
    }else if (operator === "-") {
        return subtract(a,b);
    }else if (operator === "*") {
        return multiply(a,b);
    }else if (operator === "÷") {
        return divide(a,b);
    }

}

function change_text(num) {
    if (document.getElementById("screen").innerHTML.includes(".") && num === ".") {
        document.getElementById("decimal").disabled = true;
    }
    document.getElementById("screen").innerHTML = "" + document.getElementById("screen").innerHTML + num;
}

function clear_screen() {
    document.getElementById("screen").innerHTML = "";
}

function all_operator(operator) {
    myArray = document.getElementById("screen").innerHTML.split(" ")
    console.log(myArray)
    if (myArray.length === 3) {
        document.getElementById("screen").innerHTML = operate(myArray[0],myArray[1],myArray[2])
    }
    document.getElementById("screen").innerHTML = "" + document.getElementById("screen").innerHTML + " " + operator + " ";
}

function enter() {
    myArray = document.getElementById("screen").innerHTML.split(" ")
    console.log(myArray)
    if (myArray.length === 3) {
        document.getElementById("screen").innerHTML = operate(myArray[0],myArray[1],myArray[2])
    }
}