import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Router } from 'express';
import computer_inventory from '../middleware/middlewareComputerInventory.js';

dotenv.config();
const storageComputer = Router();

let con = undefined;

storageComputer.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(connect)
    next();
})

/*
    {
        "Area": "Training",
        "Salon": "Apolo",
        "ID_Computer": 1,
        "Serial_CPU": "123456ABCD789",
        "Serial_Monitor": "123456ABCD789",
        "Serial_Keyboard": "123456ABCD789",
        "Serial_Mouse": "123456ABCD789",
        "Serial_Headset": "123456ABCD789"
    }
*/
storageComputer.get("/", (req, res) => {
    con.query(
        `SELECT name_area AS Area, name_salon AS Salon, id_computer AS ID_Computer, serial_cpu AS Serial_CPU, serial_monitor AS Serial_Monitor, serial_keyboard AS Serial_Keyboard, serial_mouse AS Serial_Mouse, serial_headset AS Serial_Headset FROM computer_inventory INNER JOIN salones ON computer_inventory.id_salon = salones.id_salon INNER JOIN areas ON salones.id_area = areas.id_area`,

        (error, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
});


/*
    {
        "id_salon": 2,
        "serial_cpu": "123456ABCD789",
        "serial_monitor": "123456ABCD789",
        "serial_keyboard": "123456ABCD789",
        "serial_mouse": "123456ABCD789",
        "serial_headset": "123456ABCD789"
    }
*/
storageComputer.post("/", computer_inventory, (req, res) => {

    con.query(
        /*sql*/`INSERT INTO computer_inventory SET ?`,
        req.body,

        (error, data, fill)=>{
            if (error) {
                console.log(error);
                res.status(400).send("Error adding inventory")

            }else{
                res.send("Inventory successfully added")
            }
        }
    )
})

storageComputer.put("/update/:id_computer", computer_inventory, (req, res) => {

    con.query(
        /*sql*/`UPDATE computer_inventory SET ? WHERE id_computer = ?`,
        [req.body, req.params.id_computer],

        (err, data, fil)=>{
            if (err) {
                res.status(400).send("Error updating inventory")
            }else{
                res.send("Inventory updated successfully")
            }
        }
    )
})

storageComputer.delete("/removed/:id_computer", (req, res) => {

    con.query(
        /*sql*/`DELETE FROM computer_inventory WHERE id_computer = ?`,
        req.params.id_computer,

        (err, data, fil)=>{
            if (err) {
                res.status(400).send("Error when deleting inventory")
            }else{
                res.send("Inventory successfully removed")
            }
        }
    )
})

export default storageComputer;