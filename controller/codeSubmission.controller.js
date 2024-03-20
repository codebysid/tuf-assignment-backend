const { createConnection } = require("mysql2")
const { db } = require("../utils/connectToMysql")
const { readSubmissionsQuery, saveToSqlQuery } = require("../queries/codeSubmission")

async function saveCodeSubmission(req, res) {
  const { username, sourceCode, codeLanguage, stdIn } = req.body
  if (!username || !sourceCode || !codeLanguage) throw new Error("Details required")
  try {
    createConnection(db).query(saveToSqlQuery, [username, codeLanguage, sourceCode, stdIn], (err) => {
      if (err) throw new Error(err)
      return res.status(200).json({ msg: "saved" })
    })
  } catch (err) {
    throw new Error(err)
  }
}

async function readCodeSubmissions(req, res) {
  try {
    createConnection(db).query(readSubmissionsQuery, (err, result) => {
      if (err) throw new Error(err.message)
      res.json({ msg: "Done", data: result })
    })
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  saveCodeSubmission,
  readCodeSubmissions
}
