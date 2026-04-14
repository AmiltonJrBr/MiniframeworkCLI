# Projeto Demo

Este projeto demonstra o miniframework funcionando em um terminal CLI interativo.

## Como executar

Entre na pasta `projeto-demo` e rode:

```bash
npm run dev
npm run dev:local
```

- `npm run dev` abre uma nova janela do terminal
- `npm run dev:local` roda a CLI no terminal atual

O prompt aberto sera:

```bash
mini-cli>
```

## Funcionalidades disponiveis

- Terminal CLI interativo
- Registro de comandos com `app.command(...)`
- Parser de argumentos no formato `--chave=valor`
- Mensagens coloridas no terminal usando ANSI puro
- Armazenamento em memoria durante a sessao
- Listagem dos dados cadastrados
- Limpeza da memoria sem fechar a CLI
- Tratamento de comando inexistente

## Comandos da demo

Digite estes comandos dentro da CLI:

```bash
ajuda
criar-usuario --nome=Amilton --idade=25
criar-usuario --nome=Joao --idade=30
listar-usuarios
mostrar-args --curso=ADS --semestre=5
limpar-usuarios
listar-usuarios
comando-invalido
sair
```

## O que vale mostrar no video

- A abertura da janela com `npm run dev`
- O prompt `mini-cli>` esperando comandos
- O comando `ajuda` exibindo as opcoes
- O framework executando handlers registrados pela aplicacao
- O parser convertendo argumentos em objeto com `mostrar-args`
- Os usuarios permanecendo salvos enquanto a sessao continua aberta
- A memoria sendo limpa com `limpar-usuarios`
- O erro padronizado ao digitar um comando invalido
