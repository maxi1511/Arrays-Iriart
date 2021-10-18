class Producto {
    constructor(id, vino, precio) {
        this.id = id
        this.vino  = vino.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}


const productos = [];
   
productos.push(new Producto(1, "Malbec", "700"));
productos.push(new Producto(2, "Cabernet", "800"));
productos.push(new Producto(3, "Blend", "850"));
productos.push(new Producto(4, "Merlot", "650"));

for(const producto of productos)
producto.sumaIva();

console.log(productos);

const vinosBaratos = productos.filter(producto => producto.precio <= 850);
console.log(vinosBaratos);

const buscarMalbec = productos.find(producto => producto.id === 1);
console.log(buscarMalbec);