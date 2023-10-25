# LojaOnline

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


### Para utilizar um banco de dados local

Instale o banco de dados json local com o seguinte comando:

```
npm install -g json-server
```

Para interagir com o banco de dados de forma visual uilize a ferramenta 'Postman'.
[Site Postman](https://www.postman.com/)

### Para rodar o servidor json local:
```
json-server --watch db.json
```

## INTERAGINDO COM ANGULAR

- Para criar componentes
```
ng g c <nome do componente>
```
- O route guards (ou rota de guarda), faz a verificação se o usuário pode ou não acessar determinada rota.
```
ng g guard auth
``` 
![Loja](https://raw.githubusercontent.com/HeberSilverio/LojaVirtual-comAngular/develop/loja-online/src/img/print-loja.png)


