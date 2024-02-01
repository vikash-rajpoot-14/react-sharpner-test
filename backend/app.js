const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
dotenv.config({path: "./config.env"})
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', require("./routes/medicene"));

app.use('*', (req, res, next) =>{
    res.status(404).json({
        message: 'Not Found'
    })
})
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err =>console.log("error database", err));

app.listen(process.env.PORT||3000,(listen)=>{
    console.log('Server is running on port 3000');
})