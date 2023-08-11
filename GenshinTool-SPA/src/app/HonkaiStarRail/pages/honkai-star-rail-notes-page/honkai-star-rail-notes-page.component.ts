import { Component, OnInit } from '@angular/core';
import { HSRRessourceService } from '../../Services/hsr-ressourcesService';

@Component({
  selector: 'app-honkai-star-rail-notes-page',
  templateUrl: './honkai-star-rail-notes-page.component.html',
  styleUrls: ['./honkai-star-rail-notes-page.component.css']
})
export class HonkaiStarRailNotesPageComponent implements OnInit{
  private tabOpenedSaveKey = "hsr_notesPage_mainTab";
  constructor(private ressourceService: HSRRessourceService){}

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.findAndOpenLastOpenedSubTab();
    this.setSavedValues();
  }
  
  setSavedValues() {
    let textareas = document.getElementsByName("textarea")
    textareas.forEach(element => {
      let value = localStorage.getItem(element.id)
      if(value){
        (element as HTMLTextAreaElement).value = value;
      }
    });
  }

  findAndOpenLastOpenedSubTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      if(key.includes("hsr_notesPage_subTab")){
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

  onChange(event: Event){
    let element = event.target as HTMLTextAreaElement;
    localStorage.setItem(element.id, element.value)
  }
}
