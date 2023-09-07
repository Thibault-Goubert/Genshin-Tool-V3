import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-artefacts-popup',
  templateUrl: './manage-artefacts-popup.component.html',
  styleUrls: ['./manage-artefacts-popup.component.css']
})
export class ManageArtefactsPopupComponent implements OnInit{
  
  private setList!: string[];
  public setListDisplayed!: string[];
  public showSetList!: boolean;
  public setSelectorInputValue!: string;
  public setSelectorSelectedSet!: string;

  private selectedPieceElement!: HTMLDivElement | any;
  private pieces!: string[];
  private selectedPiece!: string;

  constructor() {}
  
  ngOnInit(): void {
    this.setList = ["Gladiator","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Archaic","Noblesse"];
    this.setSelectorInputValue = "";
    this.showSetList = false; 
    this.selectedPieceElement = null;
    this.pieces = ["flower","plume","goblet","sand","circlet"];
    this.selectedPiece = "";
    this.setSelectorSelectedSet = "";
  }

  onSetSelectorInputChange(value: string): void {
    this.setSelectorInputValue = value;
    this.setListDisplayed = this.setList.filter(s => s.toLowerCase().includes(value.toLowerCase()));
    this.showSetList = value != "" ? true : false;
  } 

  onSelectSet(value: string){
    this.showSetList = false; 
    this.setSelectorInputValue = value;
    this.setSelectorSelectedSet = value;
  }

  onPieceSelectorClick(element: HTMLDivElement, index: number): void {
    if(this.selectedPieceElement == element){
      (this.selectedPieceElement as HTMLDivElement).classList.remove("selected");
      this.selectedPieceElement = null;
      this.selectedPiece = "";
    }
    else{
      if(this.selectedPieceElement != null){
        (this.selectedPieceElement as HTMLDivElement).classList.remove("selected");
      }
      this.selectedPieceElement = element;
      this.selectedPiece = this.pieces[index];
      (this.selectedPieceElement as HTMLDivElement).classList.add("selected");
    }
  }
}
