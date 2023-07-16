import { Expose, Type, Transform } from 'class-transformer';

export class dtoComputer_Inventory{

    @Expose({name: "Salon"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_salon: number;

    @Expose({name: "Serial_CPU"})
    @Transform(({value}) => {if(/^[A-Z0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    serial_cpu: String;

    @Expose({name: "Serial_Monitor"})
    @Transform(({value}) => {if(/^[A-Z0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    serial_monitor: String;

    @Expose({name: "Serial_Keyboard"})
    @Transform(({value}) => {if(/^[A-Z0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    serial_keyboard: String;

    @Expose({name: "Serial_Mouse"})
    @Transform(({value}) => {if(/^[A-Z0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    serial_mouse: String;

    @Expose({name: "Serial_Headset"})
    @Transform(({value}) => {if(/^[A-Z0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    serial_headset: String;

    constructor(id_salon: number, serial_cpu: string, serial_monitor: string, serial_keyboard: string, serial_mouse: string, serial_headset: string){
        this.id_salon = id_salon;
        this.serial_cpu = serial_cpu;
        this.serial_monitor = serial_monitor;
        this.serial_keyboard = serial_keyboard;
        this.serial_mouse = serial_mouse;
        this.serial_headset = serial_headset;
    }
}