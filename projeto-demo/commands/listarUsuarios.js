const { log } = require("../../framework-cli/core/cli");
const { listUsers } = require("../store/userStore");
const { theme } = require("../ui/theme");

/**
 * Lista os usuarios cadastrados durante a execucao atual do terminal.
 */
function listarUsuarios() {
  const usuarios = listUsers();

  if (usuarios.length === 0) {
    log.info("Nenhum usuario cadastrado nesta sessao.");
    return;
  }

  console.log(theme.info("Usuarios salvos em memoria nesta sessao:"));
  usuarios.forEach((usuario) => {
    const linha = `${theme.value(String(usuario.id))}. ${theme.command(usuario.nome)} ${theme.muted("-")} ${theme.value(String(usuario.idade))} ${theme.muted("anos")}`;
    console.log(linha);
  });
}

module.exports = listarUsuarios;
