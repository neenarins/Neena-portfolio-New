/* 
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already. 
*/

CREATE DATABASE  `d2b11c0cpmk1oedy`;
USE `d2b11c0cpmk1oedy`;

CREATE TABLE `users` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 32) NOT NULL,
	`user_name` VARCHAR( 32 ) NOT NULL,
	`sex` VARCHAR( 2 ) NOT NULL,
	`age` VARCHAR(11) NOT NULL,
	`location` VARCHAR(32) NOT NULL,
	`bio` VARCHAR(256) NOT NULL,
	'pic' VARCHAR(128) NOT NULL,
	'dev' VARCHAR(16) NOT NULL,
	'devPref' VARCHAR(16) NOT NULL,
	'sexPref' VARCHAR(16) NOT NULL,

	PRIMARY KEY ( `id` ) );
    
show databases;
use sensodx_users_local;

SELECT * FROM users;

ALTER TABLE users
ADD preferences JSON NOT NULL;
