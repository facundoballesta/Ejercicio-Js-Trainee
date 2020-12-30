class Vehicle {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}
class Auto extends Vehicle {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
    showData() {
        console.log("Marca: " + this.marca + " // Modelo: " + this.modelo + " // Puertas: " + this.puertas + " // Precio: $" + this.precio.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}))
    }
}

class Moto extends Vehicle {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
    showData() {
        console.log("Marca: " + this.marca + " // Modelo: " + this.modelo + " // Cilindrada: " + this.cilindrada + "cc // Precio: $" + this.precio.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}))
    }
}

var auto1 = new Auto('Peugeot', '206 ', 200000.00, 4);
var auto2 = new Auto('Peugeot', '208 ', 250000.00, 5);
var moto1 = new Moto('Yamaha', 'YBR', 80500.50, 160)
var moto2 = new Moto('Honda', 'Titan', 60000.50, 125)

var Vehiculos = [auto1, moto2, auto2, moto1];

function getAllData(){
    for (var i = 0; i < Vehiculos.length; i++) {
        Vehiculos[i].showData();
    }
}

function getVehiculoCaro(){
    var indexVehiculo;
    var precio = 0;
    for (var i = 0; i < Vehiculos.length; i++) {
        if(Vehiculos[i].precio>precio){
            indexVehiculo=i;
            precio=Vehiculos[i].precio;
        };
    }
    console.log("Vehiculo más caro: " + Vehiculos[indexVehiculo].marca + " " + Vehiculos[indexVehiculo].modelo);
}


function getVehiculoBarato(){
    var indexVehiculo = 0;
    var precio = Vehiculos[0].precio;
    for (var i = 1; i < Vehiculos.length; i++) {
        if(Vehiculos[i].precio<precio){
            indexVehiculo=i;
            precio=Vehiculos[i].precio;
        };
    }
    console.log("Vehiculo más Barato: " + Vehiculos[indexVehiculo].marca + " " + Vehiculos[indexVehiculo].modelo);
}

function getModeloByLetra(letra){
    var indexVehiculo;
    for (var i = 1; i < Vehiculos.length; i++) {
        var modelo = Vehiculos[i].modelo;
        var lowercaseModelo = modelo.toLowerCase();
        var splitedModelo = lowercaseModelo.split("");
        for(var e = 0; e< splitedModelo.length; e++){
            if(splitedModelo[e]==letra){
                indexVehiculo= i;
            }
        }
    }
    console.log("Vehiculo que contiene en el modela la letra '"+letra.toUpperCase()+"': " +Vehiculos[indexVehiculo].marca + " " + Vehiculos[indexVehiculo].modelo + " $" + Vehiculos[indexVehiculo].precio.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

}

function getVehiculosOrder(){
    console.log("Vehículos ordenados por precio de mayor a menor:");
    var vehiculosOrder = this.Vehiculos.sort(((a, b) => b.precio - a.precio));
    for(var i = 0; i<vehiculosOrder.length; i++){
        console.log(vehiculosOrder[i].marca + " " + vehiculosOrder[i].modelo);
    }
}

function pintarEnConsola(){
    getAllData();
    console.log("=============================");
    getVehiculoCaro();
    getVehiculoBarato();
    getModeloByLetra("y");
    console.log("=============================");
    getVehiculosOrder();

}

pintarEnConsola();
