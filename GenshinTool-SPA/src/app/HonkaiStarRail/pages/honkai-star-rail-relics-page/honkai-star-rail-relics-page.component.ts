import { Component, OnInit } from '@angular/core';
import { HSRRessourceService } from '../../Services/hsr-ressourcesService';

@Component({
  selector: 'app-honkai-star-rail-relics-page',
  templateUrl: './honkai-star-rail-relics-page.component.html',
  styleUrls: ['./honkai-star-rail-relics-page.component.css']
})
export class HonkaiStarRailRelicsPageComponent implements OnInit{
  private tabOpenedSaveKey = "hsr_relicsPage_mainTab";
  constructor(private ressourceService: HSRRessourceService){}

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.findAndOpenLastOpenedSubTab();
  }

  findAndOpenLastOpenedSubTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      if(key.includes("hsr_relicsPage_subTab")){
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
}
