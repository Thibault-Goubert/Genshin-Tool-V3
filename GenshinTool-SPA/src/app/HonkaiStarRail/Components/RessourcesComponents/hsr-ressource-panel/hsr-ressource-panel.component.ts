import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ressource } from 'src/app/Genshin/models/Ressource/ressource.model';
import { HSRRessourceService } from 'src/app/HonkaiStarRail/Services/hsr-ressourcesService';

@Component({
  selector: 'app-hsr-ressource-panel',
  templateUrl: './hsr-ressource-panel.component.html',
  styleUrls: ['./hsr-ressource-panel.component.css']
})
export class HsrRessourcePanelComponent implements OnInit{
  @Input() ressource!: Ressource;
  
  @ViewChild('leftInput', {static: true}) leftInput!: ElementRef<HTMLInputElement>;
  @ViewChild('rightInput', {static: true}) rightInput!: ElementRef<HTMLInputElement>;
  @ViewChild('footerUnderline', {static: true}) footerUnderline!: ElementRef<HTMLDivElement>;

  isHided!: boolean;

  ressourceId!: string;
  backgroundImg!: string;
  ressourceImg!: string
  leftInputId!: string;
  rightInputId!: string;

  private ressourceIdToHide!: string;
  private canRessourceGoalChange: boolean = false;

  constructor(private ressourceService: HSRRessourceService){}

  ngOnInit(): void {
    this.canRessourceGoalChange = this.ressourceService.currentCanRessourceGoalChange;
    
    this.ressourceService.canRessourceGoalChange.subscribe(b => {
      this.canRessourceGoalChange = b;
      this.setTabIndexAttribute();
    });

    this.ressourceId = `panel-${this.ressource.name}`;

    this.backgroundImg = `assets/honkai-star-rail/icons/filter/case_${this.ressource.rarity}.png`;
    this.ressourceImg = `assets/honkai-star-rail/icons/filter/${this.ressource.name}.png`;

    this.leftInputId = `input_left-${this.ressource.name}`
    this.rightInputId = `input_right-${this.ressource.name}`

    var underlineColor = this.getFooterUnderlineColorStyle(this.ressource.rarity);
    this.footerUnderline.nativeElement.classList.add(underlineColor);

    this.setVisibility();
    this.setInputValues();

    this.setTabIndexAttribute();
  } 

  setTabIndexAttribute() {
    if(this.canRessourceGoalChange){
      this.rightInput.nativeElement.removeAttribute('tabIndex');
      this.leftInput.nativeElement.setAttribute('tabIndex', '-1');
    }
    else{      
      this.rightInput.nativeElement.setAttribute('tabIndex', '-1');
      this.leftInput.nativeElement.removeAttribute('tabIndex');
    }
  }

  OnClick(): void{
    this.isHided = !this.isHided;
    this.isHided ? 
      localStorage.setItem(this.ressourceIdToHide, "hide") :
      localStorage.removeItem(this.ressourceIdToHide);
  }

  setVisibility(): void {
    this.ressourceIdToHide = this.ressourceId.toString() + "_hide";
    if(localStorage.getItem(this.ressourceIdToHide) == "hide"){
      this.isHided = true;
    }
  }

  onRightInputFocus(event: Event){
    console.log(this.canRessourceGoalChange)
    if(!this.canRessourceGoalChange){
      (event.currentTarget as HTMLElement).blur();
    }
  }

  onInputChange(element: HTMLInputElement){
    element.value != "" ? 
      localStorage.setItem(element.id, element.value) : 
      localStorage.removeItem(element.id);
  }

  setInputValues(): void {    
    this.leftInput.nativeElement.value = localStorage.getItem(this.leftInputId) ?? "";
    this.rightInput.nativeElement.value = localStorage.getItem(this.rightInputId) ?? "";
  }

  getFooterUnderlineColorStyle(rarity: string){
    switch (rarity) {
      case 'gr':
        return "underline_grey";
      case 've':
        return "underline_green";
      case 'b':
        return "underline_blue";
      case 'vi':
        return "underline_purple";
      case 'g':
        return "underline_gold";
      default:
        return '';
    }
  }
}

