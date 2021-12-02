const express = require("express");

const Student = require("../models/students.model");

const crudController = require("./CRUD.controller");

const router = express.Router();

// StudentS CRUD
router.post("", crudController.post(Student));
router.get("", crudController.getWithOnePopulate(Student , {path:'user_id'}));
router.get("/:id", crudController.getOne(Student));
router.patch("/:id", crudController.updateOne(Student));
router.delete("/:id", crudController.deleteOne(Student));

module.exports = router;
