const saveToSqlQuery = `INSERT INTO code_submissions (username,code_language,source_code,stdIn) VALUES (?,?,?,?);`


const readSubmissionsQuery = 'SELECT * FROM code_submissions'

module.exports = { saveToSqlQuery, readSubmissionsQuery }
