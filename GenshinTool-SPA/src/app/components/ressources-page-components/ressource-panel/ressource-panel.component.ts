import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ressource } from 'src/app/models/Ressource/ressource.model';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ressource-panel',
  templateUrl: './ressource-panel.component.html',
  styleUrls: ['./ressource-panel.component.css']
})
export class RessourcePanelComponent implements OnInit{
  @Input() ressource!: Ressource;
  
  @ViewChild('leftInput', {static: true}) leftInput!: ElementRef<HTMLInputElement>;
  @ViewChild('rightInput', {static: true}) rightInput!: ElementRef<HTMLInputElement>;
  
  isHided!: boolean;

  ressourceId!: string;
  backgroundImg!: string;
  ressourceImg!: string
  leftInputId!: string;
  rightInputId!: string;

  private ressourceIdToHide!: string;
  private canRessourceGoalChange: boolean = false;

  constructor(private ressourceService: RessourceService){}

  ngOnInit(): void {
    this.ressourceId = `panel-${this.ressource.name}`;

    this.backgroundImg = `assets/icons/recoltables/case_${this.ressource.rarity}.png`;
    this.ressourceImg = `assets/icons/recoltables/${this.ressource.name}.png`;

    this.leftInputId = `input_left-${this.ressource.name}`
    this.rightInputId = `input_right-${this.ressource.name}`

    this.setVisibility();

    this.ressourceService.canRessourceGoalChange.subscribe(b => this.canRessourceGoalChange = b);

    this.setInputValues();
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
}

