# INLAZE WIRES

## Instrucciones

Para correr el proyecto, por favor clonar tanto el repositorio
del frontend como del backend en una misma carpeta. Para el
correcto funcionamiento del proyecto es deseable que las
carpetas se llamen `frontend` y `backend` respectivamente

## Ejemplo

    `mkdir inlaze-wires`

    `cd inlaze-wires`

    `git clone https://github.com/Jonathan-Correa/inlaze-wires-front.git frontend`

    `git clone https://github.com/Jonathan-Correa/inlaze-wires-back.git backend`

Despues de esto, se deberán instalar las dependencias de cada
uno de los proyectos, es recomendable contar con node versión
14 en adelante

Para el frontend:

    `cd frontend`
    `npm install`

Para el backend:

    `cd ../backend`
    `npm install`

Ahora para compilar el proyecto del frontend, debemos entrar
a la carpeta frontend

    `cd ../frontend`
    `npm run build`

Este comando generará los archivos estáticos correspondientes
al fronted dentro de la carpeta backend/build

Como base de datos el proyecto usa mongodb, por lo que
procederemos a poner a correr un contenedor de docker con
mongodb, para lo cuál ya deberemos tener docker instalado

    `docker pull mongo:4`
    `docker run -d -p 27017:27017 mongo:4`

Una vez hechos estos pasos, estamos listos para poner a correr
el servidor, para ello entraremos a la carpeta del backend
y usaremos el siguiente comando:

    `cd ../backend`
    `npm run dev`

con esto ya tendremos un servidor de node corriendo en el
puerto 3000, las configuraciones de la base de datos se
encuentran en el archivo .env el cual opté por subirlo al
repositorio con unas configuraciones ya establecidas para
facilitarles el proceso lo máximo posible (Cabe aclarar que
esto no se haría en un proyecto real)

Al cuál prodremos acceder a través de nuestro navegador en la
dirección `localhost:3000`

