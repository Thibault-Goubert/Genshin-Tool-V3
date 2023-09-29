import { Component, Input, OnInit } from '@angular/core';
import { Artefact } from 'src/app/Genshin/models/Artefact/artefact.model';
import { ArtefactPiece } from 'src/app/Genshin/models/Artefact/artefactPiece.model';
import { Stat } from 'src/app/Genshin/models/Stat/stat.model';

@Component({
  selector: 'app-artefact-card',
  templateUrl: './artefact-card.component.html',
  styleUrls: ['./artefact-card.component.css']
})
export class ArtefactCardComponent implements OnInit{
  @Input() artefact!: Artefact;
  @Input() piece!: ArtefactPiece;

  public mainStat!: Stat | undefined;
  public subStats!: Stat[] | undefined;
  public artefactPieceImgPath!: string;
  public artefactSetName!: string;
  public artefactSetInitials!: string;
  public artefactPieceName!: string;
  public displayArtefactImg!: boolean;
  public displayChangeArtefactPopup: boolean = false;

  ngOnInit(): void {
    this.mainStat = this.artefact?.stats?.find(x => x.isMain);
    this.subStats = this.artefact?.stats?.filter(x => !x.isMain);
    this.artefactPieceImgPath = this.buildArtefactPieceImgPath();
    this.artefactSetName = this.artefact?.set?.name ?? "";
    this.artefactSetInitials = this.artefact?.set?.initials ?? "";
    this.artefactPieceName = this.piece?.name?.toLowerCase() ?? "";
    this.displayArtefactImg = (this.artefactSetInitials != "" && this.artefactPieceName != "");
    console.log("display arte")
  }
  
  buildArtefactPieceImgPath(): string{
    if(this.piece && this.piece?.name){
      return "assets/icons/filters/artifact_icon_"+this.piece.name.toLowerCase()+"50.png";
    }
    return "";
  }

  onClickChangeArtefact(){
    this.displayChangeArtefactPopup = true;
    console.log("onClickChangeArtefact")
  }
}
