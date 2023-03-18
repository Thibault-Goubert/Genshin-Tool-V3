import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../models/character.model';
import { RegionRibbonColor } from '../../../models/enums/regionRibbonColor.enum';

const iconsPath = "/assets/icons/";

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {
  @Input() character!: Character;
  @Input() isFilteredByElement!: boolean;
  @Input() isFilteredByWeaponType!: boolean;
  @Input() isFilteredByRegion!: boolean;
  isElementVisible!: boolean;
  ribbonColor!: string;  

  constructor(){}

  ngOnInit(): void {
    this.character.portraitImg = this.buildCharacterPortraitPath();
    this.character.backgroundImg = this.buildCharacterBackgroundPath();
    this.character.elementImg  = this.buildCharacterElementPath();
    this.isElementVisible = this.shouldShowElement();
    this.ribbonColor = "#" + RegionRibbonColor[this.character.regionId];
  }

  private buildCharacterPortraitPath(): string{
    let charName = this.character.name.toLowerCase().replace(' ', '_');
    let charPortraitPath = iconsPath + "characters/char_" + charName + "_front.png";
    return charPortraitPath;
  } 

  private buildCharacterBackgroundPath(): string{
    let path = iconsPath + "characters/case_" + this.character.rarity + "nat";
    if(this.character.isCollab){
      path += "_collab";
    }
    return path + ".png";
  }

  private buildCharacterElementPath(): string{
    return iconsPath + "filters/filter_vision" + this.character.element.charAt(0).toLowerCase() + ".png";
  }

  private shouldShowElement(): boolean{
    return this.character.name != "Traveler" || (this.isFilteredByElement && !this.isFilteredByWeaponType);
  }
}
