const navLinks = document.getElementById("navLinks")

    function showMenu(){
        navLinks.style.right = "0";
    } 
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
    // When we click on close icon, it'll add the right value -200
    //When we click on the menu icon it'll add the right value 0, so it'll be visiable 