import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';

dotenv.config();
const storageCategories_Incidences = Router();

let con = undefined;

storageCategories_Incidences.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect)
    next();
})

/*
    {
        "id_categorie": 1,
        "name_insidence": "Hardware"
    }
*/
/* http://127.10.10.20:5500/categories_incidences/ */
storageCategories_Incidences.get("/", (req, res) => {
    con.query(
        `SELECT * FROM categories_insidences`,

        (error, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
});

export default storageCategories_Incidences;