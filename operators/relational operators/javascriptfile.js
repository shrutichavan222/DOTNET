function equal() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

if (a == b) {
    document.getElementById("print").innerHTML = "a is equal to b";
 } else {
    document.getElementById("print").innerHTML = "a is not equal to b";
 }
}
function notequal() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    if(a != b)
    {
        document.getElementById("print").innerHTML = "true";
    }
    else{
        document.getElementById("print").innerHTML = "false";
    }

}
function greater() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    if (a > b) {
        document.getElementById("print").innerHTML = "a is greater than b";
     } else {
        document.getElementById("print").innerHTML = "a is not greater than b";
     }

}
function less() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    if (a < b) {
        document.getElementById("print").innerHTML = "a is less than b";
     } else {
        document.getElementById("print").innerHTML = "a is not less than b";
     }

}
function greaterequal() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    if (a >= b) {
        document.getElementById("print").innerHTML = "a is greater than or equal to b";
     } else {
        document.getElementById("print").innerHTML = "a is not greater than or equal to b";
     }

}
function lessequal() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    if (a <= b) {
        document.getElementById("print").innerHTML = "a is less than or equal to b";
     } else {
        document.getElementById("print").innerHTML = "a is not less than or equal to b";
     }

}