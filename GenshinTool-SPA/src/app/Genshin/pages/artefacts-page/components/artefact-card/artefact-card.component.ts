import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Artefact } from 'src/app/Genshin/models/Artefact/artefact.model';
import { ArtefactPiece } from 'src/app/Genshin/models/Artefact/artefactPiece.model';
import { Character } from 'src/app/Genshin/models/Character/character.model';
import { Stat } from 'src/app/Genshin/models/Stat/stat.model';

@Component({
  selector: 'app-artefact-card',
  templateUrl: './artefact-card.component.html',
  styleUrls: ['./artefact-card.component.css']
})
export class ArtefactCardComponent implements OnInit{
  @Input() character!: Character;
  @Input() artefact!: Artefact;
  @Input() piece!: ArtefactPiece;
  @Input() isOnClickDisplayChangeArtefactPopupDisabled = false;

  @Output() changeArtefactPopupOpenedEvent = new EventEmitter();
  @Output() onChangeArtefactEvent = new EventEmitter();

  public mainStat!: Stat | undefined;
  public subStats!: Stat[] | undefined;
  public artefactPieceImgPath!: string;
  public artefactSetName!: string;
  public artefactSetInitials!: string;
  public artefactPieceName!: string;
  public displayArtefactImg!: boolean;
  public displayChangeArtefactPopup: boolean = false;

  private id!: string;

  ngOnInit(): void {
    this.setValues();
    this.id = "popupChangeArtefact_"+this.artefactPieceName;
  }

  setValues(){
    this.mainStat = this.artefact?.stats?.find(x => x.isMain);
    this.subStats = this.artefact?.stats?.filter(x => !x.isMain);
    this.artefactPieceImgPath = this.buildArtefactPieceImgPath();
    this.artefactSetName = this.artefact?.set?.name ?? "";
    this.artefactSetInitials = this.artefact?.set?.initials ?? "";
    this.artefactPieceName = this.piece?.name?.toLowerCase() ?? "";
    this.displayArtefactImg = (this.artefactSetInitials != "" && this.artefactPieceName != "");
  }
  
  buildArtefactPieceImgPath(): string{
    if(this.piece && this.piece?.name){
      return "assets/icons/filters/artifact_icon_"+this.piece.name.toLowerCase()+"50.png";
    }
    return "";
  }

  onClickChangeArtefact(){
    if(!this.isOnClickDisplayChangeArtefactPopupDisabled){
      this.changeArtefactPopupOpenedEvent.emit(this.id);
      this.displayChangeArtefactPopup = true;
    }
  }
  closeChangeArtefactsPopupHandler(){
    this.displayChangeArtefactPopup = false;
  }
  onChangeArtefactHandler($event: Artefact){
    this.artefact = $event;
    this.onChangeArtefactEvent.emit($event);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['artefact']){
      this.setValues();
    }
  }
}
