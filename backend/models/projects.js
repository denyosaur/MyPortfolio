"use strict";

const db = require("../db");

const HelperFunctions = require("../helper/helpers");
const { BadRequestError } = require("../errors/expressErrors");

class Projects {
    constructor(id, projectName, projectUrl, githubUrl, projectImageUrl, projectDescriptions, tools) {
        this.id = id;
        this.projectName = projectName;
        this.projectUrl = projectUrl;
        this.githubUrl = githubUrl;
        this.projectImageUrl = projectImageUrl;
        this.projectDescriptions = projectDescriptions;
        this.tools = tools;
    }

    /* Get All Projects
    */
    static async getAllProjects() {
        try {
            const res = await db.query(`SELECT id,
                                                project_name AS "projectName",
                                                project_url AS "projectUrl",
                                                github_url AS "githubUrl",
                                                project_image_url AS "projectImageUrl",
                                                project_descriptions AS "projectDescriptions",
                                                tools
                                        FROM projects`);

            const projectsArray = res.rows.map(({
                id,
                projectName,
                projectUrl,
                githubUrl,
                projectImageUrl,
                projectDescriptions,
                tools,
            }) => {
                return new Projects(
                    id,
                    projectName,
                    projectUrl,
                    githubUrl,
                    projectImageUrl,
                    projectDescriptions,
                    tools,
                );
            })

            return projectsArray;
        } catch (err) {
            console.log(err);
        }
    }

    /* Create Projects
    */
    static async addProject(newProjectData) {
        try {
            const res = await db.query(`INSERT INTO projects
            (project_name, project_url, github_url, project_image_url, project_descriptions)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, 
                      project_name AS "projectName",
                      project_url AS "projectUrl",
                      github_url AS "githubUrl",
                      project_image_url AS "projectImageUrl",
                      project_descriptions AS "projectDescriptions",
                      tools`,
                [newProjectData.projectName, newProjectData.projectUrl, newProjectData.githubUrl, newProjectData.projectImageUrl, newProjectData.projectDescriptions]);
            const {
                id,
                projectName,
                projectUrl,
                githubUrl,
                projectImageUrl,
                projectDescriptions,
                tools,
            } = res.rows[0];
            return new Projects(
                id,
                projectName,
                projectUrl,
                githubUrl,
                projectImageUrl,
                projectDescriptions,
                tools,
            );
        } catch (err) {
            conosle.log(err);
        }

    }

    static async getProject(id) {
        try {
            const res = await db.query(`SELECT id,
            project_name AS "projectName",
            project_url AS "projectUrl",
            github_url AS "githubUrl",
            project_image_url AS "projectImageUrl",
            project_descriptions AS "projectDescriptions",
            tools
     FROM projects
     WHERE id = $1`, [id]);
            const {
                projectName,
                projectUrl,
                githubUrl,
                projectImageUrl,
                projectDescriptions,
                tools,
            } = res.rows[0];
            return new Projects(
                id,
                projectName,
                projectUrl,
                githubUrl,
                projectImageUrl,
                projectDescriptions,
                tools,
            );
        } catch (err) {
            console.log(err);
        }
    }

    /* Update Project Info
    */
    static async updateProjectInfo(projectIdtoUpdate, updateData) {
        try {
            const { setCols, values } = await HelperFunctions.sqlUpdateHelper(
                updateData,
                {
                    projectName: "project_name",
                    projectUrl: "project_url",
                    githubUrl: "github_url",
                    projectImageUrl: "project_image_url",
                    projectDescriptions: "project_descriptions",
                    tools: "tools;"
                }
            );
            const IdIndex = values.length + 1;

            const res = await db.query(`UPDATE projects
                                        SET ${setCols}
                                        WHERE id = $${IdIndex}
                                        RETURNING id, 
                                                  project_name AS "projectName",
                                                  project_url AS "projectUrl",
                                                  github_url AS "githubUrl",
                                                  project_image_url AS "projectImageUrl",
                                                  project_descriptions AS "projectDescriptions",
                                                  tools`,
                [...values, projectIdtoUpdate]);

            if (res.rows[0]) {
                const {
                    projectName,
                    projectUrl,
                    githubUrl,
                    projectImageUrl,
                    projectDescriptions,
                    tools,
                } = res.rows[0];
                return new Projects(
                    id,
                    projectName,
                    projectUrl,
                    githubUrl,
                    projectImageUrl,
                    projectDescriptions,
                    tools,
                );
            } else {
                throw new BadRequestError("Project not found.");
            }
        } catch (err) {
            console.log(err);
        }

    }

    /* Delete Project
    */
    static async deleteProject(id) {
        try {
            const res = await db.query(`DELETE
            FROM projects
            WHERE id = $1
            RETURNING id AS "deletedId"`, [id]);
            if (res.rows[0]) {
                return `${res.rows[0].deletedId} has been deleted.`;
            } else {
                throw new BadRequestError("Project not found.");
            }
        } catch (err) {
            console.log(err);
        }

    }
};

module.exports = Projects;