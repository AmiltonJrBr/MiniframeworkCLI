/**
 * Comando de exemplo com dados simulados, sem persistencia real.
 */
function listarUsuarios() {
  const usuarios = ["Joao", "Maria", "Ana"];

  console.log("Lista de usuários:");
  usuarios.forEach((usuario) => {
    console.log(`- ${usuario}`);
  });
}

module.exports = listarUsuarios;
