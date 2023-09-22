import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DropdownlistComponent } from 'src/app/Genshin/components/common/dropdownlist/dropdownlist/dropdownlist.component';
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
  public dropdownSetChoiceList: SelectPickerValue[] = [];  
  public setSelectorPieces!: ArtefactPiece[];

  public setSelectorSelectedPiece!: ArtefactPiece | null;
  public dropdownSetSelectorChoiceSelected!: ArtefactSet | null;

  public setSelectorSelectedArtefactImg: string = "";
  //#endregion
  //#region Arte Stats
  public mainValue!: Number  | null;
  public sub1Value!: Number  | null;
  public sub2Value!: Number  | null;
  public sub3Value!: Number  | null;
  public sub4Value!: Number  | null;
  public mainName!: StatName | null;
  public sub1Name!: StatName | null;
  public sub2Name!: StatName | null;
  public sub3Name!: StatName | null;
  public sub4Name!: StatName | null;

  public statNames: StatName[] = [];
  private statChanging: string = "";
  public showPopupStatSelector: Boolean = false;
  //#endregion
  //#region Arte list
  public inventoryList!: Artefact[];
  public inventoryListDisplayed!: Artefact[];
  public dropdownSetFilterPlaceholder: string = "Filtrer par set";
  private dropdownSeFilterChoiceSelected!: ArtefactSet;
  public setFilterSelectedPiece: ArtefactPiece[] = [];
  //#endregion
  //#region inputs
  @ViewChild('inputMain', {static: true}) inputMain!: ElementRef<HTMLInputElement>;
  @ViewChild('inputSub1', {static: true}) inputSub1!: ElementRef<HTMLInputElement>;
  @ViewChild('inputSub2', {static: true}) inputSub2!: ElementRef<HTMLInputElement>;
  @ViewChild('inputSub3', {static: true}) inputSub3!: ElementRef<HTMLInputElement>;
  @ViewChild('inputSub4', {static: true}) inputSub4!: ElementRef<HTMLInputElement>;
  @ViewChild('DDSetSelector', {static: true}) DDSetSelector!: DropdownlistComponent;
  //#endregion

  ngOnInit(): void {
    this.artefactService.getAllSet().subscribe(result => {
      result.items.forEach(element => {
        this.dropdownSetChoiceList.push({value: element,  displayValue: element.name})
      });      
    });
    this.artefactService.getAllPiece().subscribe(result => {
      this.setSelectorPieces = result.items;
    });
    this.statService.getAllName().subscribe(result => {
      this.statNames = result.items.sort((a,b) => a.label.length - b.label.length);
    });
    this.artefactService.getAll().subscribe(result => {
      this.inventoryList = result.items;
      this.inventoryListDisplayed = result.items;
      console.log(result.items)
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
  onPieceFilterClick(piece: ArtefactPiece): void {
    var toRemove = this.setFilterSelectedPiece.find(p => p.id == piece.id);
    if(toRemove){
      document.getElementById("popup_manageArtefacts_Filters_ByPieces_"+toRemove?.name)?.classList.remove("selected");
      this.setFilterSelectedPiece.splice(this.setFilterSelectedPiece.findIndex(p => p.id == toRemove?.id), 1);
      console.log("toRemove", this.setFilterSelectedPiece)
    }
    else{
      document.getElementById("popup_manageArtefacts_Filters_ByPieces_"+piece?.name)?.classList.add("selected"); 
      this.setFilterSelectedPiece.push(piece);
      console.log("toAdd", piece, this.setFilterSelectedPiece)
    }
    this.updateInventoryList();
  }
  updateDisplay(){
    if(this.dropdownSetSelectorChoiceSelected && this.setSelectorSelectedPiece){
      this.setSelectorSelectedArtefactImg = 
        this.buildArtefactImgPath(this.dropdownSetSelectorChoiceSelected.initials, this.setSelectorSelectedPiece.name);
    }
  }
  buildArtefactImgPath(initials: string, pieceName: string): string {    
    var basePath = "assets/icons/artifact/artifact_";
    var extension = ".png";
    return basePath + initials.toLowerCase() + "_" + pieceName.toLowerCase() + extension;
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
      case "main": this.mainName = statSelected; break;
      case "sub1": this.sub1Name = statSelected; break;
      case "sub2": this.sub2Name = statSelected; break;
      case "sub3": this.sub3Name = statSelected; break;
      case "sub4": this.sub4Name = statSelected; break;    
      default: break;
    }
  }
  onStatValueInput(value: string, idx: Number): void{
    var parseValue = parseFloat(value.replace(',','.'));
    switch (idx) {
      case 0: if(parseValue){this.mainValue = parseValue} break;
      case 1: if(parseValue){this.sub1Value = parseValue} break;
      case 2: if(parseValue){this.sub2Value = parseValue} break;
      case 3: if(parseValue){this.sub3Value = parseValue} break;
      case 4: if(parseValue){this.sub4Value = parseValue} break;    
      default: break;
    }
  }
  onAddClick(): void {    
    if( this.mainValue && this.sub1Value && this.sub2Value && this.sub3Value && this.sub4Value &&
        this.mainName && this.sub1Name && this.sub2Name && this.sub3Name && this.sub4Name &&
        this.setSelectorSelectedPiece && this.dropdownSetSelectorChoiceSelected ){ 

      var statsMain = new Stat(Number.parseFloat(this.mainValue.toString().replace(',','.')), this.mainName, true);
      var stats1    = new Stat(Number.parseFloat(this.sub1Value.toString().replace(',','.')), this.sub1Name, false);
      var stats2    = new Stat(Number.parseFloat(this.sub2Value.toString().replace(',','.')), this.sub2Name, false);
      var stats3    = new Stat(Number.parseFloat(this.sub3Value.toString().replace(',','.')), this.sub3Name, false);
      var stats4    = new Stat(Number.parseFloat(this.sub4Value.toString().replace(',','.')), this.sub4Name, false);

      var ArtefactToCreate    = new Artefact();
      ArtefactToCreate.piece  = this.setSelectorSelectedPiece;
      ArtefactToCreate.set    = this.dropdownSetSelectorChoiceSelected;
      ArtefactToCreate.stats  = [statsMain,stats1,stats2,stats3,stats4];

      this.artefactService.insertArtefact(ArtefactToCreate).subscribe(res => {
        this.inventoryList.push(res.item);
        console.log(res.item)
      });
      this.onResetClick();
    }
  }
  onResetClick(): void{
    if(this.setSelectorSelectedPiece != undefined){
      document.getElementById("popup_manageArtefacts_Creator_PieceSelector_"+this.setSelectorSelectedPiece?.name)?.classList.remove("selected");
    }
    this.setSelectorSelectedPiece = null; this.dropdownSetSelectorChoiceSelected = null;
    this.mainValue = null; this.mainName = null; this.inputMain.nativeElement.value = ''; 
    this.sub1Value = null; this.sub1Name = null; this.inputSub1.nativeElement.value = '';
    this.sub2Value = null; this.sub2Name = null; this.inputSub2.nativeElement.value = '';
    this.sub3Value = null; this.sub3Name = null; this.inputSub3.nativeElement.value = '';
    this.sub4Value = null; this.sub4Name = null; this.inputSub4.nativeElement.value = '';
    this.setSelectorSelectedArtefactImg = "";
    this.DDSetSelector.resetInputValue();
  }
  filterStats(stats: Stat[], getMain: Boolean = false): Stat[]{
    if(getMain){
      return [stats.find(s => s.isMain) as Stat]
    }
    return stats.filter(s => !s.isMain);
  }
  dropdownSetFilterOnSelect(choice: SelectPickerValue): void{
    this.dropdownSeFilterChoiceSelected = choice?.value;
    this.updateInventoryList();
  }
  updateInventoryList(){
    if(this.setFilterSelectedPiece.length > 0){
      this.inventoryListDisplayed = this.filterByPiece(this.inventoryList);
      if(this.dropdownSeFilterChoiceSelected){
        this.inventoryListDisplayed = this.filterBySet(this.inventoryListDisplayed);
      }
    }
    else if(this.dropdownSeFilterChoiceSelected != undefined){
      this.inventoryListDisplayed = this.filterBySet(this.inventoryList);
      if(this.setFilterSelectedPiece.length > 0){
        this.inventoryListDisplayed = this.filterByPiece(this.inventoryListDisplayed);
      }
    }
    else{
      this.inventoryListDisplayed = this.inventoryList;
    }
  }
  filterByPiece(artes: Artefact[]): Artefact[]{
    return artes.filter(x => this.setFilterSelectedPiece.find(p => p.id == x.pieceId));
  }
  filterBySet(artes: Artefact[]): Artefact[]{
    return artes.filter(x => x.set.name == this.dropdownSeFilterChoiceSelected.name);
  }
}
