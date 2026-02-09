const pet = {
    nome: "Gato",
    latir: function() {
        
        setTimeout(() => {
            console.log(this.nome + " latia: Au Au!");
        }, 1000);
    }
};
pet.latir()