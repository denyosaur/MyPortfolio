
const jsonschema = require("jsonschema");
const jwt = require("jsonwebtoken");

const { BadRequestError } = require("../errors/expressErrors");

const { SECRET_KEY } = require("../config");

class HelperFunctions {
    static async sqlUpdateHelper(dataToUpdate, jsToSql) {

        const keys = Object.keys(dataToUpdate);
        if (keys.length === 0) throw new BadRequestError("No Data");

        const cols = keys.map((col, idx) =>
            `"${jsToSql[col] || col}"=$${idx + 1}`,
        );

        return {
            setCols: cols.join(", "),
            values: Object.values(dataToUpdate)
        };
    }

    static async createToken(user) {
        let payload = {
            username: user.username,
            isAdmin: user.isAdmin || false,
        };
        console.log(jwt.sign(payload, SECRET_KEY))
        return jwt.sign(payload, SECRET_KEY);
    }

    static async validateJson(body, schema) {
        const validate = jsonschema.validate(body, schema);
        if (!validate.valid) {
            const errors = validate.errors.map(error => error.stack);
            throw new BadRequestError(errors);
        };

    }
};

module.exports = HelperFunctions;