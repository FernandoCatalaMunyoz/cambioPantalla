let secciones = document.getElementsByClassName("main");
let arraySecciones = Array.from(secciones);

let seccionActual = arraySecciones[0];
let indice = arraySecciones.indexOf(seccionActual);

let cambioSeccion = document.getElementById("cambio");

cambioSeccion.addEventListener("click", (e) => {
  seccionActual.classList.remove("visible");

  if (indice != 4) {
    indice++;
    seccionActual = arraySecciones[indice];
  } else if ((indice = 4)) {
    indice = 0;
  }

  seccionActual.classList.add("visible");
});
