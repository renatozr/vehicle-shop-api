# Vehicle Shop API
<p>REST API que gerencia os dados dos veículos de uma concessionária. <br>
Fazendo esse projeto melhorei minhas habilidades com o TypeScript e POO aplicando os princípios SOLID.</p>
<p>
  Demo: https://vehicle-shop-api.onrender.com/docs
  Pode haver delay pois o servidor está hospedado nos EUA
</p>

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
### Rotas
```
http://localhost:PORT

/cars             -POST, GET
/cars/:id         -GET, PUT, DELETE
/motorcycles      -POST, GET
/motorcycles/:id  -GET, PUT, DELETE
```
##
Inspirado no projeto CarShop que desenvolvi enquanto estudava na @betrybe
