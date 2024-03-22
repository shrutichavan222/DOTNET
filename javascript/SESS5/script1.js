var worker1 = undefined;

if(typeof(Worker) == undefined)
{
    alert("Web Worker is not supported");
}
else
{
    alert("Web Worker is supported");
    worker1 = new Worker("worker1.js"); //Create a Web Worker to run the specified file

    worker1.onmessage = function(event){
        document.getElementById("message").innerHTML = event.data; //Show the data sent by the Web Worker
    }
}