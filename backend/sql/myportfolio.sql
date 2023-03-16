DROP DATABASE portfolio_be;
CREATE DATABASE portfolio_be;
\connect portfolio_be

CREATE TABLE IF NOT EXISTS contact (
    id SERIAL PRIMARY KEY,
    linkedin_url VARCHAR(50),
    github_profile_url VARCHAR(50),
    email VARCHAR(30),
    facebook_url VARCHAR(50),
    instagram_url VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS info (
    id SERIAL PRIMARY KEY,
    info VARCHAR(250),
    skills text[],
    about VARCHAR(600),
    resumeLink VARCHAR(120)
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(50),
    project_url VARCHAR(50),
    github_url VARCHAR(50),
    project_image_url VARCHAR(50),
    project_descriptions TEXT,
    tools text[]
);

CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(10) PRIMARY KEY,
    password VARCHAR(65) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO contact (linkedin_url, github_profile_url, email, facebook_url, instagram_url)
VALUES (
    'https://www.linkedin.com/in/danielkim1989/',
    'https://github.com/denyosaur',
    'danielkim1989@gmail.com',
    'https://www.facebook.com',
    'https://www.instagram.com/donniekim/'
    );

INSERT INTO info (info, skills, about, resumeLink)
VALUES (
    'Always the curious creator, I enjoy taking things apart and understanding the inner workings of computers and websites. As a web developer, I strive grow and learn all things web developement.',
    '{Javascript, React, React Native, Redux, Redux-Saga, Reselect, Styled-Components, Material-UI, HTML, CSS, Node.js, Express}',
    E'Web developer with an ever expanding skill set which includes Javascript, HTML, CSS, and SQL.\n\nAs a digital programmatic advertiser, I approach novel problems with an analytical and solution-oriented mindset. Additionally, my curious nature is a major driver in my approach to problem solving - I strive to fully comprehend the problem and its solutions.\n\nWorking in online advertising seeded my interest in programming and the inner workings of websites. After 5 years of working in online advertising, I''ve finally set off on my journey to becoming a web developer.',
    'https://drive.google.com/file/d/1VBqnegPHG7DmK0Pi4ttgHmZQxpSSFCbI/view?usp=sharing'
    );

INSERT INTO projects (project_name, project_url, github_url, project_image_url, project_descriptions, tools)
VALUES (
    'Pokecollector',
    'https://pokecollector-frontend.onrender.com/',
    'https://github.com/denyosaur/Pokecollector',
    'https://i.imgur.com/LcPpb6H.jpg',
    'Pokecollector is to practice and present my skills for both front-end and back-end. eCommerce sites are very common around the web, so I wanted to make an attempt at building one out from scratch. Although the site does not accept or use any form of real currency (the user can add as much money as they want), the site attempts to mimic the exact userflow from real ecommerce sites.',
    '{React, Express, Node, HTML, CSS}'
    ),
    (
    'Rocketnews',
    'https://rocketnews.onrender.com/login',
    'https://github.com/denyosaur/RocketNews',
    'https://i.imgur.com/xftUtpd.png',
    'Rocketnews was a practice in the implementation a full-stack web application that utilized both external and internal APIs. The front-end was designed with mobile first in mind, to create the most user friendly experience on mobile devices. Larger screen sizes were then developed in addition to the mobile first design. The back-end was created using RESTful routing conventions. Both internal and external API routing is handled by the back end.',
    '{Jquery, Bootstrap, Flask, HTML, CSS}'
    ),
    (
    'MyPortfolio',
    'https://dhkportfolio.dev/',
    'https://github.com/denyosaur/MyPortfolio',
    'https://i.imgur.com/m9TMw0n.png',
    'My Portfolio Site.',
    '{React, Redux, Reselect, Styled-Components, Express, Node}'
    );

INSERT INTO users (username, password, is_admin)
VALUES ('Daniel',
        '$2a$14$S2v8ZLY4lLf.rFwNbCxdRuFXbo0F6uBt2qVIHafT2znG.A3c4QCNC',
        TRUE),
        ('admintest',
        '$2a$14$9cRIWMAHUW0DPvr4TTReJ.vg5VLc4oRWeE3U4K9xIjADQcl5lnS2G',
        TRUE),
        ('notadmin',
        '$2a$14$NLlQh8eRgNu2j.x2AvWiAOpkeKmnzc0VslBYQVi8eORcX8nQNwTyG',
        FALSE);
