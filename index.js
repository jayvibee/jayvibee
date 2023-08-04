
 var icon= document.querySelector(".rad");
 var day = document.querySelector(".yo");
icon.addEventListener('click',()=>{
   day.classList.toggle('yo');
   day.classList.remove('.yo');
})


function enter(){

   var pass = document.querySelector("#password").value;
   let passcode = 8;
   var code = /^[^ ]/
   var regrex = /^[^ ]+@[^]+\.[a-z]{2,3}$//*/`[^[A-Z][a-z][0-9]+.[a-z]]{2,4}$`/*/;
   var email = document.querySelector("#email").value;
   if(pass <=passcode && pass.match(code)){
      alert("Your password must be more than 8")
   }else if(!email.match(regrex)){
      alert("Invalid Email")
   }else{
      alert("GO BOOK YOUR MODEL!");
      
   }
}
   
function sign(){
   var email = document.querySelector("#email").value;
   var regrex = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
   var pass = document.querySelector("#password").value;
   let passcode = 8;
   var code = /^[^ ]/;
   if(pass <=passcode && pass.match(code)){
      alert("Your password must be more than 8")
   }else if(!email.match(regrex)){
      alert("Invalid Email")
   }else{
      alert("GO BOOK YOUR MODEL!");

   }

}


let pop = document.getElementById("pulpy");

function openPopup(){
    pop.classList.add("open-popup");
}
function closePopup(){
    pop.classList.remove("open-popup");
}