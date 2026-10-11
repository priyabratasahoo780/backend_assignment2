const express = require('express');

const {GetUsers, SingleUsers, CreateUsers, PatchUpdates, PutUpdates, Deleteusers}  = require('../controller/usersControllers');

const router = express.Router();


router.get("/", GetUsers);
router.get("/:id", SingleUsers);
router.post("/",CreateUsers);
router.put("/:id", PutUpdates);
router.patch("/:id",PatchUpdates);
router.delete("/:id",Deleteusers);


module.exports = router;