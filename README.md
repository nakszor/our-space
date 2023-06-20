## CRUD

# Como rodar o projeto:

clone o repositório

na pasta raiz do projeto instale as dependências

`yarn`

crie o arquivo ".env", insira o conteúdo do arquivo ".env.example" e preencha corretamente as variaveis

rode o servidor

`yarn dev`

Faça requisições :)

# user-crud-typeorm-express-psql-ts
crud completo de usuário com node (sem soft delete)
framework: express 
banco de dados: postgreSql 
orm: typeorm 
linguagem: typescript
bibiotecas utilizadas
bcryptjs
jsonwebtoken
pg
dotenv
express async errors
zod
reflect metadata


Regras de negócio aplicadas
- Um usuário não pode criar uma conta com um email que já existe.
- apenas o próprio usuário pode visualizar, editar e excluir informações de sua conta.

Aplicação base para projetos express criada com intuito didático.








