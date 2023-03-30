import { Component, Input, OnInit } from '@angular/core';
import { Ressource } from 'src/app/models/Ressource/ressource.model';

@Component({
  selector: 'app-ressource-panel',
  templateUrl: './ressource-panel.component.html',
  styleUrls: ['./ressource-panel.component.css']
})
export class RessourcePanelComponent implements OnInit{
  @Input() ressource!: Ressource;
  isHided!: boolean;

  ressourceId!: string;
  backgroundImg!: string;
  ressourceImg!: string
  leftInputId!: string;
  rightInputId!: string;

  ngOnInit(): void {
    this.ressourceId = `panel-${this.ressource.name}`;

    this.backgroundImg = `assets/icons/recoltables/case_${this.ressource.rarity}.png`;
    this.ressourceImg = `assets/icons/recoltables/${this.ressource.name}.png`;

    this.leftInputId = `input_left-${this.ressource.name}`
    this.leftInputId = `input_right-${this.ressource.name}`
  }    

  OnClick(): void{
    this.isHided = !this.isHided;
  }
}
