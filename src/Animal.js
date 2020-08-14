import Persona from "./Persona";

const persona = new Persona()

class Animal extends Persona {
    constructor() {
        super()
        this.nombreMascota = document.getElementById("nombreMascota"),
            this.tipo = document.getElementById("tipo"),
            this.enfermedad = document.getElementById("enfermedad")
    }

}

export default Animal;