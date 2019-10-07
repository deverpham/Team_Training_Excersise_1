var x = document.getElementById("libraries")
var y = document.getElementById("libraries__box")
var z = document.getElementsByClassName("boxMenu_newStyle")
x.addEventListener("click", function(){
   
    if(y.style.display == 'none'){
        //y.classList.add("z")
        y.style.marginTop = "5em"
        y.style.display = "flex"
        y.style.flexWrap = "wrap"
        y.style.position = "absolute"
        y.style.zIndex = "3"
    }
    else
        y.style.display = "none"
});