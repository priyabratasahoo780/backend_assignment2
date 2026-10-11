const express = require('express');

const { GetUser,
  SingleUser,
  CreateUser,
  UpdateUser,
  PatchUser,
  Deleteuser} = require('../controllers/userController');

  const router = express.Router();

  router.get("/", GetUser);
  router.get("/:id", SingleUser);
  router.post("/",  CreateUser);
  router.put("/:id",  UpdateUser);
  router.delete("/:id",  Deleteuser);

  module.exports = router;
