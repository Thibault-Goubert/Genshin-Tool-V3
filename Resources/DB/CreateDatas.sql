-- Use the GameDB database
USE GenshinToolDB
GO

SET IDENTITY_INSERT StatTypes ON;
INSERT INTO StatTypes (Id,Name)
VALUES
(1,'Flat'),
(2,'Percentage')
SET IDENTITY_INSERT StatTypes OFF;

SET IDENTITY_INSERT StatsNames ON;
INSERT INTO StatsNames (Id,Label,StatTypeId)
VALUES
(1,'HP',1),(2,'ATK',1),(3,'DEF',1),(4,'EM',1),(5,'ER',1),
(6,'Crit Rate',1),(7,'Crit DMG',1),
(8,'Healing Bonus',1),(9,'Shield Bonus',1),
(10,'Anemo DMG',1),(11,'Cryo DMG',1),
(12,'Pyro DMG',1),(13,'Electro DMG',1),(14,'Hydro DMG',1),
(17,'Geo DMG',1),(18,'Dendro DMG',1),(19,'Physical DMG',1),
(20,'HP%',2),(21,'ATK%',2),(22,'DEF%',2)
SET IDENTITY_INSERT StatsNames OFF;

SET IDENTITY_INSERT PIECES ON;
INSERT INTO PIECES (Id,Name)
VALUES
(1,'Plume'),
(2,'Flower'),
(3,'Sand'),
(4,'Goblet'),
(5,'Circlet')
SET IDENTITY_INSERT PIECES OFF;

SET IDENTITY_INSERT Elements ON;
INSERT INTO Elements (Id,Name)
VALUES
(1,'Anemo'),
(2,'Geo'),
(3,'Electro'),
(4,'Dendro'),
(5,'Hydro'),
(6,'Pyro'),
(7,'Cryo')
SET IDENTITY_INSERT Elements OFF;

SET IDENTITY_INSERT Regions ON;
INSERT INTO Regions (Id,Name)
VALUES
(1,'Mondstadt'),
(2,'Liyue'),
(3,'Inazuma'),
(4,'Sumeru'),
(5,'Fontaine'),
(6,'Natlan'),
(7,'Snezhnaya')
SET IDENTITY_INSERT Regions OFF;

SET IDENTITY_INSERT WeaponTypes ON;
INSERT INTO WeaponTypes (Id,Name)
VALUES
(1,'Sword'),
(2,'Bow'),
(3,'Polearm'),
(4,'Claymore'),
(5,'Catalyst')
SET IDENTITY_INSERT WeaponTypes OFF;

-- Insert Chars --


-- Insert Weapons --