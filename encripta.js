function convierte(letra){
    if(letra == 'a'){
        return 'ai';
    }
    if(letra == 'e'){
        return 'enter';
    }
    if(letra == 'i'){
        return 'imes';
    }
    if(letra == 'o'){
        return 'ober';
    }
    if(letra == 'u'){
        return 'ufat';
    }
    else{
        return letra;
    }
}

function ArraytoString(arreglo){
    s = '';
    for(var i = 0; i<arreglo.length;i++){
        s = s + arreglo[i];
    }
    return s;
}

function rechazar(dato){
    var numUpper = dato.length - dato.replace(/[A-Z]/g, '').length;
    var numaccent = dato.length - dato.replace(/[áéíóúÁÉÍÓÚ]/g, '').length;
    if(numUpper>0||numaccent>0){
        return true;
    }
    else{
        return false;
    }
}

function encriptar(){
    let dato = document.getElementById("campo1").value;
    let arr = Object.assign([], dato);
    let encriptado = [];
    if(rechazar(dato)){
        alert("Digite en minúsulas y/o sin acentos");
    }
    else{
        for(var i=0;i<arr.length;i++){
            encriptado.push(convierte(arr[i]));
        }
        document.getElementById("resultado").innerHTML = ArraytoString(encriptado);
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("campo1").value = "";
    }
}

function existe(palabra, arreglo){
    if(arreglo.indexOf(palabra)>=0){
        return true;
    }
    else{
        return false;
    }
}

function desencriptar(){
    let dato = document.getElementById("campo1").value;
    let encriptada = ["ai", "enter", "imes", "ober", "ufat"];
    let desencriptada = ["a","e","i","o","u"];
    if(rechazar(dato)){
        alert("Digite en minúsulas y/o sin acentos");
    }
    else{
        for(var i =0 ; i<5;i++){
            dato = dato.split(encriptada[i]).join(desencriptada[i]);
        }
        document.getElementById("resultado").innerHTML = dato;
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("campo1").value = "";
    }
}

function copyToClipBoard(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }