import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoReports } from '../controller/report.js';

let report = (req, res, next) => {
    try {
        let data = plainToClass(dtoReports, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default report;