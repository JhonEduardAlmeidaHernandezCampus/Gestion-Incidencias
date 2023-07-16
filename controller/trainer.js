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
export class dtoTrainers {
    constructor(name_trainer, email_personal_trainer, email_corporativo_trainer, mobile_phone, home_phone, business_phone, business_mobile_phone) {
        this.name_trainer = name_trainer;
        this.email_personal_trainer = email_personal_trainer;
        this.email_corporativo_trainer = email_corporativo_trainer;
        this.mobile_phone = mobile_phone;
        this.home_phone = home_phone;
        this.business_phone = business_phone;
        this.business_mobile_phone = business_mobile_phone;
    }
}
__decorate([
    Expose({ name: "Name" }),
    Transform(({ value }) => { if (/^[a-z-A-Z\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "name_trainer", void 0);
__decorate([
    Expose({ name: "Email_Personal" }),
    Transform(({ value }) => { if (/\S+@\S+\.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "email_personal_trainer", void 0);
__decorate([
    Expose({ name: "Email_Corporativo" }),
    Transform(({ value }) => { if (/\S+@\S+\.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "email_corporativo_trainer", void 0);
__decorate([
    Expose({ name: "Mobile_Phone" }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "mobile_phone", void 0);
__decorate([
    Expose({ name: "Home_Phone" }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "home_phone", void 0);
__decorate([
    Expose({ name: "Business_Phone" }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "business_phone", void 0);
__decorate([
    Expose({ name: "Business_Mobile_Phone" }),
    Transform(({ value }) => { if (/^[0-9\s\W]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoTrainers.prototype, "business_mobile_phone", void 0);
