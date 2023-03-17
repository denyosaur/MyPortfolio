const express = require("express");

const router = new express.Router();

const Info = require("../models/info");

const Middleware = require("../middleware/middleware");

const { validateJson } = require("../helper/helpers");
const infoUpdate = require("../schemas/infoUpdate.json");

router.get("/", async function (req, res, next) {
  try {
    const info = await Info.getInfo(1);

    return res.status(200).json({ info });
  } catch (error) {
    return next(error);
  }
});

router.patch("/update-info", Middleware.ensureAdmin, async function (req, res, next) {
  try {
    validateJson(req.body, infoUpdate);

    const info = await Info.updateInfo(1, req.body);

    return res.status(200).send({ info });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
