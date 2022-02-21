const express = require("express");
const router = new express.Router();

const Projects = require("../models/projects");

const Middleware = require("../middleware/middleware");

const HelperFunctions = require("../helper/helpers");
const projectsNew = require("../schemas/projectsNew.json");
const projectsUpdate = require("../schemas/projectsUpdate.json");

router.get("/", async function (req, res, next) {
    try {
        const projectsInfo = await Projects.getAllProjects();

        return res.status(200).json({ projectsInfo });
    } catch (error) {
        return next(error);
    }
});

router.post("/add-project", Middleware.ensureAdmin, async function (req, res, next) {
    try {
        HelperFunctions.validateJson(req.body, projectsNew);

        const newProjectData = req.body;
        console.log(newProjectData)
        const newProject = await Projects.addProject(newProjectData);

        return res.status(201).json({ newProject });
    } catch (error) {
        return next(error);
    }
});

router.patch("/update-project/:projectIdtoUpdate", Middleware.ensureAdmin, async function (req, res, next) {
    try {
        HelperFunctions.validateJson(req.body, projectsUpdate);

        const { projectIdtoUpdate } = req.params;

        const updatedProjectData = await Projects.updateProjectInfo(projectIdtoUpdate, req.body);

        return res.status(200).json({ updatedProjectData });
    } catch (error) {
        return next(error);
    }
});

router.delete("/delete-project/:projectIdToDelete", Middleware.ensureAdmin, async function (req, res, next) {
    try {
        const { projectIdToDelete } = req.params;

        const deletedProjectData = await Projects.deleteProject(projectIdToDelete);

        return res.status(200).json({ deletedProjectData });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;