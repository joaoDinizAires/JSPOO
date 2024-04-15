const Pessoa = require("./Pessoa.js");

class Funcionario extends Pessoa{
    constructor(name, age, cpf, email,occupation,salary){
        super(name, age, cpf, email);
        this._occupation = occupation;
        this._salary = this.setSalary(salary);
    }
    setSalary(salary){
        switch(this._occupation){
            case 'ceo':
                return salary * 2.3;
                break;
            case 'manager':
                return salary * 1.8;
                break;
            case 'intern':
                return salary * 0.8;
            default:
                return salary; 
        }
    }
}
module.exports = Funcionario;