import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/models/Ressource/test/definition.model';
import bossDefinition from "./bossRessourcesDefinition.json"

@Component({
  selector: 'app-boss-ressources-boss',
  templateUrl: './boss-ressources-boss.component.html',
  styleUrls: ['./boss-ressources-boss.component.css']
})
export class BossRessourcesBossComponent implements OnInit{
  def!: Definition;

  ngOnInit(): void {
    this.def = bossDefinition.definition;
  }
} 