var show = false;

function showSideMenu() {
    let menu = document.querySelector(".profilemenu");
    if (show == false) {
        show = true;
        console.log(show);
        menu.style.display = "block";
    }
    else {
        show = !show;
        console.log(show);
        menu.style.display = "none";
    }

}