import { Component, OnInit } from '@angular/core';
import { RessourceDomainDefinition } from 'src/app/models/Ressource/test/definition.model';
import domainDefinition from "./domainsRessourcesDefinition.json";
import { Day } from "../../../../models/enums/days.enum"

@Component({
  selector: 'app-domain-ressources-page',
  templateUrl: './domain-ressources-page.component.html',
  styleUrls: ['./domain-ressources-page.component.css']
})

export class DomainRessourcesPageComponent implements OnInit{
  def!: RessourceDomainDefinition;
  private subTabOpenedSaveKey = "ressourcesPage_subTab_domains";
  currentDay!: string;

  ngOnInit(): void {
    this.def = domainDefinition.ressourceDomainDefinition;
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.subTabOpenedSaveKey, "btn_domains");
    this.currentDay = Day[new Date().getDay()];
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