# Avaliação prática - Fullstack Web Varejo 360

![](https://media.giphy.com/media/Dh9iAb6GkmJ3Xdiegx/giphy.gif)

Este projeto foi gerado com:
[yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) - 
[Angular](https://angular.io/) - 
[Express](https://expressjs.com/pt-br/) - 

## Servidor de desenvolvimento API

Execute `yarn dev:serve` para um servidor de desenvolvimento. na porta`http://localhost:3333/`. O servidor será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Build da API

Execute `yarn workspace server build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.

## DOCKER DA API

no diretório `server/`. encontrase o arquivo dockerfile Execulte `docker build -t [NOME_DO_CONTAINER] .`

## Servidor de desenvolvimento Web

Execute `yarn dev:web` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Build do Aplicativo Web

Execute `yarn workspace catalogo-leite build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.
