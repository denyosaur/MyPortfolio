"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");

const HelperFunctions = require("../helper/helpers");

const { UnauthorizedError } = require("../errors/expressErrors");

class Users {
    constructor(username, isAdmin = false, token = false) {
        this.username = username;
        this.isAdmin = isAdmin;
        this.token = token;
    }

    static async authenticate(enteredUsername, enteredPassword) {
        const res = await db.query(
            `SELECT username,
                    password AS "hashedPassword",
                    is_admin AS "isAdmin"
             FROM users
             WHERE username = $1`,
            [enteredUsername]);

        if (res.rows[0]) {
            const isValid = await bcrypt.compare(enteredPassword, res.rows[0].hashedPassword);
            if (isValid) {
                const token = await HelperFunctions.createToken(res.rows[0]);

                return new Users(res.rows[0].username, res.rows[0].isAdmin, token);
            }
        };

        //to-do create error for this
        throw new UnauthorizedError("Invalid username/password");
    }
};

module.exports = Users;
