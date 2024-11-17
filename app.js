const express = require ('express')
const app = express ()
const port = 3000

app.get ('/', (req, res) => {
        res.send ('Bienvenue dans notre site')
})

app.listen (port, () =>{
    console.log ('le serveur est en marche')
})