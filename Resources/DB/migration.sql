use GenshinToolDB

alter table Stats	
add IsMain bit not null

exec sp_rename 'dbo.Pieces' ,'ArtefactPieces'
EXEC sp_rename 'dbo.Stats.StatsNameId', 'StatNameId', 'COLUMN';