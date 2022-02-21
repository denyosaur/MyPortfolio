"use strict";

const db = require("../db");

const HelperFunctions = require("../helper/helpers");
const { BadRequestError } = require("../errors/expressErrors");

class Projects {
    constructor(id, projectName, projectUrl, githubUrl1, githubUrl2, projectImageUrl, projectDescriptions) {
        this.id = id;
        this.projectName = projectName;
        this.projectUrl = projectUrl;
        this.githubUrl1 = githubUrl1;
        this.githubUrl2 = githubUrl2;
        this.projectImageUrl = projectImageUrl;
        this.projectDescriptions = projectDescriptions;
    }

    /* Get All Projects
    */
    static async getAllProjects() {
        const res = await db.query(`SELECT id,
                                           project_name AS "projectName",
                                           project_url AS "projectUrl",
                                           github_url1 AS "githubUrl1",
                                           github_url2 AS "githubUrl2",
                                           project_image_url AS "projectImageUrl",
                                           project_descriptions AS "projectDescriptions"
                                    FROM projects`);

        const projectsArray = res.rows.map(project => {
            return new Projects(project.id, project.projectName, project.projectUrl, project.githubUrl1, project.githubUrl2, project.projectImageUrl, project.projectDescriptions);
        })

        return projectsArray;
    }

    /* Create Projects
    */
    static async addProject(newProjectData) {
        const res = await db.query(`INSERT INTO projects
                                    (project_name, project_url, github_url1, github_url2, project_image_url, project_descriptions)
                                    VALUES ($1, $2, $3, $4, $5, $6)
                                    RETURNING id, 
                                              project_name AS "projectName",
                                              project_url AS "projectUrl",
                                              github_url1 AS "githubUrl1",
                                              github_url2 AS "githubUrl2",
                                              project_image_url AS "projectImageUrl",
                                              project_descriptions AS "projectDescriptions"`,
            [newProjectData.projectName, newProjectData.projectUrl, newProjectData.githubUrl1, newProjectData.githubUrl2, newProjectData.projectImageUrl, newProjectData.projectDescriptions]);

        return new Projects(res.rows[0].id, res.rows[0].projectName, res.rows[0].projectUrl, res.rows[0].githubUrl1, res.rows[0].githubUrl2, res.rows[0].projectImageUrl, res.rows[0].projectDescriptions);
    }

    static async getProject(id) {
        const res = await db.query(`SELECT id,
                                           project_name AS "projectName",
                                           project_url AS "projectUrl",
                                           github_url1 AS "githubUrl1",
                                           github_url2 AS "githubUrl2",
                                           project_image_url AS "projectImageUrl",
                                           project_descriptions AS "projectDescriptions"
                                    FROM projects
                                    WHERE id = $1`, [id]);

        return new Projects(res.rows[0].id, res.rows[0].projectName, res.rows[0].projectUrl, res.rows[0].githubUrl1, res.rows[0].githubUrl2, res.rows[0].projectImageUrl, res.rows[0].projectDescriptions);
    }

    /* Update Project Info
    */
    static async updateProjectInfo(projectIdtoUpdate, updateData) {
        const { setCols, values } = await HelperFunctions.sqlUpdateHelper(
            updateData,
            {
                projectName: "project_name",
                projectUrl: "project_url",
                githubUrl1: "github_url1",
                githubUrl2: "github_url2",
                projectImageUrl: "project_image_url",
                projectDescriptions: "project_descriptions"
            }
        );
        const IdIndex = values.length + 1;

        const res = await db.query(`UPDATE projects
                                    SET ${setCols}
                                    WHERE id = $${IdIndex}
                                    RETURNING id, 
                                              project_name AS "projectName",
                                              project_url AS "projectUrl",
                                              github_url1 AS "githubUrl1",
                                              github_url2 AS "githubUrl2",
                                              project_image_url AS "projectImageUrl",
                                              project_descriptions AS "projectDescriptions"`,
            [...values, projectIdtoUpdate]);

        if (res.rows[0]) {
            return new Projects(res.rows[0].projectName, res.rows[0].projectUrl, res.rows[0].githubUrl1, res.rows[0].githubUrl2, res.rows[0].projectImageUrl, res.rows[0].projectDescriptions);
        } else {
            throw new BadRequestError("Project not found.");
        }
    }

    /* Delete Project
    */
    static async deleteProject(id) {
        const res = await db.query(`DELETE
                                    FROM projects
                                    WHERE id = $1
                                    RETURNING id AS "deletedId"`, [id]);
        if (res.rows[0]) {
            return `${res.rows[0].deletedId} has been deleted.`;
        } else {
            throw new BadRequestError("Project not found.");
        }
    }
};

module.exports = Projects;