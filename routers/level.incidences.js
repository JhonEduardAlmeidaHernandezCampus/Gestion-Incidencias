import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';

dotenv.config();
const storageLevelIncidences = Router();

let con = undefined;

storageLevelIncidences.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect)
    next();
})

/*
    {
        "id_level": 1,
        "name_level": "Level"
    }
*/
/* http://127.10.10.20:5500/level_incidences/ */
storageLevelIncidences.get("/", (req, res) => {
    con.query(
        `SELECT * FROM level_insidences`,

        (error, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
});

export default storageLevelIncidences;