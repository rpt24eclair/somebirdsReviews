CREATE ROLE student;
ALTER ROLE student CREATEROLE CREATEDB;
ALTER USER student WITH SUPERUSER;
ALTER ROLE student LOGIN;