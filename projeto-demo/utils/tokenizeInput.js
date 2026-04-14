/**
 * Separa a linha digitada no terminal em partes, preservando espacos dentro de aspas.
 */
function tokenizeInput(input) {
  const tokens = [];
  let currentToken = "";
  let activeQuote = null;

  for (const character of input) {
    const isQuote = character === '"' || character === "'";
    const isSpace = /\s/.test(character);

    if (isQuote) {
      if (activeQuote === character) {
        activeQuote = null;
        continue;
      }

      if (activeQuote === null) {
        activeQuote = character;
        continue;
      }
    }

    if (isSpace && activeQuote === null) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = "";
      }

      continue;
    }

    currentToken += character;
  }

  if (currentToken) {
    tokens.push(currentToken);
  }

  return tokens;
}

module.exports = {
  tokenizeInput,
};
