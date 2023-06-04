const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base, cantidad, listar) => {
  let salida = "";

  for (let i = 1; i <= cantidad; i++) {
    salida += `\t${base} ${'x'} ${i} = ${i * base}\n`;
  }

  if (listar) {
    console.log("===========================".red);
    console.log(`\tTabla del ${base}`.green.underline);
    console.log("===========================".red);
    console.log(salida.rainbow);
  }

  fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
  });

  return `tabla-${base}.txt`.blue;
};

module.exports = {
  crearArchivo,
};
