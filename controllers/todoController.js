const Todo = require("../models/todo");
const { StatusCodes } = require("http-status-codes");

const newTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(StatusCodes.CREATED).json({ success: true, todo: todo });
  } catch (error) {
    console.log(error);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(StatusCodes.OK).json({ success: true, todo: todos });
  } catch (error) {
    console.log(error);
  }
};

const getATodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID })
    if (!todo) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Resource not found!" });
    }
    res.status(StatusCodes.OK).json({ success: true, todo: todo });
  } catch (error) {
    console.log(error);
  }
};

const updateATodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
    });
    if (!todo) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Resource not found!" });
    }
    res.status(StatusCodes.OK).json({ success: true, todo: todo });
  } catch (error) {
    console.log(error)
  }
};

const deleteATodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: todoID });
    if (!todo) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Resource not found!" });
    }
    res.status(StatusCodes.OK).json({ success: true, message: `${todo.title} has been deleted successfully` });
  } catch (error) {
    console.log(error)
  }
};

module.exports = { newTodo, getAllTodos, getATodo, updateATodo, deleteATodo };
