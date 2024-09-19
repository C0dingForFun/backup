CREATE DATABASE acousticauradb;
CREATE TABLE CustomerInfo(
customerID INT PRIMARY KEY AUTO_INCREMENT,
customerFirstName VARCHAR(50),
customerLastName VARCHAR(50),
customerCellNumber VARCHAR(10),
customerEmail VARCHAR(50),
customerCity VARCHAR(50) 
);
INSERT INTO CustomerInfo
VALUES(DEFAULT,'Marcus', 'Adonis', '0827894325', 'marcusadonis20@gmail.com', 'Cape Town'),
(DEFAULT,'Oyintanda', 'Zongwane', '0814563098', 'otzongwane@gmail.com', 'Cape Town'),
(DEFAULT,'Keegan', 'Niekerk', '0713546809', 'keeganniekerk@gmail.com', 'England');
