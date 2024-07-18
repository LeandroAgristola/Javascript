class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false; 
        this.instalada = false;
    }    

    abrir(){
        if (this.iniciada === false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        } 
    }
    cerrar(){
        if (this.iniciada === true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada")

        }
    }
    instalar(){
        if(this.instalada === false) { 
            this.instalada  = true;
            alert("app instalada");

        }
    }

    desinstalar(){
        if(this.instalada === true) { 
            this.instalada = false;
            this.iniciada = false;
            alert("app desinstalada");

        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000","⋆⋆⋆⋆⋆", "900 mb" );
app2 = new App("4.000","⋆⋆⋆", "30 mb" );
app3 = new App("1.500","⋆", "15 mb" );
app4 = new App("70.000","⋆⋆⋆⋆⋆", "573 mb" );

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    `)

//ejecutamos los metodos para la primera app

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();