const { createCommandRegistry } = require("./commandRegistry");
const { parseArgs } = require("./parser");

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
};

function colorize(message, ...styles) {
  return `${styles.join("")}${message}${ANSI.reset}`;
}

// Logger simples para padronizar mensagens do framework.
const log = {
  info(message) {
    console.log(colorize(`[INFO] ${message}`, ANSI.blue));
  },

  error(message) {
    console.error(colorize(`[ERRO] ${message}`, ANSI.bold, ANSI.red));
  },
};

/**
 * Fabrica principal do framework.
 * Ela expoe a API usada pela aplicacao consumidora.
 */
function createCLI() {
  const registry = createCommandRegistry();

  function command(commandName, handler) {
    registry.register(commandName, handler);
  }

  function run(argv = process.argv.slice(2)) {
    const [commandName, ...rawArgs] = argv;
    const handler = registry.get(commandName);

    // O framework controla o fluxo e decide quando chamar o handler.
    if (!handler) {
      log.error("Comando nao encontrado");
      return;
    }

    const parsedArgs = parseArgs(rawArgs);
    handler(parsedArgs);
  }

  return {
    command,
    run,
  };
}

module.exports = {
  createCLI,
  log,
};
