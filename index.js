
var btnEncriptar = document.getElementsByClassName("btn-encriptar");



function verificarCampoVacio(){
    let contenido= document.getElementById("texto").value;
    if(contenido == ""){
        alert("Por favor, ingresa un texto");
        return true;
    }
    return false;
    
}

function encriptarContenido(){
    var contenido = document.getElementById("texto").value;
    if(verificarCampoVacio() != true){
        var valorEncriptado = encriptar();
        document.getElementById("texto").value= "";
        estiloRespuestaContenido(valorEncriptado);
        agregarButtonCopiar();
        ocultarImagen();
    }
}
function desencriptarContenido(){
    var contenido = document.getElementById("texto").value;
    if(verificarCampoVacio() != true){
        var valorDesencriptado = desencriptar();
        document.getElementById("texto").value= "";
        estiloRespuestaContenido(valorDesencriptado);
        ocultarImagen();
    }
}

function estiloRespuestaContenido(valorEncriptado){
    var cajaResultado = document.getElementById("caja-resultado");
    var nuevoParrafo = document.createElement("p");
    var textoParrafo = document.createTextNode(valorEncriptado);
    nuevoParrafo.appendChild(textoParrafo);
    nuevoParrafo.classList.add("parrafo-resultado");
    nuevoParrafo.id = "parrafo-resultado";
    nuevoParrafo.style.fontFamily= "Inter , sans-serif";
    nuevoParrafo.style.marginTop = "32px";
    nuevoParrafo.style.marginLeft = "32px";
    nuevoParrafo.style.fontSize = "24px";
    nuevoParrafo.style.color ="#495057";
    setTimeout(function() {
        cajaResultado.classList.add("parrado-visible");
    }, 0);
    cajaResultado.appendChild(nuevoParrafo);
}

function agregarButtonCopiar (){
    var nuevoButton = document.createElement("button");
    var textoButton = document.createTextNode("Copiar");
    nuevoButton.appendChild(textoButton);
    nuevoButton.addEventListener("click",function(){
        console.log(document.getElementById("parrafo-resultado").innerText);
        var elementoTemporal = document.createElement("textarea");

        var textoParaCopiar = document.getElementById("parrafo-resultado");

        elementoTemporal.value = textoParaCopiar.textContent;

        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        document.execCommand("copy");
        document.body.removeChild(elementoTemporal);
            alert("Contenido copiado!");


        
        });

    var cajaResultado = document.getElementById("caja-resultado");
    cajaResultado.appendChild(nuevoButton);

    nuevoButton.style.width= "328px";
    nuevoButton.style.marginRight= "20px";
    nuevoButton.style.height= "67px";
    nuevoButton.style.color= "#0A3871";
    nuevoButton.style.backgroundColor= "#FFFFFF";
    nuevoButton.style.borderRadius= "24px";
    nuevoButton.style.margin = "32px 32px 32px";
    nuevoButton.style.marginTop= "680px";
    
}


function ocultarImagen(){
    var imagenResult = document.querySelector(".texto-no-encontrado");
    imagenResult.classList.add("ocultar");
}
function encriptar(){
    var contenido = document.getElementById("texto").value;
    var valorFinal ="";

    for(var i = 0 ; i<contenido.length;i++){
        if(contenido[i] == "a"){
            valorFinal = valorFinal + "ai"
        }
        else if(contenido[i] == "e"){
            valorFinal = valorFinal + "enter"
        }
        else if(contenido[i] == "i"){
            valorFinal = valorFinal + "imes"
        }
        else if(contenido[i] == "o"){
            valorFinal = valorFinal + "ober"
        }
        else if(contenido[i] == "u"){
            valorFinal = valorFinal + "ufat"
        }
        else{
            valorFinal = valorFinal + contenido[i]
        }
    }
    
    return valorFinal;
}
function desencriptar(){
    var contenido = document.getElementById("texto").value;
    var valorFinal ="";

    for(var i = 0 ; i<contenido.length;i++){
        if(contenido[i] == "a"){
            valorFinal = valorFinal + "a"
            i = i+1;
        }
        else if(contenido[i] == "e"){
            valorFinal = valorFinal + "e"
            i = i+4;
        }
        else if(contenido[i] == "i"){
            valorFinal = valorFinal + "i"
            i = i+3;
        }
        else if(contenido[i] == "o"){
            valorFinal = valorFinal + "o"
            i = i+3;
        }
        
        else if(contenido[i] == "u"){
            valorFinal = valorFinal + "u"
            i = i+3;
        }
        else{
            valorFinal = valorFinal + contenido[i];
        }
    }
    
    return valorFinal;
}
