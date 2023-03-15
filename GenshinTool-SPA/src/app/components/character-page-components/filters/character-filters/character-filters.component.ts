import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterRequest } from 'src/app/models/characterRequest.model';
import { Element } from 'src/app/models/element.enum';

@Component({
  selector: 'app-character-filters',
  templateUrl: './character-filters.component.html',
  styleUrls: ['./character-filters.component.css']
})
export class CharacterFiltersComponent {
  @Output() filter = new EventEmitter();
  elements = Element;
  characterRequest!: CharacterRequest;

  constructor() {
    this.characterRequest = {
      elementsIds: [], 
      rarities: [],
      weaponsTypesIds: [],
      sexIds: []
    }
  }

  public AddElementFilter(element: Element){
    this.characterRequest.elementsIds.push(element);
    this.filter.emit(this.characterRequest);
  }
}
