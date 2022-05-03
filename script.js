//PRIMER ENTREGA PROYECTO:
//variable global
const IVA = 1.21

//clase
class Producto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock= stock;
        
    }
    //Método
    precioFinal(){
        //variables locales
        let cantidadProductos
        let productoIngresado
        let continua = true;
        //ciclo
        while (continua){
            productoIngresado= parseInt(prompt("Ingrese producto que desea comprar: \n1 Bandolera \n2 Riñonera \n3 Bolsotote \n4 Tabaquera \n5 Billetera grande \n6 Billetera chica"));
            //condicional
            if(productoIngresado==1){
                this.nombre= "Bandolera"
                alert(this.nombre.toUpperCase())
                continua = false;
            }
            else if (productoIngresado==2) {
                this.nombre= "riñonera"
                alert(this.nombre.toUpperCase())
                continua = false;
            }
            else if (productoIngresado==3) {
                this.nombre= "bolsotote"
                alert(this.nombre.toUpperCase())
                continua = false;
            }
            else if (productoIngresado==4) {
                this.nombre= "tabaquera"
                alert(this.nombre.toUpperCase())
                continua = false;
            } else if (productoIngresado==5) {
                this.nombre= "billetera grande"
                alert(this.nombre.toUpperCase())
                continua = false;
            } else if (productoIngresado==6) {
                this.nombre= "billetera chica"
                alert(this.nombre.toUpperCase())
                continua = false;
            }
            else if (productoIngresado=="") {
                alert("Ingrese un producto válido")
                
            }
            else if (productoIngresado!=Number){
                alert("Por favor ingrese una opción del 1 al 6");
                
            } else if (productoIngresado>6 || productoIngresado<1){
                alert("Por favor ingrese una opción del 1 al 6");
                
            }
            else{
                alert("Por favor ingrese un producto válido");
            }
        }
        let continua2=true;
        while (continua2){
            cantidadProductos= parseInt(prompt ("Ingrese el número de unidades a comprar"))
            if(!(isNaN(cantidadProductos)) && !(cantidadProductos > 11)) {
            console.log(cantidadProductos)
            continua2=false;
            } else {
                alert("Por favor ingrese un número válido. Hasta 10 unidades");  
                continua2=false;
            }
            
        }

        let total=this.precio*IVA*cantidadProductos;
        console.log(total)
        alert ("Monto a abonar = $ "+ total)
        
    }  
}

//Agregado de productos
const producto1 =new Producto("Bandolera",2000,30);
const producto2=new Producto("Riñonera",1500,20);
const producto3 =new Producto("Bolsotote",3500,15);
const producto4 =new Producto("Tabaquera",1500,15);
const producto5=new Producto ("Billetera Grande", 1000,10)
const producto6=new Producto("Billetera Chica", 900, 10)

//Declaro array
let productos= [producto1,producto2,producto3,producto4, producto5, producto6]

//Método de búsqueda sobre array
productos.forEach ((productoEnArray,indice)=>{
    console.log(productoEnArray)
    console.log(indice)
})

//Método de filtrado sobre array
console.log(productos.filter(Producto =>Producto.precio < 2000));
console.log(productos.filter(Producto =>Producto.nombre == "Bolsotote"));

//llamar funciones
producto1.precioFinal();
producto2.precioFinal();
producto3.precioFinal();
producto4.precioFinal();
