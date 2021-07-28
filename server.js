// old syntax
// const express = require("express");
// type: module
import express from "express";
import cors from "cors"
import morgan from "morgan";

const app = express()
const PORT = process.env.PORT || 4567;

// gives acess to req.body
app.use(express.json())
app.use(cors());
// change after deploy and we know everything is working"tiny
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("<h1>hello,world</h1>"))

app.listen(PORT, console.log(`connected to port: ${PORT}`))