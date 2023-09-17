import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ArtefactSet } from 'src/app/Genshin/models/Artefact/ArtefactSet.model';
import { Artefact } from 'src/app/Genshin/models/Artefact/artefact.model';
import { ArtefactPiece } from 'src/app/Genshin/models/Artefact/artefactPiece.model';
import { Stat } from 'src/app/Genshin/models/Stat/stat.model';
import { StatName } from 'src/app/Genshin/models/Stat/statName.model';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';
import { ArtefactService } from 'src/app/Genshin/services/artefact.service';
import { StatService } from 'src/app/Genshin/services/stat.service';

@Component({
  selector: 'app-manage-artefacts-popup',
  templateUrl: './manage-artefacts-popup.component.html',
  styleUrls: ['./manage-artefacts-popup.component.css']
})
export class ManageArtefactsPopupComponent implements OnInit{

  constructor(private artefactService: ArtefactService, private statService: StatService) {}

  //#region Arte Piece/Set
  public dropdownSetSelectorPlaceholder: string = "Choisir le set...";
  public dropdownSetSelectorChoiceList: SelectPickerValue[] = [];
  public dropdownSetSelectorChoiceSelected!: ArtefactSet;
  
  public setSelectorPieces!: ArtefactPiece[];
  private setSelectorSelectedPiece!: ArtefactPiece;

  public setSelectorSelectedArtefactImg: string = "";
  //#endregion
  //#region Arte Stats
  public mainValue: number = 0;
  public sub1Value: number = 0;
  public sub2Value: number = 0;
  public sub3Value: number = 0;
  public sub4Value: number = 0;

  public mainName: StatName = new StatName();
  public sub1Name: StatName = new StatName();
  public sub2Name: StatName = new StatName();
  public sub3Name: StatName = new StatName();
  public sub4Name: StatName = new StatName();

  public statNames: StatName[] = [];
  private statChanging: string = "";
  public showPopupStatSelector: boolean = false;
  //#endregion
  //#region Arte list
  public inventoryList!: Artefact[];
  //#endregion

  ngOnInit(): void {
    this.artefactService.getAllSet().subscribe(result => {
      result.items.forEach(element => {
        this.dropdownSetSelectorChoiceList.push({value: element,  displayValue: element.name})
      });      
    });
    this.artefactService.getAllPiece().subscribe(result => {
      this.setSelectorPieces = result.items;
      console.log(result.items);
    });
    this.statService.getAllName().subscribe(result => {
      this.statNames = result.items.sort((a,b) => a.label.length - b.label.length);
    });
    this.artefactService.getAll().subscribe(result => {
      this.inventoryList = result.items;
      console.log("getAll:", result.items)
    });
  }

  dropdownSetSelectorOnSelect(choice: SelectPickerValue): void{
    this.dropdownSetSelectorChoiceSelected = choice.value;
    this.updateDisplay();
  }
  onPieceSelectorClick(piece: ArtefactPiece): void {
    document.getElementById("popup_manageArtefacts_Creator_PieceSelector_"+this.setSelectorSelectedPiece?.name)?.classList.remove("selected");
    document.getElementById("popup_manageArtefacts_Creator_PieceSelector_"+piece?.name)?.classList.add("selected");
    this.setSelectorSelectedPiece = piece;    
    this.updateDisplay();
  }
  updateDisplay(){
    var isSetSelected = this.dropdownSetSelectorChoiceSelected ? true : false;
    var isPieceSelected = this.setSelectorSelectedPiece ? true : false;
    if(isSetSelected && isPieceSelected){
      this.setSelectorSelectedArtefactImg = this.buildArtefactImgPath();
    }
  }
  buildArtefactImgPath(): string {    
    var basePath = "assets/icons/artifact/artifact_";
    var setName = this.dropdownSetSelectorChoiceSelected.initials;
    var piece = this.setSelectorSelectedPiece.name.toLowerCase(); 
    var extension = ".png";
    return basePath + setName + "_" + piece + extension;
  }
  buildPieceImgPath(pieceName: string): string {
    return "assets/icons/filters/artifact_icon_"+pieceName.toLowerCase()+"30.png";
  }
  onStatTypeClick(statToChange: string): void{
    this.statChanging = statToChange;
    this.showPopupStatSelector = true;
  }
  onStatSelected(statSelected: StatName): void{
    this.showPopupStatSelector = false;

    switch (this.statChanging) {
      case "main":
        this.mainName = statSelected;
        break;
        case "sub1":
          this.sub1Name = statSelected;
          break;
        case "sub2":
          this.sub2Name = statSelected;
          break;
        case "sub3":
          this.sub3Name = statSelected;
          break;
        case "sub4":
          this.sub4Name = statSelected;
          break;
    
      default:
        break;
    }
  }
  onStatValueInput(value: string, idx: number, event: Event): void{
    var parseValue = parseFloat(value.replace(',','.'));
    switch (idx) {
      case 0:
        if(parseValue) {this.mainValue = parseValue}
        break;
      case 1:
        if(parseValue) {this.sub1Value = parseValue}
        break;
      case 2:
        if(parseValue) {this.sub2Value = parseValue}
        break;
      case 3:
        if(parseValue) {this.sub3Value = parseValue}
        break;
      case 4:
        if(parseValue) {this.sub4Value = parseValue}
        break;
    
      default:
        break;
    }
  }
  onAddClick(): void {
    var statsMain = new Stat(this.mainValue, this.mainName, true);
    var stats1 = new Stat(this.sub1Value, this.sub1Name, false);
    var stats2 = new Stat(this.sub2Value, this.sub2Name, false);
    var stats3 = new Stat(this.sub3Value, this.sub3Name, false);
    var stats4 = new Stat(this.sub4Value, this.sub4Name, false);

    var ArtefactToCreate = new Artefact();
    ArtefactToCreate.piece = this.setSelectorSelectedPiece;
    ArtefactToCreate.set = this.dropdownSetSelectorChoiceSelected;
    ArtefactToCreate.stats = [statsMain,stats1,stats2,stats3,stats4];

    this.artefactService.insertArtefact(ArtefactToCreate);
  }
}
