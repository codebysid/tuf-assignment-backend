require('dotenv').config()
const express = require("express")
const codeSubmissionRouter = require("./router/codeSubmissions.router")
const cors = require("cors")
const PORT = 8000

const app = express()

app.use(cors({
  origin: ["https://codemit.vercel.app/", "https://codemit.vercel.app"],
  optionsSuccessStatus: 200,
  credentials: true,
}))

app.use(express.json())

app.use("/api/codesubmission", codeSubmissionRouter)

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
