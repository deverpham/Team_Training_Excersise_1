
// function about nav
function navigationText() {
    var libraries = document.getElementById("libraries")
    var librariesBox = document.getElementById("libraries__box")
    var li = document.getElementsByClassName("class--li")
    var aByTag = document.getElementsByClassName("navi__a")
    var navigation = document.getElementById("navigation")
    var nav_libraries = document.getElementById("library")
    libraries.addEventListener("click", function() {  
        navigation.classList.toggle("navigation__mobile")
        for(var i = 0; i < li.length; i++) {
            aByTag[i].classList.toggle("a--show")
            li[i].classList.toggle("li--show")
        }
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
}

//function about email input
var messageButton = document.getElementById("mess__btn")
function emailWarning() {
    var email = document.getElementsByClassName("email")
    var warn__text = document.getElementById("warn__Etext")
    var str = "The email must be a email and the input cannot be empty"
    for(var i = 0; i<email.length; i++){
        email[i].addEventListener("blur", function(){
            if(this.value.indexOf("@email")!=-1 || 
            this.value.indexOf("@gmail")!=-1
            || this.value.indexOf("@yahoo")!=-1) {
                this.style.borderColor = "white"
                warn__text.innerHTML = ""
               
            }
            else {
                this.style.borderColor = "red"
                warn__text.innerHTML = str
                messageButton.disabled = true;    
            }
        })
    }
}
   

//function about text input
function textWarning() {
    var warn__Stext = document.getElementById("warn__Stext")
    var textBox = document.getElementsByTagName("input")
    var str = "The input cannot be empty"
    for(var i = 1; i<textBox.length; i++) {
            textBox[i].addEventListener("blur", function () {
                if(this.value == ""){ 
                    this.style.borderColor = "red"
                    warn__Stext.innerHTML = str
                    messageButton.disabled = true;   
                    messageButton.style.background = "bisque"
                }
                else {
                    this.style.borderColor = "white"
                    warn__Stext.innerHTML = ""
                    messageButton.disabled = false
                    messageButton.style.background = "blue"
                }
            }
        )}

       
    
    
}

navigationText();
emailWarning();
textWarning();

//     var i = 0
//      while(i < textBox.length) {
//     //  textBox[i].style.borderColor = "red" 
//     textBox[i].addEventListener("blur", function() {
//         if(textBox[i].value == ""){
//             textBox[i].style.borderColor = "red"
//         }
//         else {
//             textBox[i].style.borderColor = "white"
//         }
//     })
//     i++;
// }

   






