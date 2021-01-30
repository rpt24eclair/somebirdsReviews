-- mysql
-- CREATE USER 'student'@'localhost';
-- GRANT ALL ON *.* TO 'student'@'localhost';
-- -- circleci student account
-- CREATE USER 'student'@'127.0.0.1';

--postgres
CREATE ROLE student;
ALTER ROLE student CREATEROLE CREATEDB;
ALTER ROLE student LOGIN;