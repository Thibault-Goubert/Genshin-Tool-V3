-- Use the GameDB database
USE GenshinToolDB
GO

-- Insert Sex --
SET IDENTITY_INSERT Sex ON;
INSERT INTO Sex (Id,Name)
VALUES
(1,'F'),(2,'M')
SET IDENTITY_INSERT Sex OFF;

-- Insert StatTypes --
SET IDENTITY_INSERT StatTypes ON;
INSERT INTO StatTypes (Id,Name)
VALUES
(1,'Flat'),(2,'Percentage')
SET IDENTITY_INSERT StatTypes OFF;

-- Insert StatsNames --
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

-- Insert PIECES --
SET IDENTITY_INSERT PIECES ON;
INSERT INTO PIECES (Id,Name)
VALUES
(1,'Plume'),(2,'Flower'),(3,'Sand'),
(4,'Goblet'),(5,'Circlet')
SET IDENTITY_INSERT PIECES OFF;

-- Insert Elements --
SET IDENTITY_INSERT Elements ON;
INSERT INTO Elements (Id,Name)
VALUES
(1,'Anemo'),(2,'Geo'),(3,'Electro'),(4,'Dendro'),
(5,'Hydro'),(6,'Pyro'),(7,'Cryo'),(8,'Other')
SET IDENTITY_INSERT Elements OFF;

-- Insert Regions --
SET IDENTITY_INSERT Regions ON;
INSERT INTO Regions (Id,Name)
VALUES
(1,'Mondstadt'),(2,'Liyue'),(3,'Inazuma'),(4,'Sumeru'),
(5,'Fontaine'),(6,'Natlan'),(7,'Snezhnaya'),(8,'Other')
SET IDENTITY_INSERT Regions OFF;

-- Insert WeaponTypes --
SET IDENTITY_INSERT WeaponTypes ON;
INSERT INTO WeaponTypes (Id,Name)
VALUES
(1,'Sword'),(2,'Bow'),(3,'Polearm'),(4,'Claymore'),(5,'Catalyst')
SET IDENTITY_INSERT WeaponTypes OFF;

-- Insert Chars --
INSERT INTO Characters 
(Name,ElementId,RegionId,WeaponTypeId,Rarity,SexId,IsCollab)
VALUES
('Albedo',			2,1,1,5,2,0),
('Alhaitham',		4,4,1,5,2,0),
('Aloy',			7,8,2,5,1,1),
('Amber',			6,1,2,4,1,0),
('Ayaka',			7,3,1,5,1,0),
('Ayato',			5,3,1,5,2,0),
('Barbara',			5,1,5,4,1,0),
('Beidou',			3,2,4,4,1,0),
('Bennett',			6,1,1,4,2,0),
('Candace',			5,4,3,4,1,0),
('Collei',			4,4,2,4,1,0),
('Chongyun',		7,2,4,4,2,0),
('Cyno',			3,4,3,5,2,0),
('Diluc',			6,1,4,5,2,0),
('Diona',			7,1,2,4,1,0),
('Dori',			3,4,4,4,1,0),
('Eula',			7,1,4,5,1,0),
('Faruzan',			1,4,2,4,1,0),
('Fischl',			3,1,2,4,1,0),
('Ganyu',			7,2,2,5,1,0),
('Gorou',			2,3,2,4,2,0),
('Heizou',			1,3,5,4,2,0),
('Hu Tao',			6,2,3,5,1,0),
('Itto',			2,3,4,5,2,0),
('Jean',			1,1,1,5,1,0),
('Kaeya',			7,1,1,4,2,0),
('Kazuha',			1,3,1,5,2,0),
('Keqing',			3,2,1,5,1,0),
('Klee',			6,1,5,5,1,0),
('Kokomi',			5,3,5,5,1,0),
('Kujou Sara',		3,3,2,4,1,0),
('Kuki Shinobu',	3,3,1,4,1,0),
('Layla',			7,4,1,4,1,0),
('Lisa',			3,1,5,4,1,0),
('Mona',			5,1,5,5,1,0),
('Nahida',			4,4,5,5,1,0),
('Ningguang',		2,2,5,4,1,0),
('Nilou',			5,4,1,5,1,0),
('Noelle',			2,1,4,4,1,0),
('Qiqi',			7,2,1,5,1,0),
('Razor',			3,1,4,4,2,0),
('Raiden Shogun',	3,3,3,5,1,0),
('Rosaria',			7,1,3,4,1,0),
('Sayu',			1,3,4,4,1,0),
('Shenhe',			7,2,3,5,1,0),
('Sucrose',			1,1,5,4,1,0),
('Tartaglia',		5,7,2,5,2,0),
('Thoma',			6,3,3,4,2,0),
('Tighnari',		4,4,2,5,2,0),
('Traveler',		1,8,1,5,2,0),
('Traveler',		2,8,1,5,2,0),
('Traveler',		3,8,1,5,2,0),
('Traveler',		4,8,1,5,2,0),
('Venti',			1,1,2,5,2,0),
('Wanderer',		1,4,5,5,2,0),
('Xiangling',		6,2,3,4,1,0),
('Xiao',			1,2,3,5,2,0),
('Xingqiu',			5,2,1,4,2,0),
('Xinyan',			6,2,4,4,1,0),
('Yae Miko',		3,3,5,5,1,0),
('Yanfei',			6,2,5,4,1,0),
('Yaoyao',			4,4,3,4,1,0),
('Yelan',			5,2,2,5,1,0),
('Yoimiya',			6,3,2,5,1,0),
('Yun Jin',			2,2,3,4,1,0),
('Zhongli',			2,2,3,5,2,0),
('Freminet',		7,5,3,4,2,0),
('Lyney',			6,5,2,5,2,0),
('Lynette',			1,5,1,4,1,0),
('Traveler',		5,8,1,5,2,0),
('Kirara',			4,3,1,4,1,0),
('Wriothesley',		7,5,5,5,2,0),
('Neuvillette',		5,5,5,5,2,0)

-- Insert Weapons --