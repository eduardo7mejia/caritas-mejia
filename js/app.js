const boca = document.querySelector(".boca");
const estrella = document.querySelectorAll("label");
for (var i = 0; i < estrella.length; i++) {
    estrella[i].addEventListener("click",emotion);
}
function emotion(e) {
    if(e.target.htmlFor === "estrellaUno"){
        boca.style.borderRadius = "40%";
        boca.style.borderBottom = "13px solid black";
        boca.style.width = "25px";
        boca.style.transform = "rotate(0deg)";

    } else if (e.target.htmlFor === "estrellaDos"){
        boca.style.borderRadius = "40%";
        boca.style.width = "25px";
        boca.style.borderRadius = "3px solid black"
        boca.style.transform = "rotate(0deg)";
        boca.style.marginTop = "0rem";

    } else if (e.target.htmlFor === "estrellaTres"){
        boca.style.borderRadius = "0%";
        boca.style.borderBottom = "3px solid black";
        boca.style.transform = "rotate(0deg)";
        boca.style.width = "25px";

    }
    else if (e.target.htmlFor ==="estrellaCuatro"){
        boca.style.borderRadius = "40%";
        boca.style.borderBottom = "3px solid black"
        boca.style.width = "25px";
        boca.style.transform = "rotate(180deg)";
        boca.style.marginTop = "1rem";

    }
    else if (e.target.htmlFor ==="estrellaCinco"){
        boca.style.borderRadius = "40%";
        boca.style.borderBottom = "13px solid black"
        boca.style.width = "25px";
        boca.style.transform = "rotate(-180deg)";
        boca.style.marginTop = "1rem";

    }
}