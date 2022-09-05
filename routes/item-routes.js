const express = require("express");
const router = express.Router();

const { getAllItems, getSingleItem, createItem, updateItem, deleteItem } = require("../controllers/item-controllers.js");

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getSingleItem).put(updateItem).delete(deleteItem);

module.exports = router;
