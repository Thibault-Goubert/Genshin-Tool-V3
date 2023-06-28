import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HSRRessourceService } from 'src/app/HonkaiStarRail/Services/hsr-ressourcesService';

@Component({
  selector: 'app-honkai-star-rail-general-ressources',
  templateUrl: './honkai-star-rail-general-ressources.component.html',
  styleUrls: ['./honkai-star-rail-general-ressources.component.css']
})
export class HonkaiStarRailGeneralRessourcesComponent implements OnInit{
  @ViewChild('leftInputBooksVi', {static: true}) leftInputBookVi!: ElementRef<HTMLInputElement>;
  @ViewChild('leftInputBooksB', {static: true}) leftInputBookB!: ElementRef<HTMLInputElement>;
  @ViewChild('leftInputBooksTotal', {static: true}) leftInputBookTotal!: ElementRef<HTMLInputElement>;

  ressourcesIds!: string[];
  private classHide: string = "hide";
  canRessourceGoalChange!: boolean;

  constructor(private ressourceService: HSRRessourceService) { }

  ngOnInit(): void {
    this.ressourcesIds = [
      "hsr_panel_credits", 
      "hsr_panel_books", 
      "hsr_panel_track_of_destiny", 
      "hsr_panel_aether"
    ];
    this.setVisibilities();
    this.ressourceService.canRessourceGoalChange.subscribe(b => this.canRessourceGoalChange = b);
    this.setInputValues();
  }

  setInputValues() {    
    var inputs, index;

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
      let input = inputs[index];
      input.value = localStorage.getItem(input.id) ?? "";      
    }
  }

  OnClick(event: Event): void{    
    let element = (event.target as Element).parentElement as Element;
    let isToShow = element.classList.contains(this.classHide)

    isToShow ? element.classList.remove(this.classHide) : element.classList.add(this.classHide);

    isToShow ? 
      localStorage.removeItem(element.id + "_" + this.classHide) :
      localStorage.setItem(element.id + "_" + this.classHide, this.classHide);
  }  

  setVisibilities(): void {
    this.ressourcesIds.forEach(ressourceId => {
      let ressourceIdToHide = ressourceId + "_" + this.classHide;
      if(localStorage.getItem(ressourceIdToHide) == this.classHide){
        (document.getElementById(ressourceId) as Element).classList.add(this.classHide);
      }
    });
  }

  onInputChange(input: HTMLInputElement){
    input.value != "" ? 
      localStorage.setItem(input.id, input.value) : 
      localStorage.removeItem(input.id);
  }
  
  onRightInputFocus(event: Event){
    if(!this.canRessourceGoalChange){
      (event.currentTarget as HTMLElement).blur();
    }
  }

  onRightInputMineraisFocus(element: HTMLElement){
    element.blur();
  }

  onBookInputChange(input: HTMLInputElement){
    this.onInputChange(input);

    let bookViValue = Number.parseInt(this.leftInputBookVi.nativeElement.value, 10);
    let bookBValue = Number.parseInt(this.leftInputBookB.nativeElement.value, 10);
    
    bookViValue = Number.isNaN(bookViValue) ? 0 : bookViValue;
    bookBValue = Number.isNaN(bookBValue) ? 0 : Math.floor(bookBValue / 4);

    let total = bookViValue + bookBValue;

    this.leftInputBookTotal.nativeElement.value = total.toString();

    total == 0 ? 
      localStorage.removeItem(this.leftInputBookTotal.nativeElement.id) :
      localStorage.setItem(this.leftInputBookTotal.nativeElement.id, total.toString());
  }

}