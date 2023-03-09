import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {
  @Input() character!: Character;

  constructor(){}

  ngOnInit(): void {
    this.character.portraitImg = "../../../assets/icons/characters/char_" + this.character.name.toLowerCase().replace(' ', '_') + ".png";
    this.character.backgroundImg = "../../../assets/icons/characters/char_" + this.character.name.toLowerCase().replace(' ', '_') + ".png";
    this.character.elementImg  = "../../../assets/icons/characters/char_" + this.character.name.toLowerCase().replace(' ', '_') + ".png";
  }

}
