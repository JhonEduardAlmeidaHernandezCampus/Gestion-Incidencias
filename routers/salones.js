import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';

dotenv.config();
const storageSalones = Router();

let con = undefined;

storageSalones.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect)
    next();
})

/*
    {
        "id_salon": 1,
        "id_area": 1,
        "name_salon": "Apolo"
    }
*/
/* http://127.10.10.20:5500/salon/ */
storageSalones.get("/", (req, res) => {
    con.query(
        `SELECT * FROM salones`,

        (error, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
});

export default storageSalones;