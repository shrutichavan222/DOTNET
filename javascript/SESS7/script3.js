//Array with data
var services = ["Software Development", "Digital Transformation", "IT Services Management"];

//Array withot data (Empty Array)
var employees = [];

employees.push("abc");
employees.push("pqr");
employees.push("xyz");
employees.push("jkl");

var lastItem = employees.pop();

alert(lastItem);

for(var x=0;x<employees.length;x++)
{
    document.write("<p>"+employees[x]+"</p>");
