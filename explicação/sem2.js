/*const pessoa = {
    nome: "maria",
    falar: function() {
        console.log("Meu nome é " + this.nome)
    }
};

pessoa.falar()
*/

const pessoa = {
    nome: "Murilo",
    apresentar: function(){
        setTimeout(() => {
            console.log("Olá, meu nome é " + this.nome)
        },1000);
    }
}


pessoa.apresentar()