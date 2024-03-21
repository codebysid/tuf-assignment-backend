const { createConnection } = require("mysql2")
const { db, createTable } = require("../utils/connectToMysql")
const { readSubmissionsQuery, saveToSqlQuery } = require("../queries/codeSubmission")

async function saveCodeSubmission(req, res) {
  const { username, sourceCode, codeLanguage, stdIn } = req.body
  if (!username || !sourceCode || !codeLanguage) throw new Error("Details required")
  try {
    const status = await createTable()
    if (!status) {
      console.log("error in status of table in controllers")
      return
    }
    const connection = createConnection(db)
    connection.query(saveToSqlQuery, [username, codeLanguage, sourceCode, stdIn], (err) => {
      connection.end()
      if (err) {
        console.log(err)
        return res.status(402)
      }
      return res.status(200).json({ msg: "saved" })
    })
  } catch (err) {
    console.log(err)
    return res.status(402)
  }
}

async function readCodeSubmissions(req, res) {
  try {
    const status = await createTable()
    if (!status) {
      console.log("error in status of table in controllers")
      return
    }
    const connection = createConnection(db)
    connection.query(readSubmissionsQuery, (err, result) => {
      connection.end()
      if (err) {
        console.log(err)
        return res.status(402)
      }
      return res.json({ msg: "Done", data: result }).status(200)
    })
  } catch (err) {
    console.log(err.message)
    return res.status(402)
  }
}

module.exports = {
  saveCodeSubmission,
  readCodeSubmissions
}
