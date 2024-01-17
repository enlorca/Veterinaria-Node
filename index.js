const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
  if (argumentos.length === 6) {
    const [, nombre, edad, animal, color, enfermedad] = argumentos;
    registrar(nombre, edad, animal, color, enfermedad);
  } else {
    console.log('■ Número incorrecto de argumentos para comando "registrar". Debe ser "registrar nombre edad animal color enfermedad"');
}
} else if (operacion === "leer") {
  if (argumentos.length === 1) {
    leer();
  } else {
    console.log('■ No se esperan argumentos adicionales para comando "leer".');
  }
  
} else {
  console.log('■ Comando invalido. Utilizar "registrar" o "leer".');
}
