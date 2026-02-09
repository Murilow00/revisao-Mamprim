function Relogio() {
    this.segundos = 0;

    
    setInterval(() => {
        this.segundos++;
        console.log("Segundos passados: " + this.segundos);
    }, 1000);
}

const meuRelogio = new Relogio();
