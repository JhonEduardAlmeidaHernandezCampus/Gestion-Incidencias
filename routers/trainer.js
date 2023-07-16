import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';
import trainer from '../middleware/middlewareTrainer.js';

dotenv.config();
let storageTrainer = Router();

let con = undefined;

storageTrainer.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect);
    next();
})

/*
    {
        "ID": 1,
        "Name": "Camilo Torres",
        "Email_Pers": "Camilo@gmail.com",
        "Email_Corp": "CamiloCampus@gmail.com",
        "Mobile": "+57 32000021321",
        "Home_Phone": "6423132",
        "Business_Phone": "+57 32000021321",
        "Business_Mobile_Phone": "+57 32000021321"
    }
*/
/* http://127.10.10.20:5500/trainer/ */
storageTrainer.get("/", (req, res) => {

    con.query(
        `SELECT id_trainer AS ID, name_trainer AS Name, email_personal_trainer AS Email_Pers, email_corporativo_trainer AS Email_Corp, mobile_phone AS Mobile, home_phone AS Home_Phone, business_phone AS Business_Phone, business_mobile_phone AS Business_Mobile_Phone FROM trainers`,

        (error, data, fill) => {
            res.send(JSON.stringify(data));
        }
    )
})


/*
    {
        "Name": "asd ",
        "Email_Personal": "asd@gmail.com",
        "Email_Corporativo": "asd@gmail.com",
        "Mobile_Phone": "+57 32000021321",
        "Home_Phone": "6423132",
        "Business_Phone": "+57 32000021321",
        "Business_Mobile_Phone": "+57 32000021321"
    }
*/
/* http://127.10.10.20:5500/trainer/ */
storageTrainer.post("/", trainer, (req, res) => {

    con.query(
        `INSERT INTO trainers SET ?`, 
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error adding trainer");
                
            } else {
                res.send("Trainer successfully added ");
            }
        }
    )
})


/* http://127.10.10.20:5500/trainer/update/4 */
storageTrainer.put("/update/:id_trainer", trainer, (req, res) => {
    con.query(
        `UPDATE trainers SET ? WHERE id_trainer = ?`,
        [req.body, req.params.id_trainer],

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error updating the registry");

            }else {
                res.send("Registration successfully updated");
            }
        }
    )
})


/* http://127.10.10.20:5500/trainer/delete/4 */
storageTrainer.delete("/delete/:id_trainer", (req, res) => {
    con.query(
        `DELETE FROM trainers WHERE id_trainer = ?`,
        req.params.id_trainer,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error when deleting the record");

            } else {
                res.send("Record successfully deleted")
            }
        }
    )
})

export default storageTrainer;