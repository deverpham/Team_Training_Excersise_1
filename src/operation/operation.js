var libraries = document.getElementById("libraries")
var librariesBox = document.getElementById("libraries__box")
var boxMenuStyle = document.getElementsByClassName("boxMenu_newStyle")
var li = document.getElementsByClassName("class--li")
var liByTag = document.getElementsByTagName("li")
var aByTag = document.getElementsByClassName("navi__a")
var navigation = document.getElementById("navigation")
var nav_libraries = document.getElementById("library")
console.dir(nav_libraries)
libraries.addEventListener("click", function() {  
    navigation.classList.toggle("navigation__mobile")
    for(var i = 0; i < li.length; i++) {
        aByTag[i].classList.toggle("a--show")
        li[i].classList.toggle("li--show")
    }
    // if(getLi[0].style.display == 'none')
    // {
    //     navigation.classList.add = "boxMenu_newStyle "
    //     navigation.style.display = "flex"
    //     navigation.style.flexDirection = "column";
    //     navigation.style.position = "absolute"
    //     for(var i = 0 ;i < getAByTag.length; i++) {
    //         getLi[i].style.display = "flex";
    //         getAByTag[i].style.display = "flex";
    //         console.log(getAByTag[i])
    //     }
    // }
    // else {
    //     for(var i = 0 ;i < getAByTag.length; i++) {
    //         getLi[i].style.display = "none";
    //         getAByTag[i].style.display = "none";
    //         console.log(getAByTag[i])
    //     }
    // }
   
       
        // getLibrariesBox.style.marginTop = "5em"
        // getLibrariesBox.style.display = "flex"
        // getLibrariesBox.style.flexWrap = "wrap"
        // getLibrariesBox.style.position = "absolute"
        // getLibrariesBox.style.zIndex = "3"
});

nav_libraries.addEventListener("mouseover", function() {   
    librariesBox.classList.toggle("boxMenu_newStyle")
});

nav_libraries.addEventListener("mousedown", function() {   
    librariesBox.classList.toggle("boxMenu_newStyle")
});

nav_libraries.addEventListener("mouseleave", function() {
  
    librariesBox.classList.toggle("boxMenu_newStyle")
});


//input






