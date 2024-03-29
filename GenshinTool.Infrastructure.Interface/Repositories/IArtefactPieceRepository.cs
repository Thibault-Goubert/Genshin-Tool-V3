﻿using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Interface.Dto;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface IArtefactPieceRepository : IRepository<ArtefactPieceDom, ArtefactPieceDto>
{
    ArtefactPieceDom GetByName(string name);
}
