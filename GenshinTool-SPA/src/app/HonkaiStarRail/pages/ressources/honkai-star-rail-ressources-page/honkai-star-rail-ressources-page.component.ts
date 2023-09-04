import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HSRRessourceService } from 'src/app/HonkaiStarRail/Services/hsr-ressourcesService';

@Component({
  selector: 'app-honkai-star-rail-ressources-page',
  templateUrl: './honkai-star-rail-ressources-page.component.html',
  styleUrls: ['./honkai-star-rail-ressources-page.component.css']
})
export class HonkaiStarRailRessourcesPageComponent implements OnInit{
  private tabOpenedSaveKey = "hsr_ressourcesPage_mainTab";
  canRessourceGoalChange: boolean = false;

  constructor(private ressourceService: HSRRessourceService){}

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.findAndOpenLastOpenedSubTab();
    this.ressourceService.currentCanRessourceGoalChange = false;
  }

  findAndOpenLastOpenedSubTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      if(key.includes("hsr_subTab_ressourcesPage")){
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
      if(key.includes("hsr_mainTab")){
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
