
//Declaración de Variables.

var nroMesTotal;
var nroDiaTotal;
var _nroAlma;
var nroAlma;
var nroAnioTotal;
var preAnio;
var _numVida;
var numVida;
var a;
var b;
var c;
var d;

   
//*Creamos funciones flechas y empleamos "return" para obtener los valores devueltos y poder reutilizarlos; 
// ya que la mayoría de los resultados numerológicos son basados en las combinaciones
//de los numeros de la fecha de nacimiento.


//Obtener el valor del día reducido a un sólo dígito.
   const obtenerDia= ()=>{
       
    let dia = parseInt(prompt("Ingresá el número del día de tu nacimiento"));
       if(dia > 31){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if(dia <= 0){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if (dia > 9){
        let _dig1=dia%10;
        let _dig2=Math.floor(dia/10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
         nroDiaTotal = _dig1 + _dig2;
    }
    else{
        nroDiaTotal = dia; 
        //console.log(nroDiaTotal);
    }
    return nroDiaTotal;
 }



 
//Obtener el valor del mes reducido a un sólo dígito. 
const obtenerMes = ()=>{
    let mes = parseInt(prompt("Ingresá el número del mes de tu nacimieto"));
       if(mes > 12){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if(mes <= 0){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if (mes > 9){
        let _dig1=mes%10;
        let _dig2=Math.floor(mes/10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
         nroMesTotal = _dig1 + _dig2;
           console.log(nroMesTotal);
    }
    else{
        nroMesTotal = mes; 
        console.log(nroMesTotal);
    }
    return nroMesTotal;
       }




//Obtener el valor del año reducido a un sólo dígito. 
const obtenerAnio = ()=>{
    let anio  = parseInt(prompt("Ingrese año de nacimiento"));
             if(anio <= 0){
             alert("Número inválido");
             obtenerAnio();           
            }
    else if (anio > 2022){
        alert("Imposible! Aún no has nacido");
        obtenerAnio();
    }
       
            else if(anio > 9) {
              
        a= anio%10;
        anio=anio-a;
        anio=anio/10;
        b=anio%10;
        anio=anio-b;
        anio=anio/10;
        c=anio%10;
        anio= anio-c;
        anio=anio/10;
        d=anio%10;
        preAnio = a + b + c + d ;}
       
        else{
            alert("Algo está mal. Comienza de nuevo");
            obtenerAnio();
        }
        if(preAnio > 9){
            let _dig1=preAnio%10;
            let _dig2=Math.floor(preAnio/10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
           nroAnioTotal = _dig1 + _dig2;
           console.log(nroAnioTotal);
        }
        return nroAnioTotal;
    }
    

   
//FUNCIONES INTERACTIVAS// usan funciones anidadas y reutilizables. 



//Suma del dia + el mes y si el resultado es mayor a 9, lo reduce a un sólo dígito.   
       function calcularNroAlma(){
            obtenerDia();
            obtenerMes();
            _nroAlma = nroDiaTotal + nroMesTotal;
            if(_nroAlma > 9 ){
                let _dig1=_nroAlma%10;
                let _dig2=Math.floor(_nroAlma/10);
                    
                //Acá se suman los dos digitos obtenidos, y dan el resultado final.
                _nroAlma = _dig1 + _dig2;
                alert("Tu número de Alma es: " + _nroAlma);
            }
            else{
                alert("Tu número de Alma es: " + _nroAlma)
            }
            return _nroAlma;
        }
   
  

//Suma todos los dígitos del año y si el resultado es mayor a 9, lo reduce a un sólo dígito. 
        function calcularNroCamino(){
            obtenerAnio();
            alert("Tu número de Camino es: " + nroAnioTotal);
            return nroAnioTotal;
        }



        //Suma del dia + el mes + el año,  y si el resultado es mayor a 9, lo reduce a un sólo dígito. 
        function calcularNumerodeVida(){
            obtenerDia();
            obtenerMes();
            obtenerAnio();
            numVida = nroDiaTotal + nroMesTotal + nroAnioTotal;
            console.log(numVida);
            if(numVida > 9){
                let _dig1=numVida%10;
                let _dig2=Math.floor(numVida/10);
                    
                //Acá se suman los dos digitos obtenidos, y dan el resultado final.
                _numVida = _dig1 + _dig2;
                alert("Tu número de Vida es: " + _numVida);
            }
            else{
                alert("Tu número de Vida es: " + numVida);
            }
        }

 




        //Libros de Literatura argentina

//Objeto Literal
        const libro1 = {
    título: "El Aleph",
    autor: "J. L. Borges",
    anio: "1949"
}
console.log(libro1);
console.log(libro1.autor);



//Constructor
function LibrosLitArgentina(nombre, autor, anio){
    this.nombre = nombre;
    this.autor = autor;
    this.anio = anio;

    //Método
    this.agregar = function(){console.log("El libro: " + this.nombre + " se ha agregado correctamente")}
}


let libro2 = new LibrosLitArgentina("ficciones","Jorge Luis Borges","1944");
console.log("Editorial" in libro2);
console.log("anio" in libro2);


//console.log (libro2.nombre);
let libro3 = new LibrosLitArgentina("Adán Buenosayres","Leopoldo Marechal", "1948");
let libro4 = new LibrosLitArgentina("Papeles de Recienvenido","Macedonio Fernandez","1929");
 for(const info in libro3){
     console.log(libro3[info]);
 }



//Con variables declaradas
let nombreLibro5 = "Inquisiciones";
let autorLibro5 = "Jorge Luis Borges";
//Un ingreso de valor mediante prompt : )
let anioLibro5 = (prompt("Ingrese año de publicación del Libro 5"));

let libro5 = new LibrosLitArgentina(nombreLibro5, autorLibro5, anioLibro5 );
console.log(libro5.anio);
console.log(libro5);

//Uso del método
libro3.agregar();

// empleando Clases
class LibrosLitInglesa{
    constructor(nombre, autor, precio){
        this.nombre = nombre.toUpperCase();
        this.autor = autor. toUpperCase();
        this.precio = parseFloat(precio);
        this.agregar = false;
    }

    recargoCredito(){
        this.precio = this.precio * 1.10;
    }
    agregar(){
        this.agregar = true;
    }
}
const book1 = new LibrosLitInglesa ("hamlet", "william shakespeare", 1000);
const book2 = new LibrosLitInglesa ("to his coy mistress", "andrew marvell", 850);

console.log(book1.nombre); //devuelve en mayúsculas
console.log(book1.autor); //devuelve en mayúsculas
book1.recargoCredito(); //aplica el recargo
console.log(book1.precio); //debe devolver 1100.






