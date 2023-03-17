import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterRequest } from 'src/app/models/characterRequest.model';
import { Element } from 'src/app/models/enums/element.enum';
import { WeaponType } from 'src/app/models/enums/weaponType.enum';
import { Sex } from 'src/app/models/enums/sex.enum';

@Component({
  selector: 'app-character-filters',
  templateUrl: './character-filters.component.html',
  styleUrls: ['./character-filters.component.css']
})
export class CharacterFiltersComponent {
  @Output() filter = new EventEmitter();
  
  elements = Element;
  weaponTypes = WeaponType;
  sex = Sex;

  characterRequest!: CharacterRequest;

  constructor() {
    this.characterRequest = {
      elementsIds: [], 
      rarities: [],
      weaponsTypesIds: [],
      sexIds: []
    };
  }

  public AddOrRemoveRarityFilter(rarity: number){
    const list = this.characterRequest.rarities;
    this.AddOrRemoveValueFromArray(list, rarity);
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveElementFilter(element: Element){
    const list = this.characterRequest.elementsIds;
    this.AddOrRemoveValueFromArray(list, element);
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveWeaponTypeFilter(weaponType: WeaponType){
    const list = this.characterRequest.weaponsTypesIds;
    this.AddOrRemoveValueFromArray(list, weaponType);
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveSexFilter(sex: Sex){
    const list = this.characterRequest.sexIds;
    this.AddOrRemoveValueFromArray(list, sex);
    this.filter.emit(this.characterRequest);
  }

  private AddOrRemoveValueFromArray(array: number[], value: number){
    if(array.includes(value)){
      let index = array.indexOf(value);
      if(index != -1){
        array.splice(index, 1);
      }
    }
    else{
      array.push(value);
    }
  }

  public RequestCountainsRarity(rarity: number): boolean{
    return this.characterRequest.rarities.includes(rarity)
  }
  public RequestCountainsElement(element: Element): boolean{
    return this.characterRequest.elementsIds.includes(element)
  }
  public RequestCountainsWeaponType(weaponType: WeaponType): boolean{
    return this.characterRequest.weaponsTypesIds.includes(weaponType)
  }
  public RequestCountainsSex(sex: Sex): boolean{
    return this.characterRequest.sexIds.includes(sex)
  }

}

