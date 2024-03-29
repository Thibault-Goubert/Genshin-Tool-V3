﻿using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Interface.Dto;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface IArtefactSetRepository : IRepository<ArtefactSetDom, ArtefactSetDto>
{
    ArtefactSetDom GetByName(string name);
}
