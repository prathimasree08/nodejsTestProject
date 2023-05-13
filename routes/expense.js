const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expense");

router.get("/", expenseController.getUsers);
router.post("/user", expenseController.postUser);
router.delete("/delete/:id", expenseController.deleteUser);


module.exports = router;