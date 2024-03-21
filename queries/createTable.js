const createCodeSubmissionTableQuery = `CREATE TABLE code_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    code_language ENUM('C++', 'Java', 'JavaScript', 'Python') NOT NULL,
    stdin TEXT NOT NULL,
    source_code TEXT NOT NULL,
    submission_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`


module.exports = { createCodeSubmissionTableQuery }
