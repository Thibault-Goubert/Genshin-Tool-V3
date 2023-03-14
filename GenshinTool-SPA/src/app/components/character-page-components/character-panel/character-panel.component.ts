import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../models/character.model';

const iconsPath = "/assets/icons/";

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {
  @Input() character!: Character;

  constructor(){}

  ngOnInit(): void {
    this.character.portraitImg = this.buildCharacterPortraitPath();
    this.character.backgroundImg = this.buildCharacterBackgroundPath();
    this.character.elementImg  = this.buildCharacterElementPath();
  }

  private buildCharacterPortraitPath(): string{
    let charName = this.character.name.toLowerCase().replace(' ', '_').replace("traveler", "aether");
    let charPortraitPath = iconsPath + "characters/char_" + charName + ".png";
    return charPortraitPath;
  } 

  private buildCharacterBackgroundPath(): string{
    let path = iconsPath + "characters/case" + this.character.rarity + "nat";
    if(this.character.isCollab){
      path += "collab";
    }
    return path + ".png";
  }

  private buildCharacterElementPath(): string{
    return iconsPath + "filters/element_" + this.character.element.toLowerCase() + ".png";
  }

}
