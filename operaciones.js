const fs = require("fs");
const citasRuta = "./citas.json";

function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync(citasRuta, "utf-8"));

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  citas.push(nuevaCita);

  fs.writeFileSync(citasRuta, JSON.stringify(citas, null, 2));

  console.log("■ Cita registrada correctamente.");
}

function leer() {
  const citas = JSON.parse(fs.readFileSync(citasRuta, "utf-8"));

  if (citas.length === 0){
    console.log("■ No hay citas registradas. Use el comando 'registrar' para ingresar una cita.");
  } else {
    console.log("■ Procesando los datos.");
    console.log("---------------------");
    console.log("■ Citas registradas:");
    citas.forEach((cita, index) => {
        console.log(`#${index + 1}:`);
        console.log(`Nombre: ${cita.nombre}`);
        console.log(`Edad: ${cita.edad}`);
        console.log(`Animal: ${cita.animal}`);
        console.log(`Color: ${cita.color}`);
        console.log(`Enfermedad: ${cita.enfermedad}`);
        console.log("=============================");
    });
  }
}

module.exports = { registrar, leer };
