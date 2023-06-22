import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artefacts-page',
  templateUrl: './artefacts-page.component.html',
  styleUrls: ['./artefacts-page.component.css']
})
export class ArtefactsPageComponent implements OnInit{
  private tabOpenedSaveKey = "artefactsPage_mainTab";

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
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
}
