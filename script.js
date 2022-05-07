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
}

//Declaro array
    let productos= []
    console.log(productos)
//Agrego productos al array
    productos.push(new Producto("bandolera",2000,30))
    productos.push(new Producto("riñonera",1500,20))
    productos.push(new Producto("bolsotote",3500,15))
    productos.push(new Producto("tabaquera",1500,15))
    productos.push(new Producto("billetera grande", 1000,10))
    productos.push(new Producto("billetera chica", 900, 10))
    
    //Función
    function mostrarProducto(seleccion){
        return (productos[seleccion-1].nombre)
    }
    const mostrarPrecio= (seleccion) =>  productos[seleccion-1].precio
    
        //variables locales
        let cantidadProductos;
        let productoIngresado;
        let continua = true;

        //ciclo
        while (continua){
            productoIngresado = parseInt(prompt(`Ingrese producto que desea comprar: \n1 Bandolera \n2 Riñonera \n3 Bolsotote \n4 Tabaquera \n5 Billetera grande \n6 Billetera chica`));
            
            //condicional
            if(productoIngresado>0 && productoIngresado<7){
                continua = false;
                let nombreSeleccionado= mostrarProducto(productoIngresado);
                alert(`Producto seleccionado: ${nombreSeleccionado} `)
            }else {
                alert(`Por favor ingrese una opción válida entre 1 y ${productos.length}`)
            }   
        }
        continua=true;
        while (continua){
            cantidadProductos= parseInt(prompt ("Ingrese el número de unidades a comprar"))
            if(!(isNaN(cantidadProductos)) && !(cantidadProductos > 11)) {
            console.log(cantidadProductos)
            continua=false;
            } else {
                alert("Por favor ingrese un número válido. Hasta 10 unidades");  
               
            }
            
        }
       
        let total= mostrarPrecio(productoIngresado)*IVA*cantidadProductos;
        console.log(total)
        alert ("Monto a abonar = $ "+ total)
        
    //Método de filtrado sobre array
        const productoEconomico = productos.filter(productos =>productos.precio < 2000);
        console.log(productoEconomico);

        let buscarProducto = prompt("Ingrese producto a buscar");
        const filtrar= productos.filter(productos =>productos.nombre == buscarProducto.toLowerCase());
        console.log(filtrar);

