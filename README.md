# GESTIÓN DE INCIDENCIAS

Este repositorio contiene un sistema de gestión de incidencias, El sistema permite la programación, visualización y gestión de incidencias sobre los reportes creados por daños en equipos.



![relaciones](C:\Users\jhonh\Desktop\Gestion Incidencias\db\relacionesdb.jfif)



## Requisitos previos

- Node.js instalado en su máquina.

  

## Instalación

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".
2. Descarga la versión de Node.js correspondiente a su sistema operativo.
3. Clona este repositorio en tu máquina local.
4. Abre una terminal en el editor de código de tu preferencia, se recomienda "Visual Studio Code".
5. Ejecuta el siguiente comando para instalar las dependencias:

```
npm install;
```

1. Una vez instaladas las dependencias, tienes que ejecutar el nodemon de la siguiente manera y también ejecutar el tsc.

   `npm run dev;`

   `npm run tsc;`

   

## Configuración

1. Asegurarse de tener creada la base de datos, si no cuentas con una base de datos, este proyecto ya trae una por defecto en la ruta `db/db.sql`
2. Crea un archivo `.env` en el directorio raíz de la aplicación.
3. Dentro del archivo `.env` , define las siguientes variables de entorno:

```
MY_CONFIG={"hostname": "", "port": }
MY_CONNECT={"host": "", "user": "", "password": "", "database": "", "port": "3306"}
```



## Uso

Puedes probar diferentes rutas accediendo a:

- `http://"hostname":"port"/computer_inventory` rutas relacionadas con Inventarios.

- `http://"hostname":"port"/trainer` rutas relacionadas con Trainers.

- `http://"hostname":"port"/report` rutas relacionadas con Reportes.

- `http://"hostname":"port"/categories_incidences` rutas relacionadas con Categorías de incidencias.

- `http://"hostname":"port"/level_incidences` rutas relacionadas con Niveles de incidencias.

- `http://"hostname":"port"/area` rutas relacionadas con Areas.

- `http://"hostname":"port"/salon` rutas relacionadas con Salones.

  

## Validaciones

El sistema cuenta con validaciones al momento de ingresar datos en la base de datos hechas en Typescript, el sistema valida cada campo y su tipo de dato, si el dato no es correcto le muestra un error.



# EndPoint de Trainers

#### GET: `http://"hostname":"port"/trainer`

Este EndPoint devuelve una lista de trainers existentes.

```
[
  {
    "ID": 1,
    "Name": "Camilo Torres",
    "Email_Pers": "Camilo@gmail.com",
    "Email_Corp": "CamiloCampus@gmail.com",
    "Mobile": "+57 32000021321",
    "Home_Phone": "6423132",
    "Business_Phone": "+57 32000021321",
    "Business_Mobile_Phone": "+57 32000021321"
  },
  {
    "ID": 2,
    "Name": "Santiago Hernandez",
    "Email_Pers": "Santiago@gmail.com",
    "Email_Corp": "SantiagoCampus@gmail.com",
    "Mobile": "+57 32131231321",
    "Home_Phone": "6343243",
    "Business_Phone": "+57 32131231321",
    "Business_Mobile_Phone": "+57 32131231321"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/trainer`

Este EndPoint permite agregar un trainer nuevo.

**Parámetros de entrada:**

- `Name` : Nombre del trainer.
- `Email_Personal` : Email personal del trainer.
- `Email_Corporativo` : Email corporativo del trainer.
- `Mobile_Phone`: Numero de telefono del trainer.
- `Home_Phone` : Numero de telefono de hogar del trainer.
- `Business_Phone` : Numero de celular empresarial del trainer.
- `Business_Mobile_Phone` : Numero de telefono del trainer .

**Ejemplo:**

```
{
   "Name": "asd ",
   "Email_Personal": "asd@gmail.com",
   "Email_Corporativo": "asd@gmail.com",
   "Mobile_Phone": "+57 32000021321",
   "Home_Phone": "6423132",
   "Business_Phone": "+57 32000021321",
   "Business_Mobile_Phone": "+57 32000021321"
}
```



#### PUT: `http://"hostname":"port"/trainer/update/:id`

Este EndPoint permite actualizar los campos de la tabla de trainers.

```
{
   "Name": "Camilo"
   "Email_Personal": "Camilo@gmail.com",
   "Email_Corporativo": "Camilo@gmail.com",
   "Mobile_Phone": "+57 32000021321",
   "Home_Phone": "6423132",
   "Business_Phone": "+57 32000021321",
   "Business_Mobile_Phone": "+57 32000021321"
}
```



#### DELETE: `http://"hostname":"port"/trainer/delete/:id`

Este EndPoint permite eliminar los campos de la tabla de trainers.



# EndPoint de Tipo Categories Incidences

#### GET: `http://"hostname":"port"/categories_incidences`

Este EndPoint devuelve una lista de categorías de incidencias existentes.

```
[
  {
    "id_categorie": 1,
    "name_insidence": "Hardware"
  },
  {
    "id_categorie": 2,
    "name_insidence": "Software"
  }
]
```





# EndPoint de Computer Inventory

#### GET: `http://"hostname":"port"/computer_inventory`

Este EndPoint devuelve una lista de inventarios existentes.

```
[
  {
    "Area": "Training",
    "Salon": "Apolo",
    "ID_Computer": 1,
    "Serial_CPU": "123456ABCD789",
    "Serial_Monitor": "123456ABCD789",
    "Serial_Keyboard": "123456ABCD789",
    "Serial_Mouse": "123456ABCD789",
    "Serial_Headset": "123456ABCD789"
  },
  {
    "Area": "Training",
    "Salon": "Artemis",
    "ID_Computer": 2,
    "Serial_CPU": "987654WXYZ321",
    "Serial_Monitor": "987654WXYZ321",
    "Serial_Keyboard": "987654WXYZ321",
    "Serial_Mouse": "987654WXYZ321",
    "Serial_Headset": "987654WXYZ321"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/computer_inventory`

Este EndPoint permite agregar un nuevo inventario.

**Parámetros de entrada:**

- `Salon` : Salón en donde se encuentra el equipo.
- `Serial_CPU` : Serial de la CPU.
- `Serial_Monitor` :  Serial del monitor.
- `Serial_Keyboard` :  Serial del keyboard.
- `Serial_Mouse` :  Serial del mouse.
- `Serial_Headset` : Serial del headset.

**Ejemplo:**

```
{
    "Salon": 2,
    "Serial_CPU": "123456ABCD789",
    "Serial_Monitor": "123456ABCD789",
    "Serial_Keyboard": "123456ABCD789",
    "Serial_Mouse": "123456ABCD789",
    "Serial_Headset": "123456ABCD789"
}
```



#### PUT: `http://"hostname":"port"/computer_inventory/update/:id`

Este EndPoint permite actualizar los campos de la tabla de inventarios.

```
{
    "Salon": 2,
    "Serial_CPU": "123456ABCD789",
    "Serial_Monitor": "123456ABCD789",
    "Serial_Keyboard": "123456ABCD789",
    "Serial_Mouse": "123456ABCD789",
    "Serial_Headset": "123456ABCD789"
}
```



#### DELETE: `http://"hostname":"port"/computer_inventory/delete/:id`

Este EndPoint permite eliminar los campos de la tabla de inventarios.





# EndPoint de Reports

#### GET: `http://"hostname":"port"/report`

Este EndPoint devuelve una lista de reportes existentes.

```
[
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
  },
  {
    "id_report": 5,
    "name_trainer": "Santiago Hernandez",
    "name_insidence": "Hardware",
    "name_level": "Moderada",
    "date_report": "2023-07-19T05:00:00.000Z",
    "name_salon": "Corvus",
    "description": "Se encuentra en mal estado",
    "id_computer": 5,
    "serial_cpu": "345678ZXCV901",
    "serial_monitor": "345678ZXCV901",
    "serial_keyboard": "345678ZXCV901",
    "serial_mouse": "345678ZXCV901",
    "serial_headset": "345678ZXCV901"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/report`

Este EndPoint permite agregar un nuevo reporte.

**Parámetros de entrada:**

- `ID_Trainer` : ID del trainer que va a generar el reporte.
- `ID_Categorie` : ID de la categoria "Hardware, Software".
- `ID_Level` : ID del nivel de la categoria "Leve, moderada, critica".
- `Description` : Breve descripcion del daño.
- `Date` : Fecha en la que se genera el reporte.
- `ID_Area` : Area en la que se genera el daño.
- `ID_Salon` : Salon en donde se encuentra el equipo.
- `ID_Computer` : ID del computador.

**Ejemplo:**

```
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
```



#### PUT: `http://"hostname":"port"/report/:id`

Este EndPoint permite actualizar los campos de la tabla de reportes.

```
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
```



#### DELETE: `http://"hostname":"port"/report/delete/:id`

Este EndPoint permite eliminar los campos de la tabla de reportes.





# EndPoint de Area

#### GET: `http://"hostname":"port"/area`

Este EndPoint devuelve una lista de areas existentes.

```
[
  {
    "id_area": 1,
    "name_area": "Training"
  },
  {
    "id_area": 2,
    "name_area": "Review"
  }
]
```





# EndPoint de Level incidences

#### GET: `http://"hostname":"port"/level_incidences`

Este EndPoint devuelve una lista de niveles de incidencias existentes.

```
[
  {
    "id_level": 1,
    "name_level": "Level"
  },
  {
    "id_level": 2,
    "name_level": "Moderada"
  },
  {
    "id_level": 3,
    "name_level": "Critica"
  }
]
```





# EndPoint de Salones

#### GET: `http://"hostname":"port"/salon`

Este EndPoint devuelve una lista de salones existentes.

```
[
  {
    "id_salon": 1,
    "id_area": 1,
    "name_salon": "Apolo"
  },
  {
    "id_salon": 2,
    "id_area": 1,
    "name_salon": "Artemis"
  },
  {
    "id_salon": 3,
    "id_area": 1,
    "name_salon": "Sputnik"
  },
  ...
]
```





# NOTA

En tal caso de presentar algún error el código, comunicarse con el desarrollador.

EMAIL: [Jhonhernandez.1899@gmail.com](mailto:Jhonhernandez.1899@gmail.com)