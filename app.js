import dotenv from 'dotenv';
import express from 'express';

// Export files
import storageComputer from './routers/computer_inventory.js';
import storageTrainer from './routers/trainer.js';
import storageReport from './routers/report.js';
import categories_incidences from './routers/categories_incidences.js';


dotenv.config();
let appExpress = express();
appExpress.use(express.json());


appExpress.use("/computer_inventory", storageComputer);
appExpress.use("/trainer", storageTrainer);
appExpress.use("/report", storageReport)
appExpress.use("/categories_incidences", categories_incidences)


let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))