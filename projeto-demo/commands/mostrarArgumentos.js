const { theme } = require("../ui/theme");

/**
 * Exibe o objeto gerado pelo parser do framework a partir do comando digitado.
 */
function mostrarArgumentos(args) {
  console.log(theme.info("Objeto de argumentos gerado pelo parser:"));
  console.dir(args, { colors: true });
}

module.exports = mostrarArgumentos;
