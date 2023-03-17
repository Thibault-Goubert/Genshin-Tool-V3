-- Use the GameDB database
USE GenshinToolDB
GO

-- Insert Sex --
SET IDENTITY_INSERT Sex ON;
INSERT INTO Sex (Id,Name)
VALUES
(1,'M'),(2,'F')
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
(1,'Pyro'),(2,'Cryo'),(3,'Electro'),(4,'Hydro'),
(5,'Anemo'),(6,'Geo'),(7,'Dendro')
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
SET IDENTITY_INSERT Characters ON;
INSERT INTO Characters 
(Id,Name,ElementId,RegionId,WeaponTypeId,Rarity,SexId,IsCollab)
VALUES
(1,'Albedo',			6,1,1,3,1,0),
(2,'Alhaitham',			7,4,1,3,1,0),
(3,'Aloy',				2,8,2,3,2,1),
(4,'Amber',				1,1,2,3,2,0),
(5,'Ayaka',				2,3,1,3,2,0),
(6,'Ayato',				4,3,1,3,1,0),
(7,'Barbara',			4,1,5,2,2,0),
(8,'Beidou',			3,2,4,2,2,0),
(9,'Bennett',			1,1,1,2,1,0),
(10,'Candace',			4,4,3,2,2,0),
(11,'Collei',			7,4,2,2,2,0),
(12,'Chongyun',			2,2,4,2,1,0),
(13,'Cyno',				3,4,3,3,1,0),
(14,'Diluc',			1,1,4,3,1,0),
(15,'Diona',			2,1,2,2,2,0),
(16,'Dori',				3,4,4,2,2,0),
(17,'Eula',				2,1,4,3,2,0),
(18,'Faruzan',			5,4,2,2,2,0),
(19,'Fischl',			3,1,2,2,2,0),
(20,'Ganyu',			2,2,2,3,2,0),
(21,'Gorou',			6,3,2,2,1,0),
(22,'Heizou',			5,3,5,2,1,0),
(23,'Hu Tao',			1,2,3,3,2,0),
(24,'Itto',				6,3,4,3,1,0),
(25,'Jean',				5,1,1,3,2,0),
(26,'Kaeya',			2,1,1,2,1,0),
(27,'Kazuha',			5,3,1,3,1,0),
(28,'Keqing',			3,2,1,3,2,0),
(29,'Klee',				1,1,5,3,2,0),
(30,'Kokomi',			4,3,5,3,2,0),
(31,'Kujou Sara',		3,3,2,3,2,0),
(32,'Kuki Shinobu',		3,3,1,2,2,0),
(33,'Layla',			2,4,1,2,2,0),
(34,'Lisa',				3,1,5,2,2,0),
(35,'Mona',				4,1,5,3,2,0),
(36,'Nahida',			7,4,5,3,2,0),
(37,'Ningguang',		6,2,5,2,2,0),
(38,'Nilou',			4,4,1,3,2,0),
(39,'Noelle',			6,1,4,2,2,0),
(40,'Qiqi',				2,2,1,3,2,0),
(41,'Razor',			3,1,4,2,1,0),
(42,'Raiden Shogun',	3,3,3,3,2,0),
(43,'Rosaria',			2,1,3,2,2,0),
(44,'Sayu',				5,3,4,2,2,0),
(45,'Shenhe',			2,2,3,3,2,0),
(46,'Sucrose',			1,1,5,2,2,0),
(47,'Tartaglia',		4,7,2,3,1,0),
(48,'Thoma',			1,3,3,2,1,0),
(49,'Tighnari',			7,4,2,3,1,0),
(50,'Traveler',			5,8,1,3,1,0),
(51,'Traveler',			6,8,1,3,1,0),
(52,'Traveler',			3,8,1,3,1,0),
(53,'Traveler',			7,8,1,3,1,0),
(54,'Venti',			5,1,2,3,1,0),
(55,'Wanderer',			5,4,5,3,1,0),
(56,'Xiangling',		1,2,3,2,2,0),
(57,'Xiao',				5,2,3,3,1,0),
(58,'Xinyan',			1,2,4,2,2,0),
(59,'Yae Miko',			3,3,5,3,2,0),
(60,'Yanfei',			1,2,5,3,2,0),
(61,'Yaoyao',			7,4,3,2,2,0),
(62,'Yelan',			4,2,2,3,2,0),
(63,'Yoimiya',			1,3,2,3,2,0),
(64,'Yun Jin',			6,2,3,2,2,0),
(65,'Zhongli',			6,2,3,3,1,0)
SET IDENTITY_INSERT Characters OFF;

update [GenshinToolDB].[dbo].[Characters]
SET Rarity = 5
WHERE Rarity = 3

update [GenshinToolDB].[dbo].[Characters]
SET Rarity = 4
WHERE Rarity = 2

update [GenshinToolDB].[dbo].[Characters]
SET Rarity = 3
WHERE Rarity = 1

-- Insert Weapons --