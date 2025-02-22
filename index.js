let expandleft = document.querySelector(".expandleft");
let leftsection = document.querySelector(".leftsection");
let rightsection = document.querySelector(".rightsection");

expandleft.addEventListener("click", showleftsection);

function showleftsection() {
    let leftDisplay = window.getComputedStyle(leftsection).display;

    if (leftDisplay === "none") {
        leftsection.style.display = "block";
        leftsection.style.width = "100%";
        rightsection.style.display = "none";


        // Ensure the expand button stays on top
        expandleft.style.position = "relative";  // Ensure position is set
        expandleft.style.zIndex = "1";
    } else {
        leftsection.style.display = "none";
        rightsection.style.display = "block";

        expandleft.style.position = "relative";  // Ensure position is set
        expandleft.style.zIndex = "111111";
    }
}
