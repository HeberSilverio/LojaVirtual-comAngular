# LojaOnline

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


#### Para utilizar um banco de dados local

| Comando                         | O que faz?                  |
| ------------------------------- | --------------------------- |
| `npm install -g json-server`    | Instala pacotes necessários | 
| `json-server --watch db.json`   | **Executa o banco de dados**|
|                                 |                             |

Instale o banco de dados json local com o seguinte comando:

    npm install -g json-server

Para interagir com o banco de dados de forma visual uilize a ferramenta 'Postman'.
[Site Postman](https://www.postman.com/)

## Para rodar o servidor json local:
 
    json-server --watch db.json

#### INTERAGINDO COM ANGULAR

- Para criar componentes
```
ng g c <nome do componente>
```
- O route guards (ou rota de guarda), faz a verificação se o usuário pode ou não acessar determinada rota.
```
ng g guard auth
``` 
#### Como trabalhar com bootstrap no angular


Para Angular: [Documentação do bootstrap](https://ng-bootstrap.github.io/#/home) <br>
Aprenda neste [vídeo deste link](https://www.youtube.com/watch?v=CF59AuAKI6o&t=5435s) no minuto 5:30:20 até o minuto 5:38:23

| Comando                                 | O que faz?                      |
| --------------------------------------- | ------------------------------- |
| `ng add @ng-bootstrap/ng-bootstrap`     | Adiciona o bootstrap no angular | 
| `npm config set legacy-peer-deps true`  | Permite estilizar  | 
