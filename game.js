console.log("game test")

const diccionario = ["LA","EL","APIÑE", "APIÑO", "APIOS", "CASAR", "CASAS", "CASCA", "CASCO", "CASEA","ESE",
"DOLIA",
"DOLIO",
"DOLOR"
]


class Board {
    constructor (){
        this.piezaSeleccionada = ""
    }

    seleccionarPieza(pieza) {
        this.piezaSeleccionada = pieza
        console.log(this.piezaSeleccionada)
    }

    dibujarTablero(datos,jugador1) {
        let tablero = document.getElementById("tablero")
        this.limpiarTablero()
        for (let linea = 0; linea < 15; linea++) {
            let tr = document.createElement("tr")
            for (let col = 0; col < 15; col++) {
                let td = document.createElement("td")  
                let casilla = document.createElement("button")
                casilla.setAttribute("linea",linea) 
                casilla.setAttribute("col", col)
                casilla.addEventListener("click", colocarPieza) 

                if (datos && datos[linea] && datos[linea][col]) {
                    casilla.innerHTML = datos[linea][col].letra
                } else {
                    casilla.innerHTML = "";
                }
                
                td.appendChild(casilla)
                tr.appendChild(td)   
            }
            tablero.appendChild(tr) 
        }
    }

    



    limpiarTablero() {
        let tablero = document.getElementById("tablero")
        if (tablero.hasChildNodes()) {
            let hijos = tablero.childNodes; 
            for (let i = hijos.length -1; i >= 0; i--) {
                tablero.removeChild(hijos[i])                
            }
        
        }
        
        let bandeja = document.getElementById("bandeja")
        if (bandeja.hasChildNodes()) {
            let hijos = bandeja.childNodes; 
            for (let i = hijos.length -1; i >= 0; i--) {
                bandeja.removeChild(hijos[i])                
            }
        
        }

        let bandeja2 = document.getElementById("bandeja2")
        if (bandeja2.hasChildNodes()) {
            let hijos = bandeja2.childNodes; 
            for (let i = hijos.length -1; i >= 0; i--) {
                bandeja2.removeChild(hijos[i])                
            }
        
        }



    }

    
    dibujarBandeja(j1, j2) {
        let bandeja = document.getElementById("bandeja")
        console.log(bandeja)
        

        for (let casillero = 0; casillero < 7; casillero++) {
            let td = document.createElement("td");
            let pieza = document.createElement("button")
            pieza.innerHTML = j1.bandeja[casillero].letra
            pieza.addEventListener("click", () => {
            this.seleccionarPieza(j1.bandeja[casillero].letra)
            //limpiar o reemplazar la pieza seleccionada de la bandeja y luego dibujar la bandeja de nuevo
           // let selecc = bandeja.filter((elem ) => {
              // return elem.casillero.indexOf(bandeja) > -1
                
           // } )
            


            })

            td.appendChild(pieza)
                
            
            bandeja.appendChild(td) 
        }

       
        

        

        let bandeja2 = document.getElementById("bandeja2")

        for (let casillero = 0; casillero < 7; casillero++) {
            let td = document.createElement("td")
            let pieza = document.createElement("button")
            pieza.innerHTML = j2.bandeja[casillero].letra
            pieza.addEventListener("click", () => {
            this.seleccionarPieza(j2.bandeja[casillero].letra)
              })

              

              
              
            td.appendChild(pieza)
            
                
            
            bandeja2.appendChild(td) 
        }
    }

    


}


class Juego {
    constructor() {
        this.tablero = [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [], 
        this.bolsa = []  
        this.palabra = [] 
    }
    llenarBolsa() {
        let letra = new Pieza ("A", 1) 
        for (let letr = 0; letr < 11; letr++) {
            this.bolsa.push(letra)
        }
        this.bolsa.push(letra)
        this.bolsa.push(new Pieza("B", 3))
        this.bolsa.push(new Pieza("B", 3))
        this.bolsa.push(new Pieza("C", 3))
        for (let c = 0; c < 3; c++) {
            this.bolsa.push(new Pieza("C", 3));
        }
        this.bolsa.push(new Pieza("CH",5))
        this.bolsa.push(new Pieza("D", 2))
        for (let d = 0; d < 4; d++) {
            this.bolsa.push(new Pieza("D", 2));
        }
        this.bolsa.push(new Pieza("E", 1))
        for (let e = 0; e < 11; e++) {
            this.bolsa.push(new Pieza("E", 1));
        }
        this.bolsa.push(new Pieza("F", 4))
        this.bolsa.push(new Pieza("G", 2))
        this.bolsa.push(new Pieza("G", 2))
        this.bolsa.push(new Pieza("H", 4))
        this.bolsa.push(new Pieza("H", 4))
        this.bolsa.push(new Pieza("I", 1))
        for (let i = 0; i < 5; i++) {
            this.bolsa.push(new Pieza("I", 1));
        }
        this.bolsa.push(new Pieza("J", 8))
        this.bolsa.push(new Pieza("L", 1))
        for (let l = 0; l < 4; l++) {
            this.bolsa.push(new Pieza("L", 1));
        }
        this.bolsa.push(new Pieza("LL", 8))
        this.bolsa.push(new Pieza("M", 3))
        this.bolsa.push(new Pieza("M", 3))
        this.bolsa.push(new Pieza("N", 1))
        for (let n = 0; n < 4; n++) {
            this.bolsa.push(new Pieza("N", 1));
        }
        this.bolsa.push(new Pieza("Ñ", 8))
        this.bolsa.push(new Pieza("O", 1))
        for (let o = 0; o < 8; o++) {
            this.bolsa.push(new Pieza("O", 1));
        }
        this.bolsa.push(new Pieza("P", 3))
        this.bolsa.push(new Pieza("P", 3))
        this.bolsa.push(new Pieza("Q", 5))
        this.bolsa.push(new Pieza("R", 1))
        for (let r = 0; r < 4; r++) {
            this.bolsa.push(new Pieza("E", 1));
        }
        this.bolsa.push(new Pieza("RR", 8))
        this.bolsa.push(new Pieza("S", 1))
        for (let s = 0; s < 5; s++) {
            this.bolsa.push(new Pieza("S", 1));
        }
        this.bolsa.push(new Pieza("T", 1))
        for (let t = 0; t < 3; t++) {
            this.bolsa.push(new Pieza("T", 1));
        }
        this.bolsa.push(new Pieza("U", 1))
        for (let u = 0; u < 4; u++) {
            this.bolsa.push(new Pieza("U", 1));
        }
        this.bolsa.push(new Pieza("V", 4))
        this.bolsa.push(new Pieza("X", 8))
        this.bolsa.push(new Pieza("Y", 4))
        this.bolsa.push(new Pieza("Z", 10))
        this.bolsa.push(new Pieza("-", 0))
        this.bolsa.push(new Pieza("-", 0))

        

    }
    llenarBandeja(jugador){
        for (let i = 1; i <= 7; i++) {
            let pos = Math.floor(Math.random()* this.bolsa.length );
            let piezaElegida = this.bolsa.splice(pos, 1)[0];
            jugador.bandeja.push(piezaElegida)
            
        }
        


    }



    tomarPieza(jugador){
        let pos = Math.floor(Math.random()* this.bolsa.length );
        let solo1 = this.bolsa.splice(pos, 1)[0];
        jugador.bandeja.push(solo1)
    }



  
}



class Pieza {
    constructor(letra,valor) {
        this.letra = letra
        this.valor = valor
    }

}


class Persona {
    constructor(){
        this.bandeja = []
        
    }
}

const juego = new Juego()
const board = new Board()
console.log(board)
const jugador1 = new Persona()
const jugador2 = new Persona()

function colocarPieza(event) {

    
    event.target.innerHTML = board.piezaSeleccionada
    juego.palabra.push({linea: event.target.getAttribute("linea"), col: event.target.getAttribute("col"), letra: board.piezaSeleccionada})
    console.log (juego.palabra)
    
     
    //Como armar la palabra en una propiedad de la clase para despues compararla con el diccionario, despues de clickar submit
    board.piezaSeleccionada = ""
 
}






function empezarJuego(evento) {
    console.log("ha empezado a jugar")
    board.dibujarTablero(juego.tablero)
    juego.llenarBolsa()
    juego.llenarBandeja(jugador1)
    juego.llenarBandeja(jugador2)
    board.dibujarBandeja(jugador1, jugador2)
    

}

function tomarPieza(evento) {
    console.log("ha tomado una ficha")
    juego.tomarPieza(jugador1)
}

function descontarPieza (evento){
    console.log("ha removido una ficha")
    juego.descontarPieza(jugador1)
}

function compareNumbers(a, b) {
    return a - b;
  }


function validaPalabra(evento) {
    console.log("validar palabra" , juego.palabra)
    //investiagar si la palabra esta de forma vertical

    let columnas = juego.palabra.map((elem)=>{
        return elem.col
    },[])
    console.log(columnas)

    if(columnas.every(elem => elem === columnas[0]) ){
     //si todas las colun¡mnas son iguales   
            let lineas = juego.palabra.map((elem)=>{
            return elem.linea
            })
        console.log(lineas)
        //comprobar si las lineas estan secuenciadas.
        //ordenar el array lineas
        lineas.sort(compareNumbers)
        console.log(lineas)
        if(lineas.every((elem,indx)=>{
            if (indx > 0){
               if(parseInt(elem) == parseInt(lineas[indx - 1]) + 1){
                   return true
               }else{
                   //comprobar si en este hueco hay una pieza
                   if(parseInt(elem) == parseInt(lineas[indx - 1]) + 2 ){
                    //recoger una pieza especifica del tablero
                    console.log(juego.tablero[parseInt(elem)+ 1][parseInt(columnas[0])])
                   }

               }
                return false
            }
           return true 
        })){
            alert("palabra exitosa")
            juego.palabra=[]
            return true
            //comparar la palabra con el diccionario
        }
    }





    let lineas = juego.palabra.map((elem)=>{
        return elem.linea
    })
    console.log(lineas)

    if(lineas.every(elem => elem === lineas[0]) ){
     //si todas las lineas son iguales   
            let cols = juego.palabra.map((elem)=>{
            return elem.col
            },[])
        console.log(cols)
        //comprobar si las columnas estan secuenciadas.
        //ordenar el array columnas
        cols.sort(compareNumbers)
        console.log(cols)
        if(cols.every((elem,indx)=>{
            if (indx > 0){
                if(parseInt(elem) == parseInt(columnas[indx - 1]) + 1){
                    return true
                }else{
                    //comprobar si en este hueco hay una pieza
                    if(parseInt(elem) == parseInt(columnas[indx - 1]) + 2 ){
                     //recoger una pieza especifica del tablero
                     console.log(juego.tablero[parseInt(elem)+ 1][parseInt(lineas[0])])
                    }
 
                }
                 return false
             }
            return true 
        })){
            alert("palabra exitosa")
            juego.palabra=[]
            return true
            //comparar la palabra con el diccionario
            
        }
    }
    alert("palabra invalida")
    return false

    //juego.palabra.forEach((elem)=>{
      //  if (elem == diccionario.length) {
         //  alert ("felicitaciones ha encontrado la palabra") 
       // }else{
          //  alert("lo sentimos palabra incorrecta")
       //     console.log("vuelva a intentarlo")
       // }
   // }); 
    //recoger el array juego.palabra y analizar (si la palabra esta formada de forma vertical u horizontal y s i las letars estan pegadas
}
    

const button = document.getElementById("start-button")
button.onclick = empezarJuego
const buttonPedirFichas = document.getElementById("pedir-fichas")
buttonPedirFichas.onclick = tomarPieza
const botonTablero = document.getElementById("tablero")
botonTablero.onclick = ""
const buttonBuscarPalabra = document.getElementById("submit-word")
buttonBuscarPalabra.onclick = validaPalabra