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
  private subTabOpenedSaveKey = "hsr_subTab_ressourcesPage_farm";

  ngOnInit(): void {
    this.def = farmDefinition.definition;
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.subTabOpenedSaveKey, "btn_farm");
  }

  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("hsr_subTab")){
        localStorage.removeItem(key);
        break;
      }
    }
  }
} 