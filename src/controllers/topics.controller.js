const express = require("express");

const Topic = require("../models/topics.model");

const crudController = require("./CRUD.controller");

const router = express.Router();

// TopicS CRUD
router.post("", crudController.post(Topic));
router.get("", crudController.getAll(Topic));
router.get("/:id", crudController.getOne(Topic));
router.patch("/:id", crudController.updateOne(Topic));
router.delete("/:id", crudController.deleteOne(Topic));

module.exports = router;
