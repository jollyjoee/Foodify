var show = false;
const menu = document.querySelector(".profilemenu");
const footer = document.querySelector(".footer");

function showSideMenu() {
    if (show == false) {
        show = true;
        console.log(show);
        menu.style.display = "block";
        footer.style.borderTopRightRadius = "0px";
    }
    else {
        show = !show;
        console.log(show);
        menu.style.display = "none";
        footer.style.borderTopRightRadius = "15px";
    }

}

document.querySelector('body').addEventListener('click', function(){
    show = !show;
    menu.style.display = "none";
    footer.style.borderTopRightRadius = "15px";
  });
  
  const insideDiv = document.querySelectorAll('.profilemenu, .footer');
  
  insideDiv.forEach(function(inside) {
    inside.addEventListener('click', function(e){
        e.stopPropagation()
      });
  })