
function encriptar(){

    document.getElementById("TextoResultado").style.display = "block";
    var txtNormal = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado=txtNormal.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("Desaparece").style.display = "none";
    document.getElementById("TextoResultado").innerHTML = txtCifrado;
}

function desencriptar(){

    document.getElementById("TextoResultado").style.display = "block";
    var txtNormal = document.getElementById("mensaje").value.toLowerCase();
    var txtCifrado=txtNormal.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");
    
    
    document.getElementById("Desaparece").style.display = "none";
    document.getElementById("TextoResultado").innerHTML = txtCifrado;
}

function copy(){

    var content = document.querySelector("#TextoResultado");
    content.select();
    content.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(content.value);
    alert("El resultado ah sido copiado con exito a su clipboard")
}