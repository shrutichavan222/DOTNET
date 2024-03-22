function saveData(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    // localStorage.setItem("name",name);
    // localStorage.setItem("age",age);

    localStorage.name = name;
    localStorage.age = age;

    document.getElementById("link").style.visibility = "visible";
}

function showData(){
    var name = localStorage.name;
    var age = localStorage.age;

    document.getElementById("namePara").innerHTML = name;
    document.getElementById("agePara").innerHTML = age;
}