const { createCLI } = require("./core/cli");
const criarUsuario = require("./commands/criarUsuario");
const listarUsuarios = require("./commands/listarUsuarios");

const app = createCLI();

// O framework controla a execucao; os handlers apenas definem o comportamento.
app.command("criar-usuario", criarUsuario);
app.command("listar-usuarios", listarUsuarios);

// Melhoria futura: adicionar validacao de argumentos.
// Melhoria futura: integrar leitura e escrita em arquivos JSON.
app.run();
