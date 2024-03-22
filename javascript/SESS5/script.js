function drag(event){
    event.dataTransfer.setData("text",event.target.id); //Specify id of the tag to be drgged out
}

function drop(event){
    event.preventDefault();
    var tagId = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(tagId));
}

function allowDrop(event){
    event.preventDefault(); //Stop the default behavior
}