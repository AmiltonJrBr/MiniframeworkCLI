/**
 * Converte argumentos no formato --chave=valor em um objeto simples.
 */
function parseArgs(argv) {
  return argv.reduce((accumulator, currentArg) => {
    if (!currentArg.startsWith("--")) {
      return accumulator;
    }

    const argumentBody = currentArg.slice(2);
    const separatorIndex = argumentBody.indexOf("=");

    if (separatorIndex === -1) {
      accumulator[argumentBody] = true;
      return accumulator;
    }

    const key = argumentBody.slice(0, separatorIndex);
    const value = argumentBody.slice(separatorIndex + 1);

    accumulator[key] = value;
    return accumulator;
  }, {});
}

module.exports = {
  parseArgs,
};
