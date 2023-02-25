const express = require("express");

const listController = require("../controllers/lists");

const router = express.Router();
// add cors to allow cross origin requests
const cors = require("cors");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
router.use(cors(corsOptions));
router.get("/lists", listController.getLists);
router.post("/lists", listController.createList);
router.get("/lists/:listId", listController.getList);
router.put("/lists/:listId", listController.updateList);
router.delete("/lists/:listId", listController.deleteList);

module.exports = router;
