import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../../models/character.model';
import { CharacterService} from '../../../services/characters.service';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.css']
})
export class CharacterPanelComponent implements OnInit {
  @Input() character!: Character;

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {

  }

}
