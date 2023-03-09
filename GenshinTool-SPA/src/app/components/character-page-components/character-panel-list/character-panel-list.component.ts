import { Component, OnInit } from '@angular/core';
import { Character } from '../../../models/character.model';
import { CharacterService} from '../../../services/characters.service';

@Component({
  selector: 'app-character-panel-list',
  templateUrl: './character-panel-list.component.html',
  styleUrls: ['./character-panel-list.component.css']
})
export class CharacterPanelListComponent implements OnInit{
  characters!: Character[]

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters.items;
    });
  }
}
