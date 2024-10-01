/* eslint-disable */
import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  // array con las palabras
  let inicio = "un ";
  let adjetivos = [
    "bicéfalo ",
    "radiactivo ",
    "enojado ",
    "solitario ",
    "loco ",
    "brillante ",
    "apestoso ",
    "lento ",
    "viejo "
  ];
  let sustantivos = [
    "corredor ",
    "mapache ",
    "perro ",
    "vendedor ",
    "conductor ",
    "comediante ",
    "piña "
  ];
  let acciones = [
    "tomó mi ",
    "lanzó mi ",
    "gritó a mi ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let posesiones = [
    "dedo ",
    "coche ",
    "reloj ",
    "zapato ",
    "billetera ",
    "camisa ",
    "llaves ",
    "ordenador ",
    "teléfono ",
    "bocadillo "
  ];
  let lugares = [
    "en la calle",
    "en mi casa",
    "en mi garaje",
    "frente a la oficina",
    "cerca del centro comercial",
    "cerca del baño",
    "en la estación de autobuses"
  ];

  // declarando variables aleatorias
  let aleatorio1 = Math.floor(Math.random() * adjetivos.length);
  let aleatorio2 = Math.floor(Math.random() * sustantivos.length);
  let aleatorio3 = Math.floor(Math.random() * acciones.length);
  let aleatorio4 = Math.floor(Math.random() * posesiones.length);
  let aleatorio5 = Math.floor(Math.random() * lugares.length);

  // creando una frase (la excusa)
  document.querySelector("#excusa").innerHTML =
    inicio +
    adjetivos[aleatorio1] +
    sustantivos[aleatorio2] +
    acciones[aleatorio3] +
    posesiones[aleatorio4] +
    lugares[aleatorio5];
});
