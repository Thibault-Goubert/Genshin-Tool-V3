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
CREATE TABLE Elements(
	Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
);
-- Create the Region table
CREATE TABLE Regions(
	Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
);
-- Create the WeaponType table
CREATE TABLE WeaponTypes(
	Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
);
-- Create the StatType table
CREATE TABLE StatTypes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);
-- Create the StatsName table
CREATE TABLE StatsNames(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Label VARCHAR(255) NOT NULL,
    StatTypeId INT NOT NULL,
	FOREIGN KEY (StatTypeId) REFERENCES StatTypes(Id)
);
-- Create the Piece table
CREATE TABLE Pieces (
    Id INT IDENTITY(1,1) PRIMARY KEY,	
    Name VARCHAR(255) NOT NULL,
);


------- Create Main Tables -------

-- Create the Stats table
CREATE TABLE Stats(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Value INT NOT NULL,
    StatsNameId INT NOT NULL,
	FOREIGN KEY (StatsNameId) REFERENCES StatsNames(Id)
);

-- Create the Weapons table
CREATE TABLE Weapons(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);
-- Create the Artefacts table
CREATE TABLE Artefacts(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    PieceId INT NOT NULL,

    FOREIGN KEY (PieceId) REFERENCES Pieces(Id)
);
-- Create the Characters table
CREATE TABLE Characters(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
	ElementId INT NOT NULL,
	RegionId INT NOT NULL,
	WeaponTypeId INT NOT NULL,

	WeaponId INT NULL,

    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id),
    FOREIGN KEY (ElementId) REFERENCES Elements(Id),
    FOREIGN KEY (RegionId) REFERENCES Regions(Id),
    FOREIGN KEY (WeaponTypeId) REFERENCES WeaponTypes(Id),
);

------ Create associations tables ------

-- Create the link between Characters and Artefacts
CREATE TABLE CharacterArtefacts (
    CharacterId INT NOT NULL,
    ArtefactId INT NOT NULL,
    PRIMARY KEY (CharacterId, ArtefactId),
    FOREIGN KEY (CharacterId) REFERENCES Characters(Id),
    FOREIGN KEY (ArtefactId) REFERENCES Artefacts(Id)
);
-- Create the link between Stats and Weapons
CREATE TABLE StatWeapons (
    StatId INT NOT NULL,
    WeaponId INT NOT NULL,
    PRIMARY KEY (StatId, WeaponId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id)
);
-- Create the link between Stats and Characters
CREATE TABLE StatCharacters (
    StatId INT NOT NULL,
    CharacterId INT NOT NULL,
    PRIMARY KEY (StatId, CharacterId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (CharacterId) REFERENCES Characters(Id)
);
-- Create the link between Stats and Artefacts
CREATE TABLE StatArtefacts (
    StatId INT NOT NULL,
    ArtefactId INT NOT NULL,
    PRIMARY KEY (StatId, ArtefactId),
    FOREIGN KEY (StatId) REFERENCES Stats(Id),
    FOREIGN KEY (ArtefactId) REFERENCES Artefacts
);
-- Create the StatsAdditionnel table
CREATE TABLE StatsAdditionnels (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WeaponId INT NOT NULL,
    StatId INT NOT NULL,
    SetArtefact INT NOT NULL,
    FOREIGN KEY (WeaponId) REFERENCES Weapons(Id),
    FOREIGN KEY (StatId) REFERENCES Stats(Id)
);