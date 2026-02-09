const pessoa = {
    nome: "maria",
    falar: function() {
        console.log("Meu nome é " + this.nome)
    }
};

pessoa.falar()


const pessoas = {
    nome: "Murilo",
    apresentar: function(){
        setTimeout(() => {
            console.log("Olá, meu nome é " + this.nome)
        },1000);
    }
}


pessoa.apresentar()