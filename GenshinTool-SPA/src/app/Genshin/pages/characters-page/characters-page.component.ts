import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterPanelListComponent } from 'src/app/Genshin/components/character-page-components/character-panel-list/character-panel-list.component';
import { Character } from 'src/app/Genshin/models/Character/character.model';
import { CharacterGroup } from 'src/app/Genshin/models/Character/characterGroup.model';
import { CharacterRequest } from 'src/app/Genshin/models/Character/characterRequest.model';
import { CharacterService } from 'src/app/Genshin/services/characters.service';
import { WeaponType } from 'src/app/Genshin/models/enums/weaponType.enum';
import { Element } from 'src/app/Genshin/models/enums/element.enum';
import { Region } from 'src/app/Genshin/models/enums/region.enum';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {
  @ViewChild(CharacterPanelListComponent, {static : true}) 
    characterListComponent! : CharacterPanelListComponent;

  characters!: Character[];
  characterRequest!: CharacterRequest;
  characterGroups!: CharacterGroup[]

  get isFilteredByElement(): boolean{
    return (this.characterRequest.elementsIds.length > 0);
  }
  get isFilteredByWeaponType(): boolean{
    return (this.characterRequest.weaponsTypesIds.length > 0);
  }
  get isFilteredBySex(): boolean{
    return (this.characterRequest.sexIds.length > 0);
  }
  get isFilteredByRarity(): boolean{
    return (this.characterRequest.rarities.length > 0);
  }
  get isFilteredByRegion(): boolean{
    return (this.characterRequest.regionsIds.length > 0);
  }

  private get _requestHasAny(): boolean{
    return (this.characterRequest.rarities.length > 0 ||
      this.characterRequest.elementsIds.length > 0 ||
      this.characterRequest.weaponsTypesIds.length > 0 ||
      this.characterRequest.regionsIds.length > 0 ||
      this.characterRequest.sexIds.length > 0);
  }

  private tabOpenedSaveKey = "charactersPage_mainTab";

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.characters = [];
    this.characterGroups = [];
    this.characterRequest = new CharacterRequest();

    this.getRequestFromFilter(this.characterRequest);

    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
  }

  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("mainTab")){
        localStorage.removeItem(key);
      }
    }
  }

  public async getRequestFromFilter($event: CharacterRequest){
    this.characterRequest = $event;
    this.characterService.getCharactersByRequest(this.characterRequest).subscribe(characters => {
      this.characters = characters.items.sort((a, b) => a.name.localeCompare(b.name));
      this.manageGroups();
      this.manageTemplate();
    });    
  }

  private manageGroups() {
    if(this._requestHasAny){
        this.groupCharacters();
        this.characterGroups.forEach(g => {        
          g.characters = g.characters.filter((value: { name: any; }, index: any, self: any[]) => self.map((x: { name: any; }) => x.name).indexOf(value.name) == index)
        })
      }
      else{
        this.characterGroups = []
        this.characters = this.characters.filter((value, index, self) => self.map(x => x.name).indexOf(value.name) == index);
      }
  }

  private manageTemplate(): void{
    if(this._requestHasAny){
      this.characterListComponent.triggerTemplateChange(2);
    }
    else{
      this.characterListComponent.triggerTemplateChange(1);
    }
  }

  private groupCharacters(){
    this.characterGroups = [];

    if(this.isFilteredByWeaponType){
      this.characterGroups = this.groupByWeaponTypes();
    }
    else if(this.isFilteredByElement){
      this.characterGroups = this.groupByElement();
    }
    else if(this.isFilteredByRegion){
      this.characterGroups = this.groupByRegion();
    }
    else if(this.isFilteredBySex){
      this.characterGroups = this.groupBySex();
    }
    else if(this.isFilteredByRarity){
      this.characterGroups = this.groupByRarities();
    }
    else {
      var group: CharacterGroup = new CharacterGroup();
      group.characters = this.characters;
      this.characterGroups.push(group)
    }
  }  

  private genericGroupBy<T>(type: T, charProperty: number[]): CharacterGroup[] {
    const groups: CharacterGroup[] = [];

    charProperty.forEach(id => {
      const group: CharacterGroup = new CharacterGroup();
      if(type == WeaponType){group.weaponTypeImg = `assets/icons/filters/${WeaponType[id].toLowerCase()}50.png`;}
    });

    return groups;
  }
  private groupByWeaponTypes(): CharacterGroup[] {
    const groups: CharacterGroup[] = [];
  
    this.characterRequest.weaponsTypesIds.forEach((weaponTypeId: number) => {
      const group: CharacterGroup = new CharacterGroup();
        group.weaponTypeImg = `assets/icons/filters/filter_weapon${WeaponType[weaponTypeId].toLowerCase()}50.png`;
  
      const predicateWT = function(c: Character, id: number): boolean{
        return c.weaponTypeId === id;
      }
      group.characters = this.characters.filter((c) => predicateWT(c, weaponTypeId));
  
      groups.push(group);
    });
  
    if (this.characterRequest.elementsIds.length > 0) {
      groups.forEach(g => {
        g.characters.concat(this.orderByElement(g.characters));
      });
    } else if (this.characterRequest.regionsIds.length > 0) {
      groups.forEach(g => {
        g.characters.concat(this.orderByRegion(g.characters));
      });
    }
  
    if (this.characterRequest.sexIds.length > 0) {
      const groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.sexIds.forEach((sexId: any) => {
          const group: CharacterGroup = new CharacterGroup();
          group.weaponTypeImg = groups[0].weaponTypeImg;
  
          group.characters = g.characters.filter((c: { sexId: any; }) => c.sexId === sexId);
          groupsBySex.push(group);
        });
      });
      return groupsBySex;
    }
  
    return groups;
  }
  
  private groupByElement(): CharacterGroup[] {
    const groups: CharacterGroup[] = [];
  
    this.characterRequest.elementsIds.forEach((elementId: number) => {
      const group: CharacterGroup = new CharacterGroup();
  
      group.characters = this.characters.filter(c => c.element === Element[elementId]);
  
      groups.push(group);
    });
  
    if (this.characterRequest.sexIds.length > 0) {
      const groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.sexIds.forEach((sexId: any) => {
          const group: CharacterGroup = new CharacterGroup();
  
          group.characters = g.characters.filter((c: { sexId: any; }) => c.sexId === sexId);
          groupsBySex.push(group);
        });
      });
      return groupsBySex;
    }
  
    return groups;
  }
  private groupByRegion(): CharacterGroup[]{
    var groups: CharacterGroup[] = [];
    
    this.characterRequest.regionsIds.forEach((regionId: number) => {      
      var group: CharacterGroup = new CharacterGroup();
      this.characters.forEach(c => {
        if(c.regionId == regionId){
          group.characters.push(c);
        }
      })
      groups.push(group);
    });

    if(this.characterRequest.elementsIds.length > 0){
      groups.forEach(g => {
        g.characters = this.orderByRarity(g.characters);
      })
    }

    if(this.characterRequest.sexIds.length > 0){
      var groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.sexIds.forEach((sexId: any) => {
          var group: CharacterGroup = new CharacterGroup();
          g.characters.forEach((c) => {
            if(c.sexId == sexId){
              group.characters.push(c);
            }
          })
          groupsBySex.push(group);
        });
      });
      groups = groupsBySex;
    }

    return groups;
  }
  private groupBySex(): CharacterGroup[] {
    var groups: CharacterGroup[] = [];
    this.characterRequest.sexIds.forEach((sexId: number) => {      
      var group: CharacterGroup = new CharacterGroup();
      this.characters.forEach(c => {
        if(c.sexId == sexId){
          group.characters.push(c);
        }
      })
      groups.push(group);
    });
    
    if(this.characterRequest.rarities.length > 0){
      groups.forEach(g => {
        g.characters = this.orderByRarity(g.characters);
      })
    }

    if(this.characterRequest.rarities.length > 0){
      var groupsByRarity: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.rarities.forEach((rarity: number) => {
          var group: CharacterGroup = new CharacterGroup();
          g.characters.forEach((c) => {
            if(c.rarity == rarity){
              group.characters.push(c);
            }
          })
          groupsByRarity.push(group);
        });
      });
      groups = groupsByRarity;
    }

    return groups;
  }
  private groupByRarities(): CharacterGroup[] {
    var groups: CharacterGroup[] = [];
    this.characterRequest.rarities.forEach((rarity: number) => {      
      var group: CharacterGroup = new CharacterGroup();
      this.characters.forEach(c => {
        if(c.rarity == rarity){
          group.characters.push(c);
        }
      })
      groups.push(group);
    });
    return groups;
  }


  private orderByElement(charToOrder: Character[]): Character[]{
    var charactersOrdered: Character[] = [];

    this.characterRequest.elementsIds.forEach((e: number) => {
      var charactersSubOrder: Character[] = [];
      charToOrder.forEach(c => {
        if(c.element == Element[e]){
          charactersSubOrder.push(c);
        }
      })
      if(this.characterRequest.rarities.length > 0){
        charactersOrdered.concat(this.orderByRarity(charactersSubOrder));
      }
      else{
        charactersOrdered.concat(charactersSubOrder);
      }
    });
    
    return charactersOrdered;
  }
  private orderByRegion(charToOrder: Character[]): Character[]{
    var charactersOrdered: Character[] = [];

    this.characterRequest.regionsIds.forEach((r: number) => {
      var charactersSubOrder: Character[] = [];
      charToOrder.forEach(c => {
        if(c.region == Region[r]){
          charactersSubOrder.push(c);
        }
      })
      if(this.characterRequest.rarities.length > 0){
        charactersOrdered.concat(this.orderByRarity(charactersSubOrder));
      }
      else{
        charactersOrdered.concat(charactersSubOrder);
      }
    });
    
    return charactersOrdered;
  }
  private orderByRarity(charToOrder: Character[]): Character[]{
    var charactersOrdered: Character[] = [];

    this.characterRequest.rarities.forEach((r: number) => {
      charToOrder.forEach(c => {
        if(c.rarity == r){
          charactersOrdered.push(c);
        }
      })
    });
    
    return charactersOrdered;
  }
}