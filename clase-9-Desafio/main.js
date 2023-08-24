//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas, //array
    consultarCliente: function(titular){
        let indice = -1;

        for(let i =0 ; i< this.clientes.length ; i++){
            if(titular.toUpperCase() === this.clientes[i].titularCuenta.toUpperCase()){
                indice = i;
                break;
            }
        }
        return this.clientes[indice];

    },
    deposito: function(titular,cantidad){
        let leyenda="";
        let indice = 0;
        for(let i =0 ; i< this.clientes.length ; i++){

            if(titular.toUpperCase() === this.clientes[i].titularCuenta.toUpperCase()){
                indice = i;
                break;
            }
        }

        this.clientes[indice].saldoEnPesos+=cantidad;
        leyenda = `Depósito realizado, su nuevo saldo es: ${this.clientes[indice].saldoEnPesos}.`;
        return leyenda;
    },
    extraccion: function(titular,monto  ){
        let leyenda="";
        let indice = 0;
        for(let i =0 ; i< this.clientes.length ; i++){

            if(titular.toUpperCase() === this.clientes[i].titularCuenta.toUpperCase()){
                indice = i;
                break;
            }
        }

        this.clientes[indice].saldoEnPesos-=monto;

        if(this.clientes[indice].saldoEnPesos < 0){
            leyenda = `“Fondos insuficientes”.`;
        }else{
            leyenda = `Extracción realizada correctamente, su nuevo saldo es: ${this.clientes[indice].saldoEnPesos}`;
        }

        
        return leyenda;
    }

}

// console.log(banco.clientes);
let clienteEncontrado = banco.consultarCliente("ramon connell");
console.log(" C L I E N T E       E N C O N T R A D O");
console.log(clienteEncontrado);
console.log(" ---------- ");
let sumarSaldos = banco.deposito("Jacki Shurmer",1);
console.log(sumarSaldos);

let extraccionMontos = banco.extraccion("Jacki Shurmer",18791);
console.log(extraccionMontos);