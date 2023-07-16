import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoTrainers } from '../controller/trainer.js';

let trainer = (req, res, next) => {
    try {
        let data = plainToClass(dtoTrainers, req.body, {excludeExtraneousValues: true})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default trainer;