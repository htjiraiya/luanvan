//--------------import module--------------------//
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./config/database";
import route from './routes/index'

try {
    //--------------config-----------------//
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //------------route------------//
    route(app)

    //--------------listen-------------------------//
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log('OK. App listening on port: ' + PORT);
    });

    connect();
} catch (err) {
    throw err
}