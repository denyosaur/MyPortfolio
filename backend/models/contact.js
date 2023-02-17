"use strict";

const db = require("../db");

const HelperFunctions = require("../helper/helpers");

class Contact {
  constructor(id, linkedinUrl, githubProfileUrl, email, facebookUrl, instagramUrl) {
    this.id = id;
    this.linkedin_url = linkedinUrl;
    this.github_profile_url = githubProfileUrl;
    this.email = email;
    this.facebook_url = facebookUrl;
    this.instagram_url = instagramUrl;
  }

  static async getContactInfo(id) {
    try {
      const res = await db.query(`SELECT id,
                                        linkedin_url AS "linkedinUrl",
                                        github_profile_url AS "githubProfileUrl",
                                        email,
                                        facebook_url AS "facebookUrl",
                                        instagram_url AS "instagramUrl"
                                  FROM contact
                                  WHERE id = $1`, [id]);
      const {
        linkedinUrl,
        githubProfileUrl,
        email,
        facebookUrl,
        instagramUrl,
      } = res.rows[0];

      return new Contact(
        id,
        linkedinUrl,
        githubProfileUrl,
        email,
        facebookUrl,
        instagramUrl,
      );
    } catch (err) {
      console.log(err);
    }
  }

  static async updateContactInfo(id, dataToUpdate) {
    try {
      const { setCols, values } = await HelperFunctions.sqlUpdateHelper(
        dataToUpdate,
        {
          linkedinUrl: "linkedin_url",
          githubProfileUrl: "github_profile_url",
          email: "email",
          facebookUrl: "facebook_url",
          instagramUrl: "instagram_url"
        }
      );

      const contactIndex = values.length + 1;

      const res = await db.query(`UPDATE contact
                                  SET ${setCols}
                                  WHERE id = $${contactIndex}
                                  RETURNING id, 
                                            linkedin_url AS "linkedinUrl",
                                            github_profile_url AS "githubProfileUrl",
                                            email AS "email",
                                            facebook_url AS "facebookUrl"
                                            instagram_url AS "instagramUrl"`,
        [...values, id]);
      const {
        linkedinUrl,
        githubProfileUrl,
        email,
        facebookUrl,
        instagramUrl,
      } = res.rows[0];

      return new Contact(
        id,
        linkedinUrl,
        githubProfileUrl,
        email,
        facebookUrl,
        instagramUrl,
      );
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = Contact;