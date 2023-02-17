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
    about VARCHAR(600)
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
