const express = require("express");

const app = express();

app.listen(process.env.PORT || 3000, (err) => {
    err ? console.log(err) : console.log('Funcionando')
})