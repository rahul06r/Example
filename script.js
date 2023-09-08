var tabContents = document.getElementsByClassName("tab-content");
var tabLinks = document.getElementsByClassName("tab-links");


function openTab(tab) {
    Array.from(tabLinks).forEach(function (tablink) {
        tablink.classList.remove("active-link");
    });
    Array.from(tabContents).forEach(function (tabContent) {
        tabContent.classList.remove("active-tab");
    });


    event.currentTarget.classList.add("active-link")

    document.getElementById(tab).classList.add("active-tab")


    
   
}
var sideMenu = document.getElementById("sideMenu")

   
function closeMenu() {
    sideMenu.style.right = "-200px";

}

function openMenu() {
    var sideMenu = document.getElementById("sideMenu"); // Replace with the actual ID of your side menu element
    sideMenu.style.right = "0px";
}