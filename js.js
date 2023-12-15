var show = false;
const menu = document.querySelector(".profilemenu");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");
const header = document.querySelector(".header")
const headerAnimationOpen = [
    { transform: "translate(0px)" },
    { transform: "translate(-27vw)" }
];
const headerAnimationClose = [
    { transform: "translate(-27vw)" },
    { transform: "translate(0px)" }
];
const headerTiming = {
    duration: 340,
    iterations: 1,
    fill: 'forwards'
};


function showSideMenu() {
    if (show == false) {
        show = true;
        console.log(show);
        menu.style.animationName = "menutransitionopen";
        menu.style.display = "block";
        footer.style.borderTopRightRadius = "0px";
        body.style.overflow = "hidden";
        header.animate(headerAnimationOpen, headerTiming)
    }
    else {
        show = !show;
        console.log(show);
        menu.style.animationName = "menutransitionclose";
        footer.style.borderTopRightRadius = "15px";
        header.animate(headerAnimationClose, headerTiming)
        setTimeout(function(){
            menu.style.display = "none";
            body.style.overflow = "auto";
        }, 400);
    }

}

document.querySelector('body').addEventListener('click', function(){
    show = !show;
    menu.style.display = "none";
    footer.style.borderTopRightRadius = "15px";
    body.style.overflow = "auto";
  });
  
  const insideDiv = document.querySelectorAll('.profilemenu, .footer');
  insideDiv.forEach(function(inside) {
    inside.addEventListener('click', function(e){
        e.stopPropagation()
      });
  })