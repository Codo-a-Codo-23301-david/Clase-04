let myDom = document; //document es un objeto global



class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Diseño inventado por el profe...
    render(){
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construimos el objeto botón y llamamos al render

let myButon = new Button("app", "Botón de Login ");
myButon.render();


// lo mismo pero con objeto Input

class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 
       
    }   
}


let myInput2 = new Input("objInput", "date");
myInput2.render();



