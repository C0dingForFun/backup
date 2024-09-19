CREATE TABLE `btuei3ereftidz6hdl0w`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_surname` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `user_role` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`));
ALTER TABLE `btuei3ereftidz6hdl0w`.`users` 
ADD COLUMN `image` TEXT NOT NULL AFTER `password`;
INSERT INTO `btuei3ereftidz6hdl0w`.`users` (`user_name`, `user_surname`, `age`, `user_role`, `username`, `password`, `image`) VALUES ('Zen Lee', 'George', '21', 'user', 'zenny', 'Batman', 'https://c0dingforfun.github.io/portfolioimg/Images/Testimonials/Zenny.jpg');
INSERT INTO `btuei3ereftidz6hdl0w`.`users` (`user_id`, `user_name`, `user_surname`, `age`, `user_role`, `username`, `password`, `image`) VALUES ('1', 'Gwiba', 'Mabandla', '19', 'admin', 'gwigster', 'qwerty', 'https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png');

SELECT * FROM users;

CREATE TABLE `btuei3ereftidz6hdl0w`.`rooms` (
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

ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
ADD COLUMN `image` TEXT NOT NULL AFTER `pets`,
ADD COLUMN `subImage1` TEXT NOT NULL AFTER `image`,
ADD COLUMN `subImage2` TEXT NOT NULL AFTER `subImage1`,
ADD COLUMN `subImage3` TEXT NOT NULL AFTER `subImage2`,
CHANGE COLUMN `check_in` `check_in` DATETIME NULL ,
CHANGE COLUMN `check_out` `check_out` DATETIME NULL ;
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
CHANGE COLUMN `room_description` `room_description` VARCHAR(180) NOT NULL ;
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
DROP COLUMN `room_facility4`,
DROP COLUMN `room_facility3`,
DROP COLUMN `room_facility2`,
DROP COLUMN `room_facility1`,
ADD COLUMN `subImages4` TEXT NOT NULL AFTER `subImage3`;
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
CHANGE COLUMN `room_description` `room_description` VARCHAR(150) NOT NULL ;
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
CHANGE COLUMN `room_name` `room_name` VARCHAR(55) NOT NULL ,
CHANGE COLUMN `room_category` `room_category` VARCHAR(55) NOT NULL ,
CHANGE COLUMN `pets` `pets` VARCHAR(50) NOT NULL ;

INSERT INTO `btuei3ereftidz6hdl0w`.`rooms` (`room_name`, `room_category`, `room_description`, `room_package`, `price`, `pets`, `image`, `subImage1`, `subImage2`, `subImage3`) VALUES ('The Home Standard Twin', 'Twin Room', 'At 43m², our modern Home Standard suite features an ensuite bathroom with a spacious shower, plush Twin beds, a relaxing lounge area and a personal workstation. Enjoy city views from your private balcony.', 'Single', '2185.00', 'Only dogs and cats allowed', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room2/room2.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room2/livin_room.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room2/bathroom.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room2/plant.jpg');
INSERT INTO `btuei3ereftidz6hdl0w`.`rooms` (`room_name`, `room_category`, `room_description`, `room_package`, `price`, `pets`, `image`, `subImage1`, `subImage2`, `subImage3`) VALUES ('The Home Deluxe', 'Suite', 'At 56m², this extra-roomy suite features an ensuite bathroom with a spacious shower and/or bath, a plush king-size bed, a relaxing lounge area, and a personal dining area. ', 'Family', '2250.00', 'Only dogs and cats allowed', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room3/room3.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room3/kitchen.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room3/bathroom.jpg', 'https://c0dingforfun.github.io/capstone-images/Rooms/Room3/pool.jpg');
UPDATE `btuei3ereftidz6hdl0w`.`rooms` SET `subImage1` = 'https://c0dingforfun.github.io/capstone-images/Rooms/Room2/living_room.jpg' WHERE (`room_id` = '2');
UPDATE `btuei3ereftidz6hdl0w`.`rooms` SET `room_name` = 'Our Modern Home Standard View', `room_description` = 'Our modern Home Standard suite features an ensuite bathroom with a spacious shower, a plush king-size bed and a relaxing lounge area. Book a room with a sea view for an extra special experience.' WHERE (`room_id` = '1');
ALTER TABLE `btuei3ereftidz6hdl0w`.`users` 
CHANGE COLUMN `user_role` `user_role` VARCHAR(45) NOT NULL DEFAULT 'user' ;
UPDATE `btuei3ereftidz6hdl0w`.`rooms` SET `subImage2` = 'https://c0dingforfun.github.io/capstone-images/Rooms/Room4/view.jpg' WHERE (`room_id` = '4');
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
DROP COLUMN `check_out`,
DROP COLUMN `check_in`;
ALTER TABLE `btuei3ereftidz6hdl0w`.`rooms` 
ADD COLUMN `adults` INT NOT NULL AFTER `subImage3`,
ADD COLUMN `kids` INT NOT NULL AFTER `adults`;


CREATE TABLE `btuei3ereftidz6hdl0w`.`booked` (
  `booked_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`booked_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `room_id_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `btuei3ereftidz6hdl0w`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `room_id`
    FOREIGN KEY (`room_id`)
    REFERENCES `btuei3ereftidz6hdl0w`.`rooms` (`room_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
INSERT INTO `btuei3ereftidz6hdl0w`.`booked` (`booked_id`, `user_id`, `room_id`) VALUES ('1', '2', '2');
ALTER TABLE `btuei3ereftidz6hdl0w`.`booked` 
ADD COLUMN `check_in` DATETIME NOT NULL AFTER `room_id`,
ADD COLUMN `check_out` DATETIME NULL AFTER `check_in`,
ADD UNIQUE INDEX `room_id_UNIQUE` (`room_id` ASC) VISIBLE;
;
