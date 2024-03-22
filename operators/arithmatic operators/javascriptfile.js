function add() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

   add = a + b;

   document.getElementById("print").innerHTML = add;
}
function sub() {
    a = parseInt(document.getElementById("Number1").value);
    b = parseInt(document.getElementById("Number2").value);

   sub = a - b;

   document.getElementById("print").innerHTML = sub;
}
function mult() {
   a = parseInt(document.getElementById("Number1").value);
   b = parseInt(document.getElementById("Number2").value);

  mult = a * b;

  document.getElementById("print").innerHTML = mult;
}
function divide() {
   a = parseInt(document.getElementById("Number1").value);
   b = parseInt(document.getElementById("Number2").value);

  divide = a / b;

  document.getElementById("print").innerHTML = divide;
}
function mod() {
   a = parseInt(document.getElementById("Number1").value);
   b = parseInt(document.getElementById("Number2").value);

   mod = a % b;

  document.getElementById("print").innerHTML = mod;
}
function Increment(){
   a = parseInt(document.getElementById("Number1").value);

   Increment = ++ a;

   document.getElementById("print").innerHTML = Increment;
}
function Decrement(){
   a = parseInt(document.getElementById("Number1").value);

   Decrement = -- a;

   document.getElementById("print").innerHTML = Decrement;
}