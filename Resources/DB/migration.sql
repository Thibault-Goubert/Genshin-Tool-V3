use GenshinToolDB

alter table Stats add IsMain bit not null
alter table Stats alter column Value decimal(10,3) not null

EXEC sp_rename 'dbo.Pieces' ,'ArtefactPieces'
EXEC sp_rename 'dbo.Stats.StatsNameId', 'StatNameId', 'COLUMN';