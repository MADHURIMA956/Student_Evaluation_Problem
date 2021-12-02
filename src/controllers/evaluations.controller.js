const express = require("express");

const Evaluation = require("../models/evaluations.model");

const crudController = require("./CRUD.controller");

const router = express.Router();

// USERS CRUD
router.post("", crudController.post(Evaluation));
router.get("", crudController.getAllWithTwoPopulate(Evaluation , {path:'instructor'},{path : 'topic_name'}));
router.get("/:id", crudController.getOne(Evaluation));
router.patch("/:id", crudController.updateOne(Evaluation));
router.delete("/:id", crudController.deleteOne(Evaluation));

module.exports = router;
