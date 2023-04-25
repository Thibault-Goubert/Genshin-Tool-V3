import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boss-ressources-page',
  templateUrl: './boss-ressources-page.component.html',
  styleUrls: ['./boss-ressources-page.component.css']
})
export class BossRessourcesPageComponent implements OnInit{
  private subTabOpenedSaveKey = "ressourcesPage_subTab_boss";

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.subTabOpenedSaveKey, "btn_boss");
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
