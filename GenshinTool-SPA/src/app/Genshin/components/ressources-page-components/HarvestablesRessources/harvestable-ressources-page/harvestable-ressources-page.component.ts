import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/Genshin/models/Ressource/test/definition.model';
import harvestableDefinition from "./harvestableRessourcesDefinition.json";

@Component({
  selector: 'app-harvestable-ressources-page',
  templateUrl: './harvestable-ressources-page.component.html',
  styleUrls: ['./harvestable-ressources-page.component.css']
})
export class HarvestableRessourcesPageComponent implements OnInit{
  def!: Definition;
  private subTabOpenedSaveKey = "ressourcesPage_subTab_harvestables";

  ngOnInit(): void {
    this.def = harvestableDefinition.definition;
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.subTabOpenedSaveKey, "btn_harvestables");
  }

  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("subTab")){
        localStorage.removeItem(key);
        break;
      }
    }
  }

}
