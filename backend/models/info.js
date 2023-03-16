"use strict";

const db = require("../db");

const HelperFunctions = require("../helper/helpers");

class Info {
  constructor(id, info, skills, about, resumeLink) {
    this.id = id;
    this.info = info;
    this.skills = skills;
    this.about = about;
    this.resumeLink = resumeLink;
  }

  static async getInfo(id) {
    try {
      const res = await db.query(`SELECT  id,
                                          info,
                                          skills,
                                          about,
                                          resumeLink
                                  FROM info
                                  WHERE id = $1`, [id]);
      const {
        info,
        skills,
        about,
        resumeLink,
      } = res.rows[0];
      console.log(resumeLink)
      return new Info(
        id,
        info,
        skills,
        about,
        resumeLink,
      );
    } catch (err) {
      console.log(err);
    }
  }

  static async updateInfo(id, dataToUpdate) {
    try {
      const { setCols, values } = await HelperFunctions.sqlUpdateHelper(
        dataToUpdate,
        {
          info: "info",
          skills: "skills",
          about: "about",
          resumeLink: "resumeLink",
        }
      );

      const index = values.length + 1;

      const res = await db.query(`UPDATE info
                                  SET ${setCols}
                                  WHERE id = $${index}
                                  RETURNING id, 
                                            info,
                                            skills,
                                            about,
                                            resumeLink`,
        [...values, id]);

      const {
        info,
        skills,
        about,
        resumeLink,
      } = res.rows[0];

      return new Info(
        id,
        info,
        skills,
        about,
        resumeLink
      );
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = Info;
