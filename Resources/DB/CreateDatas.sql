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
(1,'Anemo'),(2,'Geo'),(3,'Electro'),(4,'Dendro'),
(5,'Hydro'),(6,'Pyro'),(7,'Cryo')
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
(1,'Albedo',2,1,1,3,1,0),
(2,'Alhaitham',4,4,1,3,1,0),
(3,'Aloy',7,8,2,3,2,1),
(4,'Amber',6,1,2,3,2,0),
(5,'Ayaka',7,3,1,3,2,0),
(6,'Ayato',5,3,1,3,1,0),
(7,'Barbara',5,1,5,2,2,0),
(8,'Beidou',3,2,4,2,2,0),
(9,'Bennett',6,1,1,2,1,0),
(10,'Candace',5,4,3,2,2,0),
(11,'Collei',4,4,2,2,2,0),
(12,'Chongyun',7,2,4,2,1,0),
(13,'Cyno',3,4,3,3,1,0),
(14,'Diluc',6,1,4,3,1,0),
(15,'Diona',7,1,2,2,2,0),
(16,'Dori',3,4,4,2,2,0),
(17,'Eula',7,1,4,3,2,0),
(18,'Faruzan',1,4,2,2,2,0),
(19,'Fischl',3,1,2,2,2,0),
(20,'Ganyu',7,2,2,3,2,0),
(21,'Gorou',2,3,2,2,1,0),
(22,'Heizou',1,3,5,2,1,0),
(23,'Hu Tao',6,2,3,3,2,0),
(24,'Itto',2,3,4,3,1,0),
(25,'Jean',1,1,1,3,2,0),
(26,'Kaeya',7,1,1,2,1,0),
(27,'Kazuha',1,3,1,3,1,0),
(28,'Keqing',3,2,1,3,2,0),
(29,'Klee',6,1,5,3,2,0),
(30,'Kokomi',5,3,5,3,2,0),
(31,'Kujou Sara',3,3,2,3,2,0),
(32,'Kuki Shinobu',3,3,1,2,2,0),
(33,'Layla',7,4,1,2,2,0),
(34,'Lisa',3,1,5,2,2,0),
(35,'Mona',5,1,5,3,2,0),
(36,'Nahida',4,4,5,3,2,0),
(37,'Ningguang',2,2,5,2,2,0),
(38,'Nilou',5,4,1,3,2,0),
(39,'Noelle',2,1,4,2,2,0),
(40,'Qiqi',7,2,1,3,2,0),
(41,'Razor',3,1,4,2,1,0),
(42,'Raiden Shogun',3,3,3,3,2,0),
(43,'Rosaria',7,1,3,2,2,0),
(44,'Sayu',1,3,4,2,2,0),
(45,'Shenhe',7,2,3,3,2,0),
(46,'Sucrose',1,1,5,2,2,0),
(47,'Tartaglia',5,7,2,3,1,0),
(48,'Thoma',6,3,3,2,1,0),
(49,'Tighnari',4,4,2,3,1,0),
(50,'Traveler',1,8,1,3,1,0),
(51,'Traveler',2,8,1,3,1,0),
(52,'Traveler',3,8,1,3,1,0),
(53,'Traveler',4,8,1,3,1,0),
(54,'Venti',1,1,2,3,1,0),
(55,'Wanderer',1,4,5,3,1,0),
(56,'Xiangling',6,2,3,2,2,0),
(57,'Xiao',1,2,3,3,1,0),
(58,'Xinyan',6,2,4,2,2,0),
(59,'Yae Miko',3,3,5,3,2,0),
(60,'Yanfei',6,2,5,3,2,0),
(61,'Yaoyao',4,4,3,2,2,0),
(62,'Yelan',5,2,2,3,2,0),
(63,'Yoimiya',6,3,2,3,2,0),
(64,'Yun Jin',2,2,3,2,2,0),
(65,'Zhongli',2,2,3,3,1,0)
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