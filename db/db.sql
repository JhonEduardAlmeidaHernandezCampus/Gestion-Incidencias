CREATE DATABASE insidencias;

/* USAR LA BASE DE DATOS */
USE insidencias;

/* ELIMINAR LA BASE DE DATOS */
DROP DATABASE insidencias;


/* CREAR TABLAS DE LA BASE DE DATOS */

CREATE TABLE trainers(
    id_trainer INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_trainer VARCHAR(50) NOT NULL,
    email_personal_trainer VARCHAR(50) NOT NULL,
    email_corporativo_trainer VARCHAR(50) NOT NULL,
    mobile_phone VARCHAR(20) NOT NULL, 
    home_phone VARCHAR(20) NOT NULL,
    business_phone VARCHAR(20) NOT NULL, 
    business_mobile_phone VARCHAR(20) NOT NULL
);

CREATE TABLE areas(
    id_area INT NOT NULL PRIMARY KEY AUTO_INCREMENT,       /* TRAINING O REVIEW */
    name_area VARCHAR(20) NOT NULL
);

CREATE TABLE salones(
    id_salon INT NOT NULL PRIMARY KEY AUTO_INCREMENT,      /* APOLO, ARTEMIS, SPUTNIK, SKYLAB, CORVUS, ENDOR*/
    id_area INT NOT NULL,
    name_salon VARCHAR(20) NOT NULL
);

CREATE TABLE computer_inventory(
    id_computer INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   /* INVENTARIO DE COMPUTADORES */
    id_salon INT NOT NULL,
    serial_cpu VARCHAR(20),
    serial_monitor VARCHAR(20), 
    serial_keyboard VARCHAR(20),
    serial_mouse VARCHAR(20),
    serial_headset VARCHAR(20)
);

CREATE TABLE categories_insidences(
    id_categorie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,      /* HADWARE O SOFTWARE */
    name_insidence VARCHAR(20) NOT NULL
);

CREATE TABLE level_insidences(
    id_level INT NOT NULL PRIMARY KEY AUTO_INCREMENT,    /* LEVEL, MODERADA O CRITICA */
    name_level VARCHAR(20) NOT NULL
);

CREATE TABLE reports(
    id_report INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_trainer INT NOT NULL,
    id_categorie INT NOT NULL,
    id_level INT NOT NULL,
    description VARCHAR(200) NOT NULL, 
    date_report DATE NOT NULL,
    id_area INT NOT NULL,
    id_salon INT NOT NULL,
    id_computer INT NOT NULL
);


/* CREACION DE LLAVES FORANEAS */
ALTER TABLE salones ADD CONSTRAINT fk_salones_areas FOREIGN KEY (id_area) REFERENCES areas (id_area) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE computer_inventory ADD CONSTRAINT fk_computer_inventory_salones FOREIGN KEY (id_salon) REFERENCES salones (id_salon) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_trainers FOREIGN KEY (id_trainer) REFERENCES trainers (id_trainer) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_categories FOREIGN KEY (id_categorie) REFERENCES categories_insidences (id_categorie) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_level FOREIGN KEY (id_level) REFERENCES level_insidences (id_level) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_areas FOREIGN KEY (id_area) REFERENCES areas (id_area) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_salon FOREIGN KEY (id_salon) REFERENCES salones (id_salon) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reports ADD CONSTRAINT fk_level_reports_computer FOREIGN KEY (id_computer) REFERENCES computer_inventory (id_computer) ON DELETE RESTRICT ON UPDATE CASCADE;



/* INSERT DATA TABLES */

INSERT INTO trainers(name_trainer, email_personal_trainer, email_corporativo_trainer, mobile_phone, home_phone, business_phone, business_mobile_phone) VALUES 
("Camilo Torres", "Camilo@gmail.com", "CamiloCampus@gmail.com", "+57 32000021321", "6423132", "+57 32000021321", "+57 32000021321"),
("Santiago Hernandez", "Santiago@gmail.com", "SantiagoCampus@gmail.com", "+57 32131231321", "6343243", "+57 32131231321", "+57 32131231321"),
("Cristian Flores", "Cristian@gmail.com", "CristianCampus@gmail.com", "+57 332131232131", "6544321", "+57 332131232131", "+57 332131232131");

INSERT INTO categories_insidences(name_insidence) VALUES 
("Hardware"),
("Software");

INSERT INTO level_insidences(name_level) VALUES 
("Level"),
("Moderada"),
("Critica");

INSERT INTO areas(name_area) VALUES 
("Training"),
("Review");

INSERT INTO salones(id_area, name_salon) VALUES 
(1, "Apolo"),
(1, "Artemis"),
(1, "Sputnik"),
(1, "Skylab"),
(2, "Corvus"),
(2, "Endor");

INSERT INTO computer_inventory(id_salon, serial_cpu, serial_monitor, serial_keyboard, serial_mouse, serial_headset) VALUES 
(1, "123456ABCD789", "123456ABCD789", "123456ABCD789", "123456ABCD789", "123456ABCD789"),
(2, "987654WXYZ321", "987654WXYZ321", "987654WXYZ321", "987654WXYZ321", "987654WXYZ321"),
(3, "456789QWER123", "456789QWER123", "456789QWER123", "456789QWER123", "456789QWER123"),
(4, "789012ASDF456", "789012ASDF456", "789012ASDF456", "789012ASDF456", "789012ASDF456"),
(5, "345678ZXCV901", "345678ZXCV901", "345678ZXCV901", "345678ZXCV901", "345678ZXCV901");

INSERT INTO reports(id_Trainer, id_categorie, id_level, description, date_report, id_area, id_salon, id_computer) VALUES 
(1, 1, 1, "Se encuentra en mal estado", "2023-07-15", 1, 1, 1),
(2, 2, 2, "Se encuentra en mal estado", "2023-07-16", 2, 2, 2),
(3, 2, 3, "Se encuentra en mal estado", "2023-07-17", 2, 3, 3),
(3, 1, 3, "Se encuentra en mal estado", "2023-07-18", 1, 4, 4),
(2, 1, 2, "Se encuentra en mal estado", "2023-07-19", 1, 5, 5),
(1, 2, 1, "Se encuentra en mal estado", "2023-07-20", 2, 6, 1);