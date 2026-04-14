/**
 * Registro central de comandos do framework.
 * Aqui concentramos o cadastro e a busca dos handlers.
 */
function createCommandRegistry() {
  const commands = new Map();

  function register(commandName, handler) {
    commands.set(commandName, handler);
  }

  function get(commandName) {
    return commands.get(commandName);
  }

  return {
    register,
    get,
  };
}

module.exports = {
  createCommandRegistry,
};
