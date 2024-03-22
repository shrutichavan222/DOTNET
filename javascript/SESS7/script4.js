function registerEnquiry(enquiry, showResult = null){
    //process enquiry

    //Check if the Callback function was provided and execute it once ready
    if(showResult != null){
        showResult();
    }
}

function displayUpdate(){
    document.write("Job Completed");
}

//Call while specifying a Callback function
registerEnquiry("I need some information", displayUpdate);

//Call without specifying a Callback function
registerEnquiry("I need some information");

//Call and specify a Callback function using a Anonymous function (Inline) function
registerEnquiry("I need some information",function(){
    document.write("Job Done");    
});

//Call and specify a Callback function using a Arrow function
registerEnquiry("I need some information",()=>{
    // document.write("Job Done");
    alert("Job Done");
});