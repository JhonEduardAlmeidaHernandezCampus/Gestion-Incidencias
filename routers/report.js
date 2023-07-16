import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';
import report from '../middleware/middlewareReport.js';

dotenv.config();
let storageReport = Router();

let con = undefined;

storageReport.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect);
    next();
})

/*
    {
        "id_report": 1,
        "name_trainer": "Camilo Torres",
        "name_insidence": "Hardware",
        "name_level": "Level",
        "date_report": "2023-07-15T05:00:00.000Z",
        "name_salon": "Apolo",
        "description": "Se encuentra en mal estado",
        "id_computer": 1,
        "serial_cpu": "123456ABCD789",
        "serial_monitor": "123456ABCD789",
        "serial_keyboard": "123456ABCD789",
        "serial_mouse": "123456ABCD789",
        "serial_headset": "123456ABCD789"
    }
*/
/* http://127.10.10.20:5500/report/ */
storageReport.get("/", (req, res) => {

    con.query(
        `SELECT reports.id_report, trainers.name_trainer, categories_insidences.name_insidence, level_insidences.name_level, reports.date_report, salones.name_salon, reports.description, computer_inventory.id_computer, computer_inventory.serial_cpu, computer_inventory.serial_monitor, computer_inventory.serial_keyboard, computer_inventory.serial_mouse, computer_inventory.serial_headset FROM reports INNER JOIN trainers ON reports.id_trainer = trainers.id_trainer INNER JOIN categories_insidences ON reports.id_categorie = categories_insidences.id_categorie INNER JOIN level_insidences ON reports.id_level = level_insidences.id_level INNER JOIN areas ON reports.id_area = areas.id_area INNER JOIN salones ON reports.id_salon = salones.id_salon INNER JOIN computer_inventory ON reports.id_computer = computer_inventory.id_computer`,

        (error, data, fill) => {
            res.send(JSON.stringify(data));
        }
    )
})


/*
    {
        "ID_Trainer": 1,
        "ID_Categorie": 1,
        "ID_Level": 1,
        "Description": "Se encuentra en mal estado",
        "Date": "2023-07-15",
        "ID_Area": 1,
        "ID_Salon": 1,
        "ID_Computer": 1
    }
*/
/* http://127.10.10.20:5500/report/ */
storageReport.post("/", report, (req, res) => {

    con.query(
        `INSERT INTO reports SET ?`, 
        req.body,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error adding report");
                
            } else {
                res.send("Report successfully added ");
            }
        }
    )
})


/* http://127.10.10.20:5500/report/update/4 */
storageReport.put("/update/:id_report", report, (req, res) => {
    con.query(
        `UPDATE reports SET ? WHERE id_report = ?`,
        [req.body, req.params.id_report],

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


/* http://127.10.10.20:5500/report/delete/4 */
storageReport.delete("/delete/:id_report", (req, res) => {
    con.query(
        `DELETE FROM reports WHERE id_report = ?`,
        req.params.id_report,

        (error, data, fill) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error when deleting the report");

            } else {
                res.send("report successfully deleted")
            }
        }
    )
})

export default storageReport;