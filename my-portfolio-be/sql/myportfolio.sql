\echo 'Delete and recreate myportfolio db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE myportfolio;
CREATE DATABASE myportfolio;
\connect myportfolio

\i myportfolio-schema.sql
\i myportfolio-seed.sql

-- \echo 'Delete and recreate myportfolio_test db?'
-- \prompt 'Return for yes or control-C to cancel > '

-- DROP DATABASE pokecollector_test;
-- CREATE DATABASE pokecollector_test;
-- \connect pokecollector_test
