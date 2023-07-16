import {Expose, Type, Transform} from 'class-transformer';

export class dtoTrainers{

    @Expose({name: "Name"})
    @Transform(({value}) => {if(/^[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    name_trainer: String;

    @Expose({name: "Email_Personal"})
    @Transform(({value}) => { if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: 'Error en los parametros'}}, {toClassOnly: true})    
    email_personal_trainer: String;

    @Expose({name: "Email_Corporativo"})
    @Transform(({value}) => { if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: 'Error en los parametros'}}, {toClassOnly: true})    
    email_corporativo_trainer: String;

    @Expose({name: "Mobile_Phone"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    mobile_phone: String;

    @Expose({name: "Home_Phone"})
    @Transform(({value}) => {if(/^[0-9]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    home_phone: String;

    @Expose({name: "Business_Phone"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    business_phone: String;

    @Expose({name: "Business_Mobile_Phone"})
    @Transform(({value}) => {if(/^[0-9\s\W]+$/.test(value)) return value; else throw {status:400, message:'Error en los parametros'};}, {toClassOnly:true})
    business_mobile_phone: String;

    constructor(name_trainer: string, email_personal_trainer: string, email_corporativo_trainer: string, mobile_phone: string, home_phone: string, business_phone: string, business_mobile_phone: string){
        this.name_trainer = name_trainer;
        this.email_personal_trainer = email_personal_trainer;
        this.email_corporativo_trainer = email_corporativo_trainer;
        this.mobile_phone = mobile_phone;
        this.home_phone = home_phone;
        this.business_phone = business_phone;
        this.business_mobile_phone = business_mobile_phone;
    }
}