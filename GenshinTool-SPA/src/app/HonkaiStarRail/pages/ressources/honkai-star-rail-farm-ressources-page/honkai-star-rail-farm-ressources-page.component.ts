import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/Genshin/models/Ressource/test/definition.model';
import farmDefinition from "./hsr_FarmRessourcesDefinition.json"

@Component({
  selector: 'app-honkai-star-rail-farm-ressources-page',
  templateUrl: './honkai-star-rail-farm-ressources-page.component.html',
  styleUrls: ['./honkai-star-rail-farm-ressources-page.component.css']
})
export class HonkaiStarRailFarmRessourcesPageComponent implements OnInit{
  def!: Definition;

  ngOnInit(): void {
    this.def = farmDefinition.definition;
  }
} 
