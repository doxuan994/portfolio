var dropdownMenu = document.getElementById("toggle-menu");
dropdownMenu.addEventListener("click", myFunction);
function myFunction() {
    var x = document.getElementsByClassName("wrapper");
    console.log(x);
    if (x[0].className.includes("active")) {
        console.log("Yes");
        x[0].className = x[0].className.replace(" active", "");
    } else {
        console.log("No");
        x[0].className = x[0].className + " active";
    }
}
