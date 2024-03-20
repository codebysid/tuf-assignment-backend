const { Router } = require("express");
const { saveCodeSubmission, readCodeSubmissions } = require("../controller/codeSubmission.controller");

const router = Router()

router.route("/save").post(saveCodeSubmission)
router.route("/read").get(readCodeSubmissions)

module.exports = router
