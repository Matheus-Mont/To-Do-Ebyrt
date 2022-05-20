
# To-Do-Ebytr
O projeto se baseia na necessidade de resolver o problema de organização e produtividade da empresa fictícia Ebytr. Se trata de uma aplicação simples de organização de tarefas, que permite a criação, ordenação e edição das tarefas.
## Autores

- [@matheusmonteiro](https://github.com/Matheus-Mont)


## Stacks utilizadas

**Front-end:** Reactjs (Hooks), Bootstrap

**Back-end:** Nodejs, Express, Sequelize, Docker

**DataBase:** MySQL
**Testes:** React Testing Library, Mocha, Sinon e Chai.


## Funcionalidades

* Visualização da lista de tarefas;
    * Podendo esta ser ordenada por ordem alfabética, data de criação ou por status;
* Inserção de uma nova tarefa na lista;
* Remoção de uma tarefa da lista;
* Atualização de uma tarefa da lista;
* A tarefa deve possuir um status editável: pendente, em andamento ou pronto;
## Um pouco da teoria

Foi utilizado um banco de dados relacional (MySQL) para o armazenamento de dados das tarefas.

São esses dados: data de criação, data de update, título da tarefa, descrição, status e, por fim, id (chave primária).

Utilizando a ORM Sequelize,  foram desenvolvidos o model, services e controllers, gerando um CRUD simples.

O front-end é composto por uma página única, que contém um espaço em que as tarefas são mostradas em cards, e um header que permite a ordenação desses cards de diferentes maneiras.
## Requisitos para utilizar

* [Node](https://nodejs.org/en/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Docker](https://www.docker.com/)
## Pré-instalação

Clone o repositório para sua máquina

```bash
  git clone git@github.com:Matheus-Mont/To-Do-Ebytr.git
  c
```
Entre na pasta onde o clone foi feito

```bash
  cd To-Do-Ebyrt
```
## Instalação

Na pasta raiz (/To-Do-Ebytr), instale as dependência do projeto com npm

```bash
  npm install
```
Após o fim da instalação, inicie os containeres:

```bash
  npm run compose:up
```

Ao terminar, viaje para a pasta app e depois para a pasta backend, e novamente instale as dependências.

```bash
  cd app
  cd backend
  npm install
```
Na pasta backend, após todas as dependências terem sido instaladas, utilize o seguinte comando:

```bash
  npm run db:reset
```
Então, retorne para  pasta raiz (/To-Do-Ebytr) e já poderá utilizar a aplicação.

OBS: Acesse pela url http://localhost:3000/
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```
Nesse projeto ocorrem 2 tipos de testes, os de backend e os de frontend. Utilize o comando acima quando estiver em alguma das pastas indicadas.

## Variáveis de Ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.


## Feedback

Primeiramente, muito obrigado pelo seu tempo por usar minha aplicação! 
Saiba que se você tiver algum feedback, eu vou adorar escutar! Por favor me deixe saber por meio de dev.matheusmonteiro@gmail.com

Até logo!