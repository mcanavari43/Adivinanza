// cargo en un arreglo las imagenes de las abnderas. Sera el orden como se muestren;

let banderas = ["pa.svg", "bo.svg", "ad.svg","gb.svg", "na.svg"]

// arreglo que va a guardar la opciones correctas;
 
let correcta = [2,2,1,2,0];

//arreglo que guardara loas paises a mostrar en cada jugada
let opciones = [];

//cargo en el arreglo opciones a mostrar en cada jugada
opciones.push(["SUDAFRICA","SINGAPUR","PANAMA"]);
opciones.push(["PERU","ITALIA","BOLIVIA"]);
opciones.push(["TUNEZ","ANDORRA","ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA","REINO UNIDO","MADAGASCAR"]);
opciones.push(["NAMIBIA","OMAN","ETIOPIA"]);

//variable que guarda la posicon actual
let posActual = 0;

//variable que guarda cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none"
    document.getElementById("titulo").style.display = "none"
    document.getElementById("pantalla-juego").style.display = "block"
    cargarBandera();
}

// funcion que carga la sig bandera y sus opciones
function cargarBandera(){
    //controlo si se terminaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else { // cargo las opciones
        limpiarOpciones();
        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"

    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        //agregamos op elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada"
        document.getElementById("l" + opElegida).className = "letra letraAcertada"
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada"
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada"

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada"
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada"
    }
    posActual++;
    //espereamos 1 seg y pasamos a mostrar la siguiente bandera con sus opcones
    setTimeout(cargarBandera, 1000)
}

function terminarJuego(){
    //ocultamos pantallas anterior y ativamos la del final
    document.getElementById("pantalla-juego").style.display = "none"
    document.getElementById("pantalla-final").style.display = "block"
    //agregamos los resultados

    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverInicio(){
    document.getElementById("pantalla-inicial").style.display = "block"
    document.getElementById("pantalla-juego").style.display = "none"
    document.getElementById("pantalla-final").style.display = "none"
}
