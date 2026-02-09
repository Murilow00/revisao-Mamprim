const calculadora = {
    valor: 0,
    adicionar: function(num) {
        
        this.valor += num;
    }
};

calculadora.adicionar(10);
console.log(calculadora.valor); 