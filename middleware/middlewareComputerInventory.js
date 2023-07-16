import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { dtoComputer_Inventory } from '../controller/computer_inventory.js'

const computer_inventory = (req, res, next) => {
    try {
        let data = plainToClass(dtoComputer_Inventory, req.body, {excludeExtraneousValues: true});
        req.body = data;
        next();

    } catch (error) {
        res.status(error.status).send(error)
    }
}

export default computer_inventory;