let expandleft = document.querySelector(".expandleft");
let leftsection = document.querySelector(".leftsection");
let rightsection = document.querySelector(".rightsection");
let closebtn=document.querySelector(".closebtn");
expandleft.addEventListener("click", show);
closebtn.addEventListener("click", hide);


function show(){

leftsection.style.display="flex"
leftsection.style.width="100%"
leftsection.style.height="100%"
closebtn.style.display="flex"
}
function hide(){
leftsection.style.display="none"

}