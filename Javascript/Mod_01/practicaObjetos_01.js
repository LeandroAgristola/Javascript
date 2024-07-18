class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false; 
    }

    pressBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        } else  {
            alert("El celular esta apagado")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionCamara}`)
    }

    grabarVideo(){
        alert(`Video grabado en una resolucion de: ${this.resolucionCamara}`)
    }

    mobileInfo(){
        return`
        Color: <b>${this.color} </b></br>
        Peso: <b>${this.peso} </b></br>
        Tamaño: <b>${this.tamaño} </b></br>
        Resolucion de camara: <b>${this.resolucionCamara} </b></br>
        Resolucion de video: <b>${this.resolucionCamara} </b></br>
        Memoria RAM: <b>${this.memoriaRam} </b></br>
        `;
    }
}

class celularAltagama extends Celular{ //hereda las caracteristicas de la clase "celular"
    constructor(color,peso,tamaño,rdc,ram,rdce){  
        super(color,peso,tamaño,rdc,ram);
        this.resolucionCamaraExtra = rdce;
    }
    grabarVideoslow(){
        alert("Grabando en slow Motion");
    }
    reconocimientoFacila(){
        alert("Reconociendo rostros");
    }
    infoAltagama(){
        return this.mobileInfo() + ` Resolucion de camara frontal: <b>${this.resolucionCamaraExtra} </b></br>`;
    }

}

celular1 = new Celular("rojo","150 gramos","3.2","full HD","2 GB");
celular2 = new Celular("azul","120 gramos","3.6","4k","8 GB");
celular3 = new Celular("dorado","133 gramos","4","full HD","4 GB");
celular4 = new celularAltagama("plata","150 gramos","5","4k","12 GB","hd");
celular5 = new celularAltagama("dorado","100 gramos","5","8k","8 GB","full hd");


//celular1.pressBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.pressBotonEncendido();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
    ${celular4.infoAltagama()} <br>
    ${celular5.infoAltagama()} <br>
`);










