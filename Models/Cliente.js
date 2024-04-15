const Pessoa = require("./Pessoa.js");

class Cliente extends Pessoa {
    constructor(name, age, cpf, email) {
        super(name, age, cpf, email);
        this._shopCart = [];
    }

    addToCart(...productsNames) {
        productsNames.forEach((product) => {
            this._shopCart.push(product);
        })
    }
    removeFromCart(...productsNames) {
        productsNames.forEach((product) => {
            const index = this._shopCart.indexOf(product);
            this._shopCart.splice(index,1);
        })
    }

    showShopCart(){
        this._shopCart.forEach((product)=>{
            console.log(`•${product} \n`)
        })
    }
}
module.exports = Cliente;