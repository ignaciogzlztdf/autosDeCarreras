import "./styles.css";

// Realizado de manera secuencial:

let vuelta1: number | null = Number(
  prompt("Tiempo de la primer vuelta (en minutos).", "Por ejemplo: 7.25")
);
let vuelta2: number | null = Number(
  prompt("Tiempo de la segunda vuelta (en minutos).", "Por ejemplo: 7.25")
);
let vuelta3: number | null = Number(
  prompt("Tiempo de la tercer vuelta (en minutos).", "Por ejemplo: 7.25")
);
let vuelta4: number | null = Number(
  prompt("Tiempo de la cuarta vuelta (en minutos).", "Por ejemplo: 7.25")
);

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVueltas: number = tiempoTotal / 4;

console.log("El tiempo total fue " + tiempoTotal + " minutos.");
console.log("El promedio entre vueltas fue de " + promedioVueltas + " minutos.");

// Realizado de manera no secuencial pero que me gustó:

/*
let contador: number = 0;
let totalTiempo: number = 0;

while (contador < 4) {
  contador = contador + 1
   let tiempoVueltas: number = Number(
    prompt("Ingrese tiempo de la vuelta " + contador)
    );
  totalTiempo = totalTiempo + tiempoVueltas;
}
let promedioVuelta: number = totalTiempo / 4;

console.log("El tiempo total fue: " + totalTiempo, "minutos.");
console.log("El promedio de vuelta fue: " + promedioVuelta,"minutos.");
*/
