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
export class dtoReports {
    constructor(id_Trainer, id_categorie, id_level, description, date_report, id_area, id_salon, id_computer) {
        this.id_Trainer = id_Trainer;
        this.id_categorie = id_categorie;
        this.id_level = id_level;
        this.description = description;
        this.date_report = date_report;
        this.id_area = id_area;
        this.id_salon = id_salon;
        this.id_computer = id_computer;
    }
}
__decorate([
    Expose({ name: "ID_Trainer" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_Trainer", void 0);
__decorate([
    Expose({ name: "ID_Categorie" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_categorie", void 0);
__decorate([
    Expose({ name: "ID_Level" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_level", void 0);
__decorate([
    Expose({ name: "Description" }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoReports.prototype, "description", void 0);
__decorate([
    Expose({ name: "Date" }),
    Transform(({ value }) => { if (/^[0-9\-]+$/.test(value))
        return value;
    else
        throw { status: 400, message: 'Error en los parametros' }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], dtoReports.prototype, "date_report", void 0);
__decorate([
    Expose({ name: "ID_Area" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_area", void 0);
__decorate([
    Expose({ name: "ID_Salon" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_salon", void 0);
__decorate([
    Expose({ name: "ID_Computer" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en los parametros` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], dtoReports.prototype, "id_computer", void 0);
