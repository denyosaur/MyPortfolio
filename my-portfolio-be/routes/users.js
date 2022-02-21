"use strict";

/* Routes for Authentication */

const express = require("express");
const router = new express.Router();

const Users = require("../models/users");

const HelperFunctions = require("../helper/helpers");
const userLogin = require("../schemas/userLogin.json");

/* POST /auth/token: {username,password} => token 
validate that the username and password are in the right format using jsonschema. if not valid, throw BadRequestError
destructure req.body object 
use authenticate method from User by passing in username and password. if incorrect password, error will be thrown
create a token with the username 
*/
router.post("/login", async function (req, res, next) {
    try {
        HelperFunctions.validateJson(req.body, userLogin);//validate username and password object schema

        //check that username exists and password is correct
        const { username, password } = req.body;

        const user = await Users.authenticate(username, password);

        return res.status(200).json({ user });
    } catch (error) {
        return next(error);
    };
});

module.exports = router;