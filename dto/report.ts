import {Expose, Type, Transform} from 'class-transformer';

export class dtoReports{

    @Expose({name: "ID_Trainer"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_Trainer: number;

    @Expose({name: "ID_Categorie"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_categorie: number;

    @Expose({name: "ID_Level"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_level: number;

    @Expose({name: "Description"})
    @Transform(({value}) => {if(/^[a-zA-Z0-9\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    description: String;

    @Expose({name: "Date"})
    @Transform(({value}) => {if(/^[0-9\-]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    date_report: String;

    @Expose({name: "ID_Area"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_area: number;

    @Expose({name: "ID_Salon"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_salon: number;

    @Expose({name: "ID_Computer"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_computer: number;

    constructor(id_Trainer: number, id_categorie: number, id_level: number, description: string, date_report: string, id_area: number, id_salon: number, id_computer: number){
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