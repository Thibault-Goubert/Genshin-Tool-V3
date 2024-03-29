import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArtefactSet } from 'src/app/Genshin/models/Artefact/ArtefactSet.model';
import { Artefact } from 'src/app/Genshin/models/Artefact/artefact.model';
import { Character } from 'src/app/Genshin/models/Character/character.model';
import { Stat } from 'src/app/Genshin/models/Stat/stat.model';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';
import { ArtefactService } from 'src/app/Genshin/services/artefact.service';

@Component({
  selector: 'app-change-artefact-popup',
  templateUrl: './change-artefact-popup.component.html',
  styleUrls: ['./change-artefact-popup.component.css']
})
export class ChangeArtefactPopupComponent implements OnInit{

  @Output() closeChangeArtefactsPopupEvent = new EventEmitter();
  @Output() onChangeArtefactEvent = new EventEmitter();

  @Input() artefactPieceImgPath!: string;
  @Input() artefact!: Artefact;
  @Input() character!: Character;

  public artefactList: Artefact[] = [];
  public artefactListDisplayed: Artefact[] = [];
  public dropdownSetFilterPlaceholder: string = "Filtrer par set";
  public dropdownSetChoiceList: SelectPickerValue[] = []; 
  public dropdownSetFilterChoiceSelected!: ArtefactSet;

  constructor(private artefactService: ArtefactService) {

  }

  ngOnInit(): void {
    this.artefactService.GetAllByPiece(this.artefact.piece.id).subscribe(result => {
      this.artefactList = result.items;
      this.updateInventoryList();
    });
    this.artefactService.getAllSet().subscribe(result => {
      result.items.forEach(element => {
        this.dropdownSetChoiceList.push({value: element,  displayValue: element.name})
      });      
    });
  }

  buildArtefactImgPath(initials: string, pieceName: string): string {    
    var basePath = "assets/icons/artifact/artifact_";
    var extension = ".png";
    return basePath + initials.toLowerCase() + "_" + pieceName.toLowerCase() + extension;
  }

  dropdownSetFilterOnSelect(choice: SelectPickerValue): void{
    this.dropdownSetFilterChoiceSelected = choice?.value;
    this.updateInventoryList();
  }

  updateInventoryList(){
    if(this.dropdownSetFilterChoiceSelected != undefined){
      this.artefactListDisplayed = this.filterBySet(this.artefactList);
    }
    else{
      this.artefactListDisplayed = this.artefactList;
    }
  }
  filterBySet(artes: Artefact[]): Artefact[]{
    return artes.filter(x => x.set.name == this.dropdownSetFilterChoiceSelected.name);
  }
  filterStats(stats: Stat[], getMain: Boolean = false): Stat[]{
    if(getMain){
      return [stats.find(s => s.isMain) as Stat]
    }
    return stats.filter(s => !s.isMain);
  }
  onClose(){
    this.closeChangeArtefactsPopupEvent.emit();
  }
  onChangeArtefactListElementClick(arte: Artefact){
    this.artefact = arte;
    this.artefactService.AssociateArtefactToCharacter(arte, this.character.id).subscribe();
    this.onChangeArtefactEvent.emit(arte);
  }
}
