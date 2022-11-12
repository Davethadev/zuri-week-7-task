const express = require("express");
const router = express.Router();

const { newTodo, getAllTodos, getATodo, updateATodo, deleteATodo } = require("../controllers/todoController");

router.post("/", newTodo);
router.get("/", getAllTodos);
router.get("/:id", getATodo);
router.patch("/:id", updateATodo);
router.delete("/:id", deleteATodo);

module.exports = router;
