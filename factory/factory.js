// class Pessoa {
//    constructor(name) {
//       this.name = name;
//    }

//    getName() {
//       return this.name;
//    }
// }
const Pessoa = (name, idade) => ({
   name,
   idade,
   getData: () => ({
      name,
      idade,
   }),
});

const pessoa = Pessoa("joao", 15);
console.log(pessoa.getData());
