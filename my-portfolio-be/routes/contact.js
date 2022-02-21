const express = require("express");

const router = new express.Router();

const Contact = require("../models/contact");

const Middleware = require("../middleware/middleware");

const HelperFunctions = require("../helper/helpers");
const userContactInfoUpdate = require("../schemas/userContactInfoUpdate.json");

router.get("/", async function (req, res, next) {
    try {
        const contactInfo = await Contact.getContactInfo(1);
        console.log(contactInfo)
        return res.status(200).json({ contactInfo });
    } catch (error) {
        return next(error);
    }
});

router.patch("/update-contact", Middleware.ensureAdmin, async function (req, res, next) {
    try {
        HelperFunctions.validateJson(req.body, userContactInfoUpdate);

        const contactInfo = await Contact.updateContactInfo(1, req.body);

        return res.status(200).send({ contactInfo });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;