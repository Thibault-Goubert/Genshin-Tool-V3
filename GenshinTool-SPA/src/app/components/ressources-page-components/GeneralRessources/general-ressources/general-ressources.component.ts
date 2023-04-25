import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-general-ressources',
  templateUrl: './general-ressources.component.html',
  styleUrls: ['./general-ressources.component.css']
})
export class GeneralRessourcesComponent implements OnInit{
  @ViewChild('leftInputBookVi', {static: true}) leftInputBookVi!: ElementRef<HTMLInputElement>;
  @ViewChild('leftInputBookB', {static: true}) leftInputBookB!: ElementRef<HTMLInputElement>;
  @ViewChild('leftInputBookTotal', {static: true}) leftInputBookTotal!: ElementRef<HTMLInputElement>;

  ressourcesIds!: string[];
  private classHide: string = "hide";
  canRessourceGoalChange!: boolean;

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.ressourcesIds = ["panel_mora", "panel_xp", "panel_crown", "panel_minerais"];
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
