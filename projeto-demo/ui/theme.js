const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

function paint(text, ...styles) {
  return `${styles.join("")}${text}${ANSI.reset}`;
}

const theme = {
  prompt: `${ANSI.bold}${ANSI.magenta}mini-cli>${ANSI.reset} `,
  title(text) {
    return paint(text, ANSI.bold, ANSI.cyan);
  },
  subtitle(text) {
    return paint(text, ANSI.dim);
  },
  command(text) {
    return paint(text, ANSI.green);
  },
  accent(text) {
    return paint(text, ANSI.magenta);
  },
  value(text) {
    return paint(text, ANSI.cyan);
  },
  warning(text) {
    return paint(text, ANSI.yellow);
  },
  success(text) {
    return paint(text, ANSI.green);
  },
  error(text) {
    return paint(text, ANSI.bold, ANSI.red);
  },
  muted(text) {
    return paint(text, ANSI.dim);
  },
  info(text) {
    return paint(text, ANSI.blue);
  },
};

module.exports = {
  theme,
};
