const { log } = require("../../framework-cli/core/cli");
const { addUser } = require("../store/userStore");
const { theme } = require("../ui/theme");

/**
 * Cria um usuario em memoria para durar ate o fim da sessao do terminal.
 */
function criarUsuario(args) {
  if (!args.nome) {
    log.error("Informe o nome com --nome=SeuNome");
    return;
  }

  const usuario = addUser({
    nome: args.nome,
    idade: args.idade || "Nao informada",
  });

  console.log(theme.success("Usuario salvo com sucesso nesta sessao."));
  console.log(`${theme.accent("ID:")} ${theme.value(String(usuario.id))}`);
  console.log(`${theme.accent("Nome:")} ${theme.value(usuario.nome)}`);
  console.log(`${theme.accent("Idade:")} ${theme.value(String(usuario.idade))}`);
}

module.exports = criarUsuario;
