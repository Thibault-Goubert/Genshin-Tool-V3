using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;
using Microsoft.AspNetCore.Builder;

namespace GenshinTool.Infrastructure.Sql.Repositories;

public class ArtefactRepository : GenshinToolSqlRepository<ArtefactDom, ArtefactDto>, IArtefactRepository
{
    public ArtefactRepository(IBaseMapper mapper) : base(mapper)
    {
    }

    #region Aggregates
    private readonly QueryChildContext<ArtefactDto, ArtefactSetDto> _setAggregates = new()
    {
        ParentKey = x => x.SetId,
        ChildKey = x => x.Id,
        PropertyToSetFunc = x => x.Set
    };
    private readonly QueryChildContext<ArtefactDto, ArtefactPieceDto> _pieceAggregates = new()
    {
        ParentKey = x => x.PieceId,
        ChildKey = x => x.Id,
        PropertyToSetFunc = x => x.Piece
    };
    private readonly QueryChildContext<ArtefactDto, StatDto> _statAggregates = new()
    {
        ParentKey = x => x.Id,
        ChildKey = x => x.AssociationId,
        PropertyIenumerableToSetFunc = x => x.Stats
    };
    #endregion

    private QueryContext GenerateQuery()
    {
        var query = new QueryContext
        {
            ChildAggregateSelectors = new List<IQueryChildContext>
            {
                _setAggregates, _pieceAggregates, _statAggregates
            }
        };
        return query;
    }

    public IEnumerable<ArtefactDom> GetAllWithAggregates() {
        return Get(GenerateQuery());
    }
    public IEnumerable<ArtefactDom> GetAllWithAggregatesByCharacter(long id)
    {
        var query = GenerateQuery();
        query.ParentAggregateSelectors = new[] { new QueryFilterTypeLong { FieldName = "AssociationId", FieldValue = id } };
        return Get(query);
    }
    public IEnumerable<ArtefactDom> GetAllWithAggregatesByPiece(long id)
    {
        var query = GenerateQuery();
        query.ParentAggregateSelectors = new[] { new QueryFilterTypeLong { FieldName = "PieceId", FieldValue = id } };
        return Get(query);
    }
}
