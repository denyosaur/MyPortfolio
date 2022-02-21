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
        const res = await db.query(`SELECT id,
                                           linkedin_url AS "linkedinUrl",
                                           github_profile_url AS "githubProfileUrl",
                                           email,
                                           facebook_url AS "facebookUrl",
                                           instagram_url AS "instagramUrl"
                                    FROM contact
                                    WHERE id = $1`, [id]);

        return new Contact(res.rows[0].id, res.rows[0].linkedinUrl, res.rows[0].githubProfileUrl, res.rows[0].email, res.rows[0].facebookUrl, res.rows[0].instagramUrl);
    }

    static async updateContactInfo(id, dataToUpdate) {

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
                                              facebook_url AS "facebookUrl",
                                              instagram_url AS "instagramUrl"`,
            [...values, id]);

        return new Contact(res.rows[0].id, res.rows[0].linkedinUrl, res.rows[0].githubProfileUrl, res.rows[0].email, res.rows[0].facebookUrl, res.rows[0].instagramUrl);
    }
};

module.exports = Contact;