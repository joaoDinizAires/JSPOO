const Pessoa = require("./Models/Pessoa.js");
const Cliente = require("./Models/Cliente.js");
const Funcionario = require("./Models/Funcionario.js");

const pessoa1 = new Pessoa("João Souza",23,"11727738846","jsouza@gmail.com");
console.log(pessoa1);

const cliente1 = new Cliente("João Moreira",23,"18827778846","jmoreira@gmail.com")
console.log(cliente1.cpf);
cliente1.addToCart("P1","P2","P3","P4");
cliente1.showShopCart();

const funcionario1 = new Funcionario("João Carlos Amorim",43,"12343456745","jcamorim@gmail.com",'ceo',5000);
console.log(funcionario1);