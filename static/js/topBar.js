window.onscroll = function(){scrollFunction()};


var obj = document.getElementById("sideMenu");
var navbar = document.getElementById("TopBar");
var yOffset = navbar.offsetTop;




function openMenu()
{
    obj.style.width = "300px";

}
function closeMenu()
{
    obj.style.width = "0px";
}


function scrollFunction()
{
    if(window.pageYOffset >= yOffset)
    {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}