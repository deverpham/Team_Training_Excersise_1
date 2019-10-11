var getLibraries = document.getElementById("libraries")
var getLibrariesBox = document.getElementById("libraries__box")
var getBoxMenuStyle = document.getElementsByClassName("boxMenu_newStyle")
x.addEventListener("click", function(){
   
    if(getLibrariesBox.style.display == 'none'){
        //y.classList.add("z")
        getLibrariesBox.style.marginTop = "5em"
        getLibrariesBox.style.display = "flex"
        getLibrariesBox.style.flexWrap = "wrap"
        getLibrariesBox.style.position = "absolute"
        getLibrariesBox.style.zIndex = "3"
    }
    else
        getLibrariesBox.style.display = "none"
});