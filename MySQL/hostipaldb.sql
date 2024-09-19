CREATE DATABASE hospitaldb;
USE hospitaldb;
CREATE TABLE Dentists(
dentistID VARCHAR(10) PRIMARY KEY,
firstName VARCHAR(15) DEFAULT 'Trashboat',
lastName VARCHAR(15),
dentistAge INT CHECK(dentistAge > 24),
contactNumb VARCHAR(10),
practiceNumb VARCHAR(11)
);

INSERT INTO Dentists(dentistID, firstName, lastName, dentistAge, contactNumb, practiceNumb)
VALUES('BNF450002', 'Boniface', 'Dr Simons', 30, '0772563698', '1005267888'),
('GHT5623', 'Betty', 'James', 25, '0213214658','546456'),
('JP100', 'Jason', 'Peter', 38, '0794506453', '0794506453'),
('MS5600012', 'Sarah', 'Moosa', 37, '0115062089', '1254888052'),
('RAY800203', 'Raymond', 'Okereke', 37, '0137228936', '1042455028'),
('TM5892009', 'Tebogo', 'Mphahlele', 26, '0122220781', '1254052077');

SELECT * FROM Dentists;