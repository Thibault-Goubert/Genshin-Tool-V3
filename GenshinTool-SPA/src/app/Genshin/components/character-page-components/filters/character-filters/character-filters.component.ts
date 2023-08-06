import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterRequest } from 'src/app/Genshin/models/Character/characterRequest.model';
import { Element } from 'src/app/Genshin/models/enums/element.enum';
import { WeaponType } from 'src/app/Genshin/models/enums/weaponType.enum';
import { Sex } from 'src/app/Genshin/models/enums/sex.enum';
import { Region } from 'src/app/Genshin/models/enums/region.enum';

@Component({
  selector: 'app-character-filters',
  templateUrl: './character-filters.component.html',
  styleUrls: ['./character-filters.component.css']
})
export class CharacterFiltersComponent implements OnInit {
  @Output() filter = new EventEmitter();
  
  elements = Element;
  weaponTypes = WeaponType;
  sex = Sex;
  rarities = [4,5];
  regions = Region;

  characterRequest!: CharacterRequest;

  constructor() {}
  
  ngOnInit(): void {
    this.characterRequest = new CharacterRequest();
  }

  public AddOrRemoveRarityFilter(rarity: number){
    if(this.RequestCountainsAllRarity()){
      this.characterRequest.rarities = [rarity];
    }
    else if(this.characterRequest.rarities.length == 1 && this.characterRequest.rarities[0] == rarity){
      this.characterRequest.rarities = [];
    }
    else{
      this.characterRequest.rarities = [rarity];
    }
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveElementFilter(element: Element){
    if(this.RequestCountainsAllElement()){
      this.characterRequest.elementsIds = [];
    }
    const list = this.characterRequest.elementsIds;
    this.AddOrRemoveValueFromArray(list, element);
    list.sort((a: number,b: number) => a - b)
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveWeaponTypeFilter(weaponType: WeaponType){
    if(this.RequestCountainsAllWeaponType()){
      this.characterRequest.weaponsTypesIds = [];
    }
    const list = this.characterRequest.weaponsTypesIds;
    this.AddOrRemoveValueFromArray(list, weaponType);
    list.sort((a,b) => a - b)
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveSexFilter(sex: Sex){
    if(this.RequestCountainsAllSex()){
      this.characterRequest.sexIds = [sex];
    }
    else if(this.characterRequest.sexIds.length == 1 && this.characterRequest.sexIds[0] == sex){
      this.characterRequest.sexIds = [];
    }
    else{
      this.characterRequest.sexIds = [sex];
    }
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveRegionFilter(region: Region){
    if(this.RequestCountainsAllRegion()){
      this.characterRequest.regionsIds = [];
    }
    const list = this.characterRequest.regionsIds;
    this.AddOrRemoveValueFromArray(list, region);
    list.sort((a: number,b: number) => a - b)
    this.filter.emit(this.characterRequest);
  }

  public AddOrRemoveAllElements(){
    if(!this.RequestCountainsAllElement()){
      this.characterRequest.elementsIds = [];
    }
    const list = this.characterRequest.elementsIds;
    const elements = Object.keys(Element).filter((v) => !isNaN(Number(v)));
    for(const elem of elements){
      this.AddOrRemoveValueFromArray(list, Number(elem))
    }
    this.filter.emit(this.characterRequest);
  }  
  public AddOrRemoveAllWeaponTypes(){     
    if(!this.RequestCountainsAllWeaponType()){
      this.characterRequest.weaponsTypesIds = [];
    }
    const list = this.characterRequest.weaponsTypesIds;
    const weaponTypes = Object.keys(WeaponType).filter((v) => !isNaN(Number(v)));
    for(var wt of weaponTypes){
      this.AddOrRemoveValueFromArray(list, Number(wt))
    }
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveAllSex(){
    if(!this.RequestCountainsAllSex()){
      this.characterRequest.sexIds = [];
    }
    const list = this.characterRequest.sexIds;
    const sexs = Object.keys(Sex).filter((v) => !isNaN(Number(v)));
    for(var sex of sexs){
      this.AddOrRemoveValueFromArray(list, Number(sex))
    }
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveAllRarities(){
    if(!this.RequestCountainsAllRarity()){
      this.characterRequest.rarities = [5,4];
    }
    else{
      this.characterRequest.rarities = [];
    }
    this.filter.emit(this.characterRequest);
  }
  public AddOrRemoveAllRegions(){
    if(!this.RequestCountainsAllRegion()){
      this.characterRequest.regionsIds = [];
    }
    const list = this.characterRequest.regionsIds;
    const regions = Object.keys(Region).filter((v) => !isNaN(Number(v)));
    for(const region of regions){
      this.AddOrRemoveValueFromArray(list, Number(region))
    }
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
  public RequestCountainsRegion(region: Region): boolean{
    return this.characterRequest.regionsIds.includes(region)
  }

  public RequestCountainsAllElement(): boolean{ 
    const elements = Object.keys(Element).filter((v) => !isNaN(Number(v)));
    for(const elem of elements){
      if(!this.characterRequest.elementsIds.includes(Number(elem))){
        return false;
      }      
    }
    return true;
  }  
  public RequestCountainsAllWeaponType(): boolean{
    const weaponTypes = Object.keys(WeaponType).filter((v) => !isNaN(Number(v)));
    for(var wt of weaponTypes){
      if(!this.characterRequest.weaponsTypesIds.includes(Number(wt))){
        return false;
      }
    }
    return true;
  }
  public RequestCountainsAllSex(): boolean{
    const sexs = Object.keys(Sex).filter((v) => !isNaN(Number(v)));
    for(var sex of sexs){
      if(!this.characterRequest.sexIds.includes(Number(sex))){
        return false;
      }
    }
    return true;
  }
  public RequestCountainsAllRarity(): boolean{
    const rarities = [5,4];
    for(var rarity of rarities){
      if(!this.characterRequest.rarities.includes(rarity)){
        return false;
      }
    }
    return true;
  }
  public RequestCountainsAllRegion(): boolean{ 
    const regions = Object.keys(Region).filter((v) => !isNaN(Number(v)));
    for(const region of regions){
      if(!this.characterRequest.regionsIds.includes(Number(region))){
        return false;
      }      
    }
    return true;
  } 

  public OnResetClick(){
    this.characterRequest.rarities = [];
    this.characterRequest.sexIds = [];
    this.characterRequest.elementsIds = [];
    this.characterRequest.weaponsTypesIds = [];
    this.characterRequest.regionsIds = [];
    this.filter.emit(this.characterRequest);
  }
}

