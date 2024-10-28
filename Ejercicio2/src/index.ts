/*2. Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para
depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos.*/

class CuentaBancaria {
    numeroDeCuenta: string;
    titular: string;
    saldo: number;


    constructor(numeroDeCuenta: string, titular: string, saldo: number){
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number){
        this.saldo += monto;
        console.log(`se a depositado ${monto}, su saldo es ${this.saldo}`);
    }

    retirar(monto: number){
        if(monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`retiro exitoso, se acaba de retirar ${monto} y ahora su saldo es ${this.saldo}`);
        }else{
            console.log("fondos insuficientes");
        }
    }

    consultarSaldo(){
        console.log(`señ@r ${this.titular} su saldo es ${this.saldo}`);
    }
}