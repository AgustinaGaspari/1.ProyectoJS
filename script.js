//PRIMER ENTREGA PROYECTO:
const IVA = 1.21


class Producto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock= stock;
        
    }

    precioFinal(){
        let cantidadProductos
        let productoIngresado
        let continua = true;
        while (continua){
            productoIngresado= parseInt(prompt("Ingrese producto que desea comprar: \n1 Bandolera \n2 Riñonera \n3 Bolsotote \n4 Tabaquera"));
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
            }
            else if (productoIngresado=="") {
                alert("Ingrese un producto válido")
                
            }
            else if (productoIngresado!=Number){
                alert("Por favor ingrese una opción del 1 al 4");
                
            } else if (productoIngresado>4 || productoIngresado<1){
                alert("Por favor ingrese una opción del 1 al 4");
                
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
            } 
        }

        this.precio=Producto.precio*IVA*cantidadProductos;
        console.log(Producto.this.precio)
        
        alert ("Monto a abonar = $ "+ this.precio)
    }
    
}
const producto1 =new Producto("Bandolera",2000,30);
const producto2=new Producto("Riñonera",1500,20);
const producto3 =new Producto("Bolsotote",3000,15);
const producto4 =new Producto("Tabaquera",1000,15);

let productos= [producto1,producto2,producto3,producto4]

productos.forEach ((productoEnArray,indice)=>{
    console.log(productoEnArray)
    console.log(indice)
})

producto1.precioFinal();
producto2.precioFinal();
producto3.precioFinal();
producto4.precioFinal();

/*let continua = true;

while (continua){
    let productoIngresado= parseInt(prompt("Ingrese producto que desea comprar: \n1 Bandolera \n2 Riñonera \n3 Bolsotote \n4 Tabaquera"));
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
    }
    else if (productoIngresado=="") {
        alert("Ingrese un producto válido")
        
    }
    else if (productoIngresado!=Number){
        alert("Por favor ingrese una opción del 1 al 4");
        
    } else if (productoIngresado>4 || productoIngresado<1){
        alert("Por favor ingrese una opción del 1 al 4");
        
    }
    else{
        alert("Por favor ingrese un producto válido");
    }
}

/*let continua2=true;

while (continua2){
    cantidadProductos= parseInt(prompt ("Ingrese el número de unidades a comprar"))
    if(!(isNaN(cantidadProductos)) && !(cantidadProductos > 11)) {
        console.log(cantidadProductos)
        continua2=false;
    }
    else {
        alert("Por favor ingrese un número válido. Hasta 10 unidades");  
    } 
}

producto1.precioFinal();
producto2.precioFinal();
producto3.precioFinal();
producto4.precioFinal();

/*let total = Producto.precioFinal
console.log(total)
alert ("Monto a abonar = $ "+ total)*/