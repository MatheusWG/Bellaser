'use strict';
var login = document.getElementById("login");
var senha = document.getElementById("senha");  

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function fazerLogin(){
    if(login.value == "matheus" && senha.value == "matheus"){
      document.cookie = "user=true";
        window.location.href = "../index.html";
    }else{
        alert("Usuário ou Senha Inválida");
    }
}

function logout(){
document.cookie = "user=false";
verificarLogin();
}

function verificarLogin(){
var userLogin = getCookie("user");
    if(userLogin == "false") {
    window.location.href = "../login.html";
    }
}

function cadastro(){
    window.location.href="../cliente.html";
}

