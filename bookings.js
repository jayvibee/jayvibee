function h4(){
    console.log("selected")
var h4 = document.querySelectorAll("h4");
        h4.style.display.color="red";

}
var fname = document.querySelector('#name');
var email = document.querySelector('#email');
var form = document.querySelector('#form_reg');
var regrex = /`[^[^a-z].+[^a-z][0-9]@[a-z]+.[a-z]{2,3}]`/;
function validate(){
    if(document.form_reg.fname.value==""){
        alert("pp");
        document.form_reg.fname.focus();
        return false;
    }else{

    }
  /* form.addEventListener('submit',()=>{
      if(fname===""||fname==null){
         alert("Fill your name");
         console.log("input");
         form.focus();
         return false;
         
      }
      else{
         alert("done")
      }
      if(email=!match(regrex)){
         alert("fill an email");
      }
   })
   */
}
