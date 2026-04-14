const { theme } = require("../ui/theme");
const { clearUsers } = require("../store/userStore");

/**
 * Remove os usuarios em memoria para reiniciar a demonstracao sem fechar o terminal.
 */
function limparUsuarios() {
  clearUsers();
  console.log(theme.warning("Usuarios removidos da memoria da sessao."));
}

module.exports = limparUsuarios;
