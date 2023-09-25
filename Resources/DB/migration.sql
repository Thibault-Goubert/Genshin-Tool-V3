use GenshinToolDB

alter table Stats add IsMain bit not null;
alter table Stats alter column Value decimal(10,3) not null;
alter table Artefacts add AssociationId INT null;
alter table Artefacts add
	CONSTRAINT FK_Characters_AssociationID
	FOREIGN KEY(AssociationId)
	REFERENCES Characters(id);

EXEC sp_rename 'dbo.Pieces' ,'ArtefactPieces';
EXEC sp_rename 'dbo.Stats.StatsNameId', 'StatNameId', 'COLUMN';

DROP TABLE StatArtefacts;
DROP TABLE CharacterArtefacts;
DROP TABLE StatWeapons;
DROP TABLE StatCharacters;

update ArtefactPieces set Name = 'Flower' where id = 1;
update ArtefactPieces set Name = 'Plume' where id = 2;

select * from ArtefactPieces