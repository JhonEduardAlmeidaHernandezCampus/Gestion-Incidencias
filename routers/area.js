import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';

dotenv.config();
const storageAreas = Router();

let con = undefined;

storageAreas.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect)
    next();
})

/*
    {
        "id_area": 1,
        "name_area": "Training"
    }
*/
/* http://127.10.10.20:5500/area/ */
storageAreas.get("/", (req, res) => {
    con.query(
        `SELECT * FROM areas`,

        (error, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
});

export default storageAreas;