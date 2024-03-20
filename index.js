require('dotenv').config()
const express = require("express")
const codeSubmissionRouter = require("./router/codeSubmissions.router")
const cors = require("cors")
const PORT = 8000

const app = express()

function setCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN,
  optionsSuccessStatus: 200,
  allowedheaders
}))

app.use(setCorsHeaders)
app.use(express.json())

app.use("/api/codesubmission", codeSubmissionRouter)

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
