var getLibraries = document.getElementById("libraries")
var getLibrariesBox = document.getElementById("libraries__box")
var getBoxMenuStyle = document.getElementsByClassName("boxMenu_newStyle")
var getNavigation = document.getElementById("navigation")
var getLi = document.getElementById("id--li")
var getLiByTag = document.getElementsByTagName("li")
var getAByTag = document.getElementsByClassName("a")

getLibraries.addEventListener("click", function(){

    getLi.style.display = "flex"
    
    for(var i = 0 ;i < getAByTag.length; i++) {
        getAByTag[i].style.display = "flex";
        console.log(getAByTag[i])
    }
   
   
    // if(getLibrariesBox.style.display == 'none'){
    //     //y.classList.add("z")
    //     getLibrariesBox.style.marginTop = "5em"
    //     getLibrariesBox.style.display = "flex"
    //     getLibrariesBox.style.flexWrap = "wrap"
    //     getLibrariesBox.style.position = "absolute"
    //     getLibrariesBox.style.zIndex = "3"
    // }
    // else
    //     getLibrariesBox.style.display = "none"
});




