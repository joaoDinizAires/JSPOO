class Pessoa{
    constructor(name,age,cpf,email){
        this._name = name;
        this._age = age;
        this._cpf = cpf;
        this._email = email;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = Newname;

    }

    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = age;

    }

    get cpf(){
        return this.cpfFormatter(this._cpf);
    }
    cpfFormatter(cpf){
        return `${cpf.substring(0,3)}.${cpf.substring(3,6)}.${cpf.substring(6,9)}-${cpf.substring(9)}`;
    }

    get email(){
        return this._email;
    }
    set email(newEmail){
        this._email = newEmail;
    }
}
module.exports = Pessoa;