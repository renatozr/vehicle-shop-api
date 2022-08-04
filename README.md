# vehicle-shop-crud-api
<p>API com CRUD para gerenciar uma concessionária de veículos, usando o mongoose como ODM para o MongoDB. <br>
Fazendo esse projeto melhorei minhas habilidades com o TypeScript e POO aplicando os princípios SOLID.

## Rodando na sua maquina
### Clone o projeto
```
git clone git@github.com:renatozr/vehicle-shop-crud-api.git && cd vehicle-shop-crud-api
```
### Instale as dependências
```
npm install
```
### Configure as variáveis de ambiente
Renomeie o arquivo .env.example para .env e preencha as variáveis
```
// Exemplo
PORT=3001
MONGO_URI=mongodb://localhost:27017/VehicleShop
```
Cerifique-se que o MongoDB está rodando na porta inserida na URI, no caso acima 27017
### Rode o servidor
```
npm run dev
```
Ou
```
npm run build && npm start
```
