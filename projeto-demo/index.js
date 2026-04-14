const readline = require("readline");
const { createCLI } = require("../framework-cli/core/cli");
const criarUsuario = require("./commands/criarUsuario");
const listarUsuarios = require("./commands/listarUsuarios");
const mostrarArgumentos = require("./commands/mostrarArgumentos");
const limparUsuarios = require("./commands/limparUsuarios");
const { tokenizeInput } = require("./utils/tokenizeInput");
const { theme } = require("./ui/theme");

const app = createCLI();

// A aplicacao consumidora registra os comandos e o framework decide quando executa-los.
app.command("criar-usuario", criarUsuario);
app.command("listar-usuarios", listarUsuarios);
app.command("mostrar-args", mostrarArgumentos);
app.command("limpar-usuarios", limparUsuarios);

function exibirBoasVindas() {
  console.log(theme.title("Mini Framework CLI - Projeto Demo"));
  console.log(theme.subtitle("Digite um comando e pressione Enter."));
  console.log(theme.warning('Use "ajuda" para ver os comandos e "sair" para encerrar.'));
  console.log("");
}

function exibirAjuda() {
  console.log(theme.title("Comandos disponiveis:"));
  console.log(`${theme.command("criar-usuario")} ${theme.muted("--nome=Amilton --idade=25")}`);
  console.log(`${theme.command("listar-usuarios")}`);
  console.log(`${theme.command("mostrar-args")} ${theme.muted("--curso=ADS --semestre=5")}`);
  console.log(`${theme.command("limpar-usuarios")}`);
  console.log(`${theme.command("ajuda")}`);
  console.log(`${theme.command("sair")}`);
}

function iniciarTerminalInterativo() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: theme.prompt,
  });

  exibirBoasVindas();
  terminal.prompt();

  terminal.on("line", (line) => {
    const input = line.trim();

    if (!input) {
      terminal.prompt();
      return;
    }

    if (input === "ajuda") {
      exibirAjuda();
      terminal.prompt();
      return;
    }

    if (input === "sair") {
      terminal.close();
      return;
    }

    const argv = tokenizeInput(input);
    app.run(argv);
    terminal.prompt();
  });

  terminal.on("close", () => {
    console.log(theme.muted("Terminal encerrado. Os dados em memoria foram descartados."));
  });
}

const argumentosIniciais = process.argv.slice(2);

if (argumentosIniciais.length > 0) {
  app.run(argumentosIniciais);
} else {
  iniciarTerminalInterativo();
}
