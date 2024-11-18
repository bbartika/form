const express = require("express");
const cors = require("cors");
const app = express();

const saveRoute = require("./routes/save");

const sequelize = require('./utils/database');


app.use(cors({origin:"*"}));
app.use(express.json())



app.use('/user',saveRoute);

// app.listen(4000);

sequelize.sync({force:!true}).then(()=>{
    app.listen(4000);
})