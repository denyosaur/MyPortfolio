"use strict";

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config")
const { UnauthorizedError } = require("../errors/expressErrors");

class Middleware {
    /*
    Middleware for authenticating user.
    if token is given, verify using jwt. If valid, store token payload on res.locals.
    not an error if there is no token.
    Store username and isAdmin for future authorization.
    */
    static authenticateJWT(req, res, next) {
        try {
            const authHeader = req.headers && req.headers.token;

            if (authHeader) {
                const token = authHeader.replace(/^[Bb]earer /, "").trim();

                res.locals.user = jwt.verify(token, SECRET_KEY);
            }
            return next();
        } catch (error) {
            return next(error);
        };
    }

    /*
    Middleware for checking if user is logged in and is an admin. If not, throw UnauthorizedError.
    check if user is logged in, and then check if user is admin
    */
    static ensureAdmin(req, res, next) {
        try {
            const user = res.locals.user;

            if (!user || !user.isAdmin) {
                throw new UnauthorizedError();
            }
            return next();
        } catch (error) {
            return next(error);
        };
    };
};

module.exports = Middleware;