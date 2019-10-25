
function emptyInput() {
  var str = "This input not empty";
    var str1 = "This input must be email";
    var str2 = "This input length must be greater than 6 characters ";   
    var input1 = document.getElementById("txt_email");
    var nhap1 = txt_email.value;   
    var input2 = document.getElementById("txt_question");
    var nhap2 = txt_question.value;   
    var input3 = document.getElementById("txt_message");
    var nhap3 = txt_message.value;
    if (nhap1 == "" && nhap2 == "" && nhap3 == "") {
        document.getElementById("email").innerHTML = str;
        document.getElementById("email").style.color = 'red';
        txt_email.style.borderColor='red';
        document.getElementById("question").innerHTML = str;
        document.getElementById("question").style.color = 'red';
        txt_question.style.borderColor='red';
        document.getElementById("message").innerHTML = str;
        document.getElementById("message").style.color = 'red';
        txt_message.style.borderColor='red';
    }
    else {
        document.getElementById("email").innerHTML = ""
        document.getElementById("question").innerHTML = ""
        document.getElementById("message").innerHTML = ""
    }
    
    
    if (nhap1 != "@gmail.com") {
        document.getElementById("email").innerHTML = str1;
        document.getElementById("email").style.color = 'red';
        txt_email.style.borderColor='red';
    }
    else {
        document.getElementById("email").innerHTML = "";
    }
    
    
    if(nhap2.length < 6 ){
        document.getElementById("question").innerHTML = str2;
        document.getElementById("question").style.color = 'red';
        txt_question.style.borderColor='red';
    }
    else{
        document.getElementById("question").innerHTML = "";
    }
    

}