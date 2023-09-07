import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ArtefactSet } from 'src/app/Genshin/models/Artefact/ArtefactSet.model';
import { StatName } from 'src/app/Genshin/models/Stat/statName.model';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';
import { ArtefactService } from 'src/app/Genshin/services/artefact.service';
import { CharacterService } from 'src/app/Genshin/services/characters.service';
import { StatService } from 'src/app/Genshin/services/stat.service';

@Component({
  selector: 'app-manage-artefacts-popup',
  templateUrl: './manage-artefacts-popup.component.html',
  styleUrls: ['./manage-artefacts-popup.component.css']
})
export class ManageArtefactsPopupComponent implements OnInit{
  
  private setSelectorPieces!: string[];
  private setSelectorSelectedPieceElement: HTMLDivElement | any = null;
  private setSelectorSelectedPiece: string = "";

  public setSelectorSelectedArtefactImg: string = "";

  constructor(private artefactService: ArtefactService, private statService: StatService) {}

  public dropdownSetSelectorPlaceholder: string = "Choisir le set...";
  public dropdownSetSelectorChoiceList: SelectPickerValue[] = [];
  public dropdownSetSelectorChoiceSelected!: ArtefactSet;

  public mainValue: number = 0;
  public sub1Value: number = 0;
  public sub2Value: number = 0;
  public sub3Value: number = 0;
  public sub4Value: number = 0;

  public mainType: string = "";
  public sub1Type: string = "";
  public sub2Type: string = "";
  public sub3Type: string = "";
  public sub4Type: string = "";

  public statNames: StatName[] = [];
  private statChanging: string = "";
  public showPopupStatSelector: boolean = false;
  
  ngOnInit(): void {
    this.setSelectorPieces = ["flower","plume","goblet","sand","circlet"];
    this.artefactService.getAllSet().subscribe(result => {
      result.items.forEach(element => {
        this.dropdownSetSelectorChoiceList.push({value: element,  displayValue: element.name})
      });      
    });
    this.statService.getAllName().subscribe(result => {
      this.statNames = result.items.sort((a,b) => a.label.length - b.label.length);
    });
  }

  dropdownSetSelectorOnSelect(choice: SelectPickerValue): void{
    this.dropdownSetSelectorChoiceSelected = choice.value;
    this.updateDisplay();
  }
  onPieceSelectorClick(element: HTMLDivElement, index: number): void {
    if(this.setSelectorSelectedPieceElement){
      this.setSelectorSelectedPieceElement.classList.remove("selected");
    }
    this.setSelectorSelectedPieceElement = element;
    this.setSelectorSelectedPiece = this.setSelectorPieces[index];
    this.setSelectorSelectedPieceElement.classList.add("selected");
    
    this.updateDisplay();
  }
  updateDisplay(){
    console.log(this.dropdownSetSelectorChoiceSelected, this.setSelectorSelectedPiece);
    var isSetSelected = this.dropdownSetSelectorChoiceSelected ? true : false;
    var isPieceSelected = this.setSelectorSelectedPiece != "";
    console.log(isSetSelected, isPieceSelected)
    if(isSetSelected && isPieceSelected){
      this.setSelectorSelectedArtefactImg = this.buildArtefactImgPath();
    }
  }
  buildArtefactImgPath(): string {    
    var basePath = "assets/icons/artifact/artifact_";
    var setName = this.dropdownSetSelectorChoiceSelected.initials;
    var piece = this.setSelectorSelectedPiece.toLowerCase(); 
    var extension = ".png";
    return basePath + setName + "_" + piece + extension;
  }
  onStatTypeClick(statToChange: string): void{
    this.statChanging = statToChange;
    this.showPopupStatSelector = true;
  }
  onStatSelected(statSelected: StatName): void{
    this.showPopupStatSelector = false;

    switch (this.statChanging) {
      case "mainType":
        this.mainType = statSelected.label;
        break;
        case "sub1Type":
          this.sub1Type = statSelected.label;
          break;
        case "sub2Type":
          this.sub2Type = statSelected.label;
          break;
        case "sub3Type":
          this.sub3Type = statSelected.label;
          break;
        case "sub4Type":
          this.sub4Type = statSelected.label;
          break;
    
      default:
        break;
    }
  }
}
