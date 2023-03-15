import { Component, OnInit } from '@angular/core';
import { CharacterRequest } from 'src/app/models/characterRequest.model';
import { Character } from '../../../models/character.model';
import { CharacterService} from '../../../services/characters.service';

@Component({
  selector: 'app-character-panel-list',
  templateUrl: './character-panel-list.component.html',
  styleUrls: ['./character-panel-list.component.css']
})
export class CharacterPanelListComponent implements OnInit{
  characters!: Character[]
  characterRequest!: CharacterRequest

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters.items;
    });
  }

  private getCharactersByRequest(req: CharacterRequest){
    this.characterService.getCharactersByRequest(req).subscribe(characters =>{
      this.characters = characters.items;
    });
  }

  public getRequestFromFilter($event: CharacterRequest){
    this.getCharactersByRequest($event);
  }
}
