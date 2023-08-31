# Projeto CRUD-REACT

Este projeto é uma aplicação CRUD completa que combina as tecnologias Node.js para o back-end e React.js para o front-end. A aplicação oferece 5 campos de entrada de dados essenciais. Para armazenar e gerenciar essas informações, utilizamos o banco de dados SQLite.

## Instruções de Execução

Para executar este projeto, siga os passos abaixo:

### Back-end

1. Navegue até o diretório 'back' do projeto no terminal.
2. Execute o seguinte comando para iniciar o servidor:

node server.js

3. Isso iniciará a API.

4. Abra [http://localhost:3001/api/data](http://localhost:3001/api/data) no seu navegador para visualizar os dados inseridos no banco.

#### Tecnologias back

Nodemon: Utilizado para monitorar as alterações de arquivos e reiniciar automaticamente o servidor durante o desenvolvimento.

Express: Para Simplifica a criação da API e gerenciamento de rotas.

CORS: Pacote que possibilita a configuração de permissões de acesso a recursos do servidor a partir de origens diferentes.

SQLite: Um banco de dados relacional leve e embutido, escolhido para armazenar e gerenciar os dados da aplicação.

### Front-end

1. Navegue até o diretório 'front' do projeto no terminal.
2. Execute o seguinte comando para iniciar o aplicativo no modo de desenvolvimento:

npm start

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

O projeto front-end foi desenvolvido em React, utilizando o pacote 'styled-components' para estilização e a fonte global "poppins".

#### Tecnologias front

React.js: Para a construção da interface de usuário reativas e componentizadas.

JavaScript (JS).

CSS: Para estilização dos elementos da interface.

Styled-components: Biblioteca para estilização de componentes React de forma mais modular e dinâmica.

Axios: Para fazer as requisições HTTP no front-end.

React-icons: Conjunto de ícones populares pré-criados e prontos para uso em componentes React.
