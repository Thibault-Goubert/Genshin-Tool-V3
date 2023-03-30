import { Component, OnInit } from '@angular/core';
import { RessourceDomainDefinition } from 'src/app/models/Ressource/test/definition.model';
import domainDefinition from "../../../../models/Ressource/domainsRessourcesDefinition.json";

@Component({
  selector: 'app-domain-ressources-page',
  templateUrl: './domain-ressources-page.component.html',
  styleUrls: ['./domain-ressources-page.component.css']
})

export class DomainRessourcesPageComponent implements OnInit{
  def!: RessourceDomainDefinition;

  ngOnInit(): void {
    this.def = domainDefinition.ressourceDomainDefinition;
    console.log(this.def)
  }
}