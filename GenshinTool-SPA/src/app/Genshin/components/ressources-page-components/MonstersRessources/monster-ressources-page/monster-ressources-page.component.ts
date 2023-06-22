import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/Genshin/models/Ressource/test/definition.model';
import monsterDefinition from "./monsterRessourcesDefinition.json"

@Component({
  selector: 'app-monster-ressources-page',
  templateUrl: './monster-ressources-page.component.html',
  styleUrls: ['./monster-ressources-page.component.css']
})
export class MonsterRessourcesPageComponent implements OnInit{
  def!: Definition;
  private subTabOpenedSaveKey = "ressourcesPage_subTab_monsters";

  ngOnInit(): void {
    this.def = monsterDefinition.definition;
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.subTabOpenedSaveKey, "btn_monsters");
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
