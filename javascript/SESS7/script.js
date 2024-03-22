Prototype
function Car(model,color, length, engine){
    this.model = model;
    this.color = color;
    this.length = length;
    this.engine = engine;
}

Car.prototype.start = function(){
    //car started
}

Car.prototype.stop = function(){
    //car stopped
}

//Object as per Prototype
var marutiAlto = new Car("Maruti Alto","gray","3.6m","800cc");
marutiAlto.start();
marutiAlto.stop();

//Object as per Prototype
var skodaOctavia = new Car("Skoda Octavia","blue","4.6m","1800cc");
skodaOctavia.start();
skodaOctavia.stop();

//Object as per Prototype
var skodaKodiaq = new Car("Skoda Kodiaq","green","4.7m","2000cc");
skodaKodiaq.start();
skodaKodiaq.stop();

var userDefinedCar = undefined;

function getInput(){
    var model,color, legnth, engine;
    model = document.getElementById("model").value;
    color = document.getElementById("color").value;
    length = document.getElementById("length").value;
    engine = document.getElementById("engine").value;

    userDefinedCar = new Car(model,color, length, engine);

    showData(userDefinedCar);
}

function showData(carObj){
    var cars = document.getElementById("cars");
    var carDataText = "Model : " + carObj.model + ", Color : " + carObj.color + " , Length : " 
                       + carObj.length + " , Engine : " + carObj.engine; 

    var newCar = document.createElement("p");
    var carData = document.createTextNode(carDataText);
    newCar.appendChild(carData);
    cars.appendChild(newCar);    
}

function loadData(){
    showData(marutiAlto);
    showData(skodaOctavia);
    showData(skodaKodiaq);
}