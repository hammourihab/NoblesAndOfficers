var navbar = document.getElementById("TopBar");
var yOffset = navbar.offsetTop;
window.onscroll = function(){scrollFunction()};

function openMenu()
{
    var obj = document.getElementById("sideMenu");
    obj.style.width = "300px";
}
function closeMenu()
{
    var obj = document.getElementById("sideMenu");
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