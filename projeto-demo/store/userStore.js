const usuarios = [];

function addUser(userData) {
  const usuario = {
    id: usuarios.length + 1,
    nome: userData.nome,
    idade: userData.idade,
  };

  usuarios.push(usuario);
  return usuario;
}

function listUsers() {
  return [...usuarios];
}

function clearUsers() {
  usuarios.length = 0;
}

module.exports = {
  addUser,
  listUsers,
  clearUsers,
};
