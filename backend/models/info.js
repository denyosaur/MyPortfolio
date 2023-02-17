"use strict";

const db = require("../db");

const HelperFunctions = require("../helper/helpers");

class Info {
  constructor(id, info, skills, about) {
    this.id = id;
    this.info = info;
    this.skills = skills;
    this.about = about;
  }

  static async getInfo(id) {
    try {
      const res = await db.query(`SELECT  id,
                                          info,
                                          skills,
                                          about
                                  FROM info
                                  WHERE id = $1`, [id]);
      const {
        info,
        skills,
        about,
      } = res.rows[0];

      return new Info(
        id,
        info,
        skills,
        about
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
        }
      );

      const index = values.length + 1;

      const res = await db.query(`UPDATE info
                                  SET ${setCols}
                                  WHERE id = $${index}
                                  RETURNING id, 
                                            info,
                                            skills,
                                            about`,
        [...values, id]);

      const {
        info,
        skills,
        about,
      } = res.rows[0];

      return new Info(
        id,
        info,
        skills,
        about
      );
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = Info;
