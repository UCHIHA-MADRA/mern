import express from "express";
import morgan from "morgan";
import Routes from "./routes/index.js"

// Use the correct case for express
const app = express();

app.use(morgan('dev'))


// routes
app.use("/api/v1",Routes)



export default app;