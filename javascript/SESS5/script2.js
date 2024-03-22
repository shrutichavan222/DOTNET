if(typeof(navigator.geolocation)==undefined){
    alert("Geo location is not supported");
}
else{
    alert("Geo location is not supported");
    navigator.geolocation.getCurrentPosition(showDetails);//Get the Geo location details
}
function showDetails(position){
    //show the Geo location details

    display("latitude","Latitude is  : " +position.coords.latitude);
    display("longitude","Longitude is  : " +position.coords.longitude);
}
function display(item,value){
    document.getElementById(item).innerHTML = value;
}