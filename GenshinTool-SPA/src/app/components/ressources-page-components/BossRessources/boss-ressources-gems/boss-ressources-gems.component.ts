import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boss-ressources-gems',
  templateUrl: './boss-ressources-gems.component.html',
  styleUrls: ['./boss-ressources-gems.component.css']
})
export class BossRessourcesGemsComponent implements OnInit{
  gemNames!: string[]
  gemRarities!: string[]

  ngOnInit(): void {
    this.gemNames = ["gem_a","gem_c","gem_e","gem_h","gem_p","gem_g","gem_d"]
    this.gemRarities = ["ve","b","vi","g"]
  }
}

