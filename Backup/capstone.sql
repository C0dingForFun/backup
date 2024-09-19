CREATE TABLE `bfw0m7qriwjrhtlcuv1w`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_surname` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `user_role` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`));
ALTER TABLE `bfw0m7qriwjrhtlcuv1w`.`users` 
ADD COLUMN `image` TEXT NOT NULL AFTER `password`;
UPDATE `bfw0m7qriwjrhtlcuv1w`.`users` SET `image` = 'https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png' WHERE (`user_id` = '1');
INSERT INTO `bfw0m7qriwjrhtlcuv1w`.`users` (`user_name`, `user_surname`, `age`, `user_role`, `username`, `password`, `image`) VALUES ('Zen Lee', 'George', '21', 'user', 'zenny', 'Batman', 'https://c0dingforfun.github.io/portfolioimg/Images/Testimonials/Zenny.jpg');

INSERT INTO `bfw0m7qriwjrhtlcuv1w`.`users` (`user_id`, `user_name`, `user_surname`, `age`, `user_role`, `username`, `password`) VALUES ('1', 'Gwiba', 'Mabandla', '19', 'admin', 'gwigster', 'M@6AND1A');

SELECT * FROM users;

CREATE TABLE `bfw0m7qriwjrhtlcuv1w`.`rooms` (
  `room_id` INT NOT NULL AUTO_INCREMENT,
  `room_name` VARCHAR(45) NOT NULL,
  `room_category` VARCHAR(45) NOT NULL,
  `room_description` VARCHAR(70) NOT NULL,
  `room_package` VARCHAR(45) NOT NULL,
  `price` DECIMAL(18,2) NOT NULL,
  `room_facility1` VARCHAR(45) NOT NULL,
  `room_facility2` VARCHAR(45) NOT NULL,
  `room_facility3` VARCHAR(45) NOT NULL,
  `room_facility4` VARCHAR(45) NOT NULL,
  `check_in` DATETIME NOT NULL,
  `check_out` DATETIME NOT NULL,
  `pets` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`room_id`));

ALTER TABLE `bfw0m7qriwjrhtlcuv1w`.`rooms` 
ADD COLUMN `image` TEXT NOT NULL AFTER `pets`,
ADD COLUMN `subImage1` TEXT NOT NULL AFTER `image`,
ADD COLUMN `subImage2` TEXT NOT NULL AFTER `subImage1`,
ADD COLUMN `subImage3` TEXT NOT NULL AFTER `subImage2`,
CHANGE COLUMN `check_in` `check_in` DATETIME NULL ,
CHANGE COLUMN `check_out` `check_out` DATETIME NULL ;
ALTER TABLE `bfw0m7qriwjrhtlcuv1w`.`rooms` 
CHANGE COLUMN `room_description` `room_description` VARCHAR(180) NOT NULL ;


CREATE TABLE `bfw0m7qriwjrhtlcuv1w`.`booked` (
  `booked_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`booked_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `bfw0m7qriwjrhtlcuv1w`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `room_id`
    FOREIGN KEY (`room_id`)
    REFERENCES `bfw0m7qriwjrhtlcuv1w`.`rooms` (`room_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
