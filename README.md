# Criador de Times

Bem-vindo ao **Criador de Times**, um projeto desenvolvido para montar **times balanceados** de forma rápida e prática.

## Objetivo

O **Criador de Times** tem como objetivo selecionar **10 players** e dividi-los em **2 times de 5 pessoas**, baseando-se no **MMR** (uma nota que representa o nível de habilidade de cada jogador).  
O foco é garantir que as equipes fiquem o mais equilibradas possível para partidas justas e competitivas.

## Tecnologias Utilizadas

- **React** — Front-end responsivo e dinâmico
- **Node.js** — Back-end separado (repositório [aqui](https://github.com/EduardoLzrt/selecionador-times))

## Funcionalidades

- Criar novos players com nome e MMR.
- Selecionar os jogadores que participarão da partida.
- Excluir players do sistema.
- Gerar dois times balanceados automaticamente.

## Estrutura do Projeto

Este repositório contém apenas o **Front-end**.  
O **Back-end** está disponível no repositório:  
[https://github.com/EduardoLzrt/selecionador-times](https://github.com/EduardoLzrt/selecionador-times)

## Como rodar o projeto

### Clonar os repositórios

Clone o front-end:
```bash
git clone https://github.com/seu-usuario/criador-de-times.git
```

Clone o back-end:
```bash
git clone https://github.com/EduardoLzrt/selecionador-times.git
```

### Instalar as dependências

Para o front-end:
```bash
cd criador-de-times
npm install
```

Para o back-end:
```bash
cd selecionador-times
npm install
```

### Rodar os projetos

No back-end (dentro da pasta `selecionador-times`):
```bash
npm run dev
```

No front-end (dentro da pasta `criador-de-times`):
```bash
npm run start
```

### Acessar o sistema

Abra o navegador e acesse:  
[http://localhost:3000](http://localhost:3000)

**Importante**: o back-end precisa estar rodando para que o front-end funcione corretamente.

## Pré-requisitos

- Ter **10 jogadores cadastrados** para gerar os times.
- Ter **Node.js** e **npm** ou **yarn** instalados.
- Rodar o **back-end** antes de iniciar o **front-end**.

## Contribuições

Sugestões, melhorias ou novos recursos são bem-vindos.  
Sinta-se à vontade para abrir uma issue ou enviar um pull request.



