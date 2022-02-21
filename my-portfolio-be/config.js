"use strict";

require("dotenv").config();
const colors = require('colors');
colors.enable();

const SECRET_KEY = process.env.SECRET_KEY || "portfolio-secret-key";
const PORT = process.env.PORT || 3001;

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "myportfolio_test"
        : process.env.DATABASE_URL || "myportfolio";
};

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 14;

console.log("MyPortfolio Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---".green);

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
    BCRYPT_WORK_FACTOR
};