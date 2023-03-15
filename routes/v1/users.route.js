const express = require("express");
const { getAllUsers, getRandomUser, saveUser, updateUser, updateMultipleUser } = require("../../controllers/users.controller");
const router = express.Router();

router
.route("/all")
.get(getAllUsers)

router
.route('/random')
.get(getRandomUser)

router
.route('/save')
.post(saveUser)

router
.route('/update/:id')
.patch(updateUser)

router
.route('/bulk-update')
.patch(updateMultipleUser)



module.exports = router;
