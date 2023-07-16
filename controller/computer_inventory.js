var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class dtoComputer_Inventory {
    constructor(id_salon, serial_cpu, serial_monitor, serial_keyboard, serial_mouse, serial_headset) {
        this.id_salon = id_salon;
        this.serial_cpu = serial_cpu;
        this.serial_monitor = serial_monitor;
        this.serial_keyboard = serial_keyboard;
        this.serial_mouse = serial_mouse;
        this.serial_headset = serial_headset;
    }
}
__decorate([
    Expose({ name: "Salon" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoComputer_Inventory.prototype, "id_salon", void 0);
__decorate([
    Expose({ name: "Serial_CPU" }),
    Transform(({ value }) => { if (/^[A-Z0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoComputer_Inventory.prototype, "serial_cpu", void 0);
__decorate([
    Expose({ name: "Serial_Monitor" }),
    Transform(({ value }) => { if (/^[A-Z0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoComputer_Inventory.prototype, "serial_monitor", void 0);
__decorate([
    Expose({ name: "Serial_Keyboard" }),
    Transform(({ value }) => { if (/^[A-Z0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoComputer_Inventory.prototype, "serial_keyboard", void 0);
__decorate([
    Expose({ name: "Serial_Mouse" }),
    Transform(({ value }) => { if (/^[A-Z0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoComputer_Inventory.prototype, "serial_mouse", void 0);
__decorate([
    Expose({ name: "Serial_Headset" }),
    Transform(({ value }) => { if (/^[A-Z0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoComputer_Inventory.prototype, "serial_headset", void 0);
