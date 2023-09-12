import { Stat } from "../Stat/stat.model";
import { ArtefactSet } from "./ArtefactSet.model";
import { ArtefactPiece } from "./artefactPiece.model";

export class Artefact{
    setId!: number;
    pieceId!: number;
    set!: ArtefactSet;
    piece!: ArtefactPiece;
    stats!: Stat[];
}



