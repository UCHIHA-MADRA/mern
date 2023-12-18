import express from 'express'
const router = express.Router()
import {TaskController} from "./../controllers/index.js";


// router.get("/",(req,res)=>{})

// router.post("/",(req,res)=>{})

// router.route("/")
// .get((req,res)=>{})
// .post((req,res)=>{})


//http://localhost:5000/api/v1/task/:id


router.route("/")
.get((req,res)=>{})
.post(TaskController.AddTask)


router.route("/:id")
.put((req, res) => {})
.delete((req, res) => {})


export default router