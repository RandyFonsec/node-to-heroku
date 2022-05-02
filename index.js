const express = require('express')

const app = express();

//Settings
app.set('AppName', 'tutorial');
app.set('port', process.env.PORT || 3000);
//Motor plantillas
app.set('view engine', 'ejs');


//Middleware (Van antes de las rutas)
/*
Se ejecutan antes de ir a la ruta
con app.use(function)

*/
//Express ahora entiende json
app.use(express.json());




/* Este middleware va aqui */
//Investigar
//app.use(express.static('public'));




//Routes
app.get('/', (req, res) => {
    res.send("Hola Kendall, exitosamente logré subir mi aplicación node js con express al host heroku");
});
app.get('/user', (req, res) => {
    const data = [{ name: 'John' }, { name: 'hugo' }, { name: 'Carter' }];
    res.render("index.ejs", { people: data });
});



app.listen(app.get('port'), () => {
    console.log("Servidor fazt escuchando");
});

/*
nodemon para que se reflejen los cambios al guardar
npm i -D nodemon
*/