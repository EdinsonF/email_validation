//variables
let email = document.querySelector("#email");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");
let botonEnviar = document.querySelector("#enviar");
let formulario = document.querySelector("#enviar-mail");
let btnReset  = document.querySelector("#resetBtn"); 


//evenlistener

eventos();
function eventos(){
    document.addEventListener('DOMContentLoaded', inicio);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    botonEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener("click", inicio);


}



//functiones
function inicio(){
    botonEnviar.disabled = true;
    formulario.reset();
}
function validarCampo(){

    validarLongitud(this);

    if(this.type === 'email'){
        validarEmail(this);
    }
    //validamos los campos vacion para activar el boton
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0 ){
            botonEnviar.disabled = false;
        }

    }
}


function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor ='red';
        campo.classList.add('error');
    }
}


function validarEmail(campo){
    let emailText = campo.value;
    if(emailText.indexOf('@') !== -1){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor ='red';
        campo.classList.add('error');
    }
}


function enviarEmail(e){
    e.preventDefault();
    //espinner de carga
    let spinnerGif = document.querySelector("#spinner");
    spinnerGif.style.display = 'block';

    //spinner de enviado
    let spinnerEviar = document.createElement('img');
    spinnerEviar.src = 'img/mail.gif';

    //luego de 3 segundos ocultamos el spinner de carga
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        //agregamos spinner enbiado
        document.querySelector("#loaders").appendChild(spinnerEviar);
        //ocultamos spinner enviado
        setTimeout(function(){
                spinnerEviar.style.display = 'none';

                inicio();
        },4000);
    },3000);
    
    
    
    console.log("enviando...");
}


function resetearFormulario(){
    
}














