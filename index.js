const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors())

const router = require('./routers/index.router.js');
app.use(router)



const PORT = 3000
app.listen(PORT, () => {
    console.log("Api en ejecución: http://localhost:" + PORT);
})