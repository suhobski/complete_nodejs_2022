const express = require("express");

const friendsController = require("../controllers/friends.controller");

const router = express.Router();

router.get("/", friendsController.getFriends);
router.post("/", friendsController.postFriends);
router.get("/:friendId", friendsController.getFriend);

module.exports = router;
