require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const connectMongoDb = require('./config/mongoose');
const graphSchema = require('./model/graph');

const bodyParser = require("body-parser");
connectMongoDb();

const cors = require('cors');

const app = express();

app.use(bodyParser.json())

app.use(cors());


app.get('/graphdata', async (req, resp) => {
    try {
        // const data = await graphSchema.find();
        const data = [
            {
                "Month": "Jan",
                "Primary product": 20,
                "Secondary product": 19
            },
            {
                "Month": "Feb",
                "Primary product": 14,
                "Secondary product": 14
            },
            {
                "Month": "Mar",
                "Primary product": 25,
                "Secondary product": 22
            },
            {
                "Month": "Apr",
                "Primary product": 16,
                "Secondary product": 14
            },
            {
                "Month": "May",
                "Primary product": 18,
                "Secondary product": 16
            },
            {
                "Month": "Jun",
                "Primary product": 22,
                "Secondary product": 19
            },
            {
                "Month": "Jul",
                "Primary product": 19,
                "Secondary product": 15
            },
            {
                "Month": "Aug",
                "Primary product": 15,
                "Secondary product": 14
            },
            {
                "Month": "Sep",
                "Primary product": 12,
                "Secondary product": 10
            },
            {
                "Month": "Oct",
                "Primary product": 16,
                "Secondary product": 12
            },
            {
                "Month": "Nov",
                "Primary product": 14,
                "Secondary product": 12
            },
            {
                "Month": "Dec",
                "Primary product": 17,
                "Secondary product": 16
            }
        ];
        if (data) {
            resp.status(200).json(data);
        }
    } catch (err) {
        resp.status(500).json({ err: "Failed to get data" })
    }
})

app.listen(PORT, () => {
    console.log(`running in port ${PORT}`)
})
