var show = false;
var isAnimating = false;
const menu = document.querySelector(".profilemenu");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header")
const headerAnimationOpen = [
    { transform: "translate(0px)" },
    { transform: "translate(-35vw)" },
    { transform: "translate(-27vw)" },
    { transform: "translate(-33vw)" },
    { transform: "translate(-27vw)" },
    { transform: "translate(-30vw)" },
    { transform: "translate(-27vw)" }
];
const headerAnimationClose = [
    { transform: "translate(-27vw)" },
    { transform: "translate(8vw)" },
    { transform: "translate(0vw)" },
    { transform: "translate(6vw)" },
    { transform: "translate(0vw)" },
    { transform: "translate(3vw)" },
    { transform: "translate(0vw)" },
];
const headerTiming = {
    duration: 640,
    iterations: 1,
    fill: 'forwards'
};


function showSideMenu() {
    if (isAnimating) {
        return;
    }
    isAnimating = true;
    if (show == false) {
        show = true;
        //console.log(show);
        menu.style.animationName = "menutransitionopen";
        menu.style.display = "block";
        footer.style.borderTopRightRadius = "0px";
        header.animate(headerAnimationOpen, headerTiming)
    }
    else {
        show = !show;
        menu.style.animationName = "menutransitionclose";
        footer.style.borderTopRightRadius = "15px";
        header.animate(headerAnimationClose, headerTiming)
        setTimeout(function(){
            menu.style.display = "none";
        }, 300);
    }
    setTimeout(function() {
        isAnimating = false;
    }, 500)
}
document.querySelector('body').addEventListener('click', function(){
    if (menu.style.display === "block") {
        showSideMenu()
    }});
      
const insideDiv = document.querySelectorAll('.profilemenu, .footer');
  insideDiv.forEach(function(inside) {
     inside.addEventListener('click', function(e){
         e.stopPropagation()
       });
   })
