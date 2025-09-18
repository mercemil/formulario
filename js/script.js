window.onload=function (){
    const registro = document.querySelector("#btnRegistro");
    registro .addEventListener ("click", validarRegistro);
};



function validarRegistro (event) {
    event.preventDefault();

    const txtnombre=document.querySelector("#nombre");
    const nombre=txtnombre.value;

    const txtedad=document.querySelector("#edad");
    const edad=txtedad.value;

    const mensajeDiv = document.querySelector('#mensaje');

    if (edad >= 18) {
        mensajeDiv.textContent = "¡Bienvenidx " + nombre + " tienes acceso al evento!";
        mensajeDiv.classList.add("confirmado");
        mensajeDiv.classList.remove("no_confirmado");
    } else {
        mensajeDiv.textContent = "Lo sentimos " + nombre + " ,debes ser mayor de edad.";
        mensajeDiv.classList.add("no_confirmado");
        mensajeDiv.classList.remove("confirmado");
    }
}


