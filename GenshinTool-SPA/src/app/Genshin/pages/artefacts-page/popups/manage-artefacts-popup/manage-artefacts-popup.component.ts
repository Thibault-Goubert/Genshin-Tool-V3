import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-artefacts-popup',
  templateUrl: './manage-artefacts-popup.component.html',
  styleUrls: ['./manage-artefacts-popup.component.css']
})
export class ManageArtefactsPopupComponent implements OnInit{
  
  public setSelectorSetListDisplayed!: string[];
  public showSetSelectorSetList: boolean = false; 
  public setSelectorInputValue: string = "";

  private setSelectorSetList!: string[];
  private setSelectorPieces!: string[];

  private setSelectorSelectedPieceElement: HTMLDivElement | any = null;
  private setSelectorSelectedPiece: string = "";
  public setSelectorSelectedSet: string = "";

  public setSelectorSelectedArtefactImg: string = "";

  constructor() {}
  
  ngOnInit(): void {
    this.setSelectorSetList = ["Gladiator","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Archaic Petra","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige","Noblesse Oblige"];
    this.setSelectorPieces = ["flower","plume","goblet","sand","circlet"];
  }

  onSetSelectorInputChange(value: string): void {
    this.setSelectorInputValue = value;
    this.setSelectorSetListDisplayed = this.setSelectorSetList.filter(s => s.toLowerCase().includes(value.toLowerCase()));
    this.showSetSelectorSetList = value != "" ? true : false;
  } 

  onSelectSet(value: string){
    this.showSetSelectorSetList = false; 
    this.setSelectorInputValue = value;
    this.setSelectorSelectedSet = value;
    this.updateDisplay();
  }

  onPieceSelectorClick(element: HTMLDivElement, index: number): void {
    if(this.setSelectorSelectedPieceElement == element){
      (this.setSelectorSelectedPieceElement as HTMLDivElement).classList.remove("selected");
      this.setSelectorSelectedPieceElement = null;
      this.setSelectorSelectedPiece = "";
    }
    else{
      if(this.setSelectorSelectedPieceElement != null){
        (this.setSelectorSelectedPieceElement as HTMLDivElement).classList.remove("selected");
      }
      this.setSelectorSelectedPieceElement = element;
      this.setSelectorSelectedPiece = this.setSelectorPieces[index];
      (this.setSelectorSelectedPieceElement as HTMLDivElement).classList.add("selected");
    }
    this.updateDisplay();
  }

  updateDisplay(){
    var isSetSelected = this.setSelectorSelectedSet != "";
    var isPieceSelected = this.setSelectorSelectedPiece != "";

    if(isSetSelected && isPieceSelected){
      this.setSelectorSelectedArtefactImg = this.buildArtefactImgPath();
    }
  }

  buildArtefactImgPath(): string {    
    var initials: string[] = [];
    this.setSelectorSelectedSet.toLowerCase().split(" ").forEach(s => initials.push(s.charAt(0)));

    var basePath = "assets/icons/artifact/artifact_";
    var setName = initials.join('');
    var piece = this.setSelectorSelectedPiece.toLowerCase(); 
    var extension = ".png";
    return basePath + setName + "_" + piece + extension;
  }
}
