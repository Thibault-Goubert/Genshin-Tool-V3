import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/Genshin/services/ressource.service';

@Component({
  selector: 'app-ressources-page',
  templateUrl: './ressources-page.component.html',
  styleUrls: ['./ressources-page.component.css']
})
export class RessourcesPageComponent implements OnInit{
  private tabOpenedSaveKey = "ressourcesPage_mainTab";
  canRessourceGoalChange: boolean = false;

  constructor(private ressourceService: RessourceService){}

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.findAndOpenLastOpenedSubTab();
    this.ressourceService.currentCanRessourceGoalChange = false;
  }

  findAndOpenLastOpenedSubTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      if(key.includes("ressourcesPage_subTab")){
        let value = localStorage.getItem(key);
        if(value != undefined){
          let btn = document.getElementById(value)
          btn?.click();
        }
      }
    }
  }

  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("mainTab")){
        localStorage.removeItem(key);
        break;
      }
    }
  }

  onToggleRessourceGoalClick(): void{
    this.canRessourceGoalChange = !this.canRessourceGoalChange;
    this.ressourceService.setToggleRessourceGoalState(this.canRessourceGoalChange);
  }
}
