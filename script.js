let button=document.querySelector("button");
let message=document.querySelector(".message");

button.onclick=function(){
    let time=document.querySelector("input").value;
    if (time === "morning") { console.log ("Eat breakfast"); }
    else if (time === "afternoon") { console.log("Eat lunch"); }
 else if (time === "night") {console.log("Eat dinner"); } 
    
};