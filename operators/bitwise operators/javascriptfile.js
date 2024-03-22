function and() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

   and = a & b;

   document.getElementById("print").innerHTML = and;
}
function or(){
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

    or = a | b;

    document.getElementById("print").innerHTML = or;
}
// function xor(){
//     a = parseInt(document.getElementById("Number1").value);
//     b = parseInt(document.getElementById("Number2").value);

//     xor = a ^ b;

//     document.getElementById("print").innerHTML = xor;
// }
// function onecompliment(){
//     a = parseInt(document.getElementById("Number1").value);

//     onecompliment = ~a;

//     document.getElementById("print").innerHTML = onecompliment;
// }
// function left(){
//     a = parseInt(document.getElementById("Number1").value);

//     left = a << 2;

//     document.getElementById("print").innerHTML = left;
// }
// function right(){
//     a = parseInt(document.getElementById("Number1").value);

//     right = a >> 2;

//     document.getElementById("print").innerHTML = right;
// }