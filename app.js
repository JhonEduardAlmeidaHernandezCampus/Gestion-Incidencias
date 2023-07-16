import dotenv from 'dotenv';
import express from 'express';

// Export files
import storageComputer from './routers/computer_inventory.js';
import storageTrainer from './routers/trainer.js';
import storageReport from './routers/report.js';

dotenv.config();
let appExpress = express();
appExpress.use(express.json());


appExpress.use("/computer_inventory", storageComputer);
appExpress.use("/trainer", storageTrainer);
appExpress.use("/report", storageReport)


let config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))