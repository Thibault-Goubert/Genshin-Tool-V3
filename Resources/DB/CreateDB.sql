-- Connect to the SQL Server instance
USE [master]
GO

IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'GenshinToolDB')
BEGIN
	CREATE DATABASE [GenshinToolDB]
END
GO

USE [GenshinToolDB]
GO

------- Create reference tables -------

-- Create the Element table
IF OBJECT_ID(N'Sex', N'U') IS NULL
CREATE TABLE Sex(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(1) NOT NULL,
);
-- Create the Element table
IF OBJECT_ID(N'Elements', N'U') IS NULL
CREATE TABLE Elements(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(10) NOT NULL,
);
-- Create the Region table
IF OBJECT_ID(N'Regions', N'U') IS NULL
CREATE TABLE Regions(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(10) NOT NULL,
);
-- Create the WeaponType table
IF OBJECT_ID(N'WeaponTypes', N'U') IS NULL
CREATE TABLE WeaponTypes(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(10) NOT NULL,
);
-- Create the StatType table
IF OBJECT_ID(N'StatTypes', N'U') IS NULL
CREATE TABLE StatTypes (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(10) NOT NULL
);
-- Create the StatsName table
IF OBJECT_ID(N'StatsNames', N'U') IS NULL
CREATE TABLE StatsNames(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Label VARCHAR(15) NOT NULL,
	StatTypeId INT NOT NULL,
	FOREIGN KEY (StatTypeId) REFERENCES StatTypes(Id)
);
-- Create the Piece table
IF OBJECT_ID(N'ArtefactPieces', N'U') IS NULL
CREATE TABLE ArtefactPieces (
	Id INT IDENTITY(1,1) PRIMARY KEY,	
	Name VARCHAR(255) NOT NULL,
);
-- Create the ArtefactSets table
IF OBJECT_ID(N'ArtefactSets', N'U') IS NULL
CREATE TABLE ArtefactSets (
	Id INT IDENTITY(1,1) PRIMARY KEY,	
	Name VARCHAR(255) NOT NULL,
	Initials VARCHAR(50) NOT NULL,
	TwoPiecesEffect Text NOT NULL,
	FourPiecesEffect Text NOT NULL
);

------- Create Main Tables -------

-- Create the Stats table
IF OBJECT_ID(N'Stats', N'U') IS NULL
CREATE TABLE Stats(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Value decimal(10,3) NOT NULL,
    StatNameId INT NOT NULL,
	IsMain bit not null,
	AssociationId INT NOT NULL,
	FOREIGN KEY (StatNameId) REFERENCES StatsNames(Id)
);

-- Create the Weapons table
IF OBJECT_ID(N'Weapons', N'U') IS NULL
CREATE TABLE Weapons(
    Id INT IDENTITY(10000,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT NULL,
);
-- Create the Artefacts table
IF OBJECT_ID(N'Artefacts', N'U') IS NULL
CREATE TABLE Artefacts(
    Id INT IDENTITY(1000000,1) PRIMARY KEY,
    SetId INT NOT NULL,
    PieceId INT NOT NULL,

    FOREIGN KEY (PieceId) REFERENCES ArtefactPieces(Id),
    FOREIGN KEY (SetId) REFERENCES ArtefactSets(Id)
);
-- Create the Characters table
IF OBJECT_ID(N'Characters', N'U') IS NULL
CREATE TABLE Characters(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,

	ElementId INT NOT NULL,
	WeaponTypeId INT NOT NULL,
	RegionId INT NOT NULL,
	Rarity INT NOT NULL,
	SexId INT NOT NULL,

	IsCollab BIT NOT NULL,

	WeaponId INT NULL,

    IsUsed BIT NOT NULL,

    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id),
    FOREIGN KEY (ElementId) REFERENCES Elements(Id),
    FOREIGN KEY (RegionId) REFERENCES Regions(Id),
    FOREIGN KEY (WeaponTypeId) REFERENCES WeaponTypes(Id),
    FOREIGN KEY (SexId) REFERENCES Sex(Id)
);

------ Create associations tables ------

-- Create the link between Characters and Artefacts
IF OBJECT_ID(N'CharacterArtefacts', N'U') IS NULL
CREATE TABLE CharacterArtefacts (
    CharacterId INT NOT NULL,
    ArtefactId INT NOT NULL,
    PRIMARY KEY (CharacterId, ArtefactId),
    FOREIGN KEY (CharacterId) REFERENCES Characters(Id),
    FOREIGN KEY (ArtefactId) REFERENCES Artefacts(Id)
);
-- Create the link between Stats and Weapons
IF OBJECT_ID(N'StatWeapons', N'U') IS NULL
CREATE TABLE StatWeapons (
    StatId INT NOT NULL,
    WeaponId INT NOT NULL,
    PRIMARY KEY (StatId, WeaponId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id)
);
-- Create the link between Stats and Characters
IF OBJECT_ID(N'StatCharacters', N'U') IS NULL
CREATE TABLE StatCharacters (
    StatId INT NOT NULL,
    CharacterId INT NOT NULL,
    PRIMARY KEY (StatId, CharacterId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (CharacterId) REFERENCES Characters(Id)
);
-- Create the link between Stats and Artefacts
IF OBJECT_ID(N'StatArtefacts', N'U') IS NULL
CREATE TABLE StatArtefacts (
    StatId INT NOT NULL,
    ArtefactId INT NOT NULL,
    PRIMARY KEY (StatId, ArtefactId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (ArtefactId) REFERENCES Artefacts
);
-- Create the StatsAdditionnel table
IF OBJECT_ID(N'StatsAdditionnels', N'U') IS NULL
CREATE TABLE StatsAdditionnels (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WeaponId INT NOT NULL,
    StatId INT NOT NULL,
    SetArtefact INT NOT NULL,
    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id),
    FOREIGN KEY (StatId) REFERENCES Stats(Id)
);