import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/models/Ressource/test/definition.model';
import elemDefinition from "./elementsRessourcesDefinition.json"

@Component({
  selector: 'app-boss-ressources-elements',
  templateUrl: './boss-ressources-elements.component.html',
  styleUrls: ['./boss-ressources-elements.component.css']
})
export class BossRessourcesElementsComponent implements OnInit{
  def!: Definition;

  ngOnInit(): void {
    this.def = elemDefinition.definition;
  }
} 