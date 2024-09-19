CREATE SCHEMA class2;

CREATE TABLE IF NOT EXISTS `class2`.`students` (
  `students_id` INT NOT NULL AUTO_INCREMENT,
  `student_name` VARCHAR(45) NOT NULL,
  `student_surname` VARCHAR(45) NOT NULL,
  `stipend` VARCHAR(5) NULL DEFAULT 'False',
  `hourly_rate` DECIMAL(4,2) NOT NULL,
  `hours_worked` DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (`students_id`));
  
DESCRIBE students; 

INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `hourly_rate`, `hours_worked`) VALUES ('Chandre-Leigh', 'davids', '20.00', '30');
INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `stipend`, `hourly_rate`, `hours_worked`) VALUES ('Akhona', 'Mjikelo', 'True', '30.00', '40');
UPDATE `class2`.`students` SET `student_surname` = 'Davids' WHERE (`students_id` = '1');
INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `hourly_rate`, `hours_worked`) VALUES ('Marcus', 'Adonis', '30', '50');
INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `stipend`, `hourly_rate`, `hours_worked`) VALUES ('Gwiba', 'Mabandla', 'True', '25', '60');
INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `stipend`, `hourly_rate`, `hours_worked`) VALUES ('Candice', 'Keet', 'True', '15', '55');
INSERT INTO `class2`.`students` (`student_name`, `student_surname`, `stipend`, `hourly_rate`, `hours_worked`) VALUES ('Caleb', 'Okkers', 'True', '35', '70');

-- Logical Operator && || NOT 
SELECT * 
FROM class2.students 
WHERE hourly_rate <= 20 && hours_worked > 40;

SELECT * 
FROM class2.students 
WHERE hourly_rate >= 30 || student_name="Akhona";

SELECT * 
FROM class2.students 
WHERE NOT student_surname="Davids";

SELECT students_id,student_name,student_surname, ROUND(hourly_rate * hours_worked) total_income
FROM class2.students;

SELECT * 
FROM class2.students 
ORDER BY stipend,student_name 
LIMIT 3;

ALTER TABLE `class2`.`students` 
ADD COLUMN `student_age` VARCHAR(45) NULL AFTER `student_surname`;

desc students;

ALTER TABLE students 
MODIFY COLUMN `student_age` INT DEFAULT 18;

DESCRIBE students;

UPDATE `class2`.`students` SET `student_age` = '18' WHERE (`students_id` = '1');
UPDATE `class2`.`students` SET `student_age` = '23' WHERE (`students_id` = '2');
UPDATE `class2`.`students` SET `student_age` = '21' WHERE (`students_id` = '3');
UPDATE `class2`.`students` SET `student_age` = '19' WHERE (`students_id` = '4');
UPDATE `class2`.`students` SET `student_age` = '18' WHERE (`students_id` = '5');
UPDATE `class2`.`students` SET `student_age` = '23' WHERE (`students_id` = '6');

SELECT DISTINCT stipend 
FROM class2.students;

SELECT stipend 
FROM class2.students;

SELECT COUNT(student_name) AS students, stipend
FROM class2.students 
GROUP BY stipend;

SELECT * 
FROM class2.students 
WHERE student_name 
LIKE 'c%' 
ORDER BY student_name;

SELECT * 
FROM class2.students 
WHERE student_name
LIKE '%a' 
ORDER BY student_name;

