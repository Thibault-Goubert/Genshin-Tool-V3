import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterPanelListComponent } from 'src/app/components/character-page-components/character-panel-list/character-panel-list.component';
import { Character } from 'src/app/models/character.model';
import { CharacterGroup } from 'src/app/models/characterGroup.model';
import { CharacterRequest } from 'src/app/models/characterRequest.model';
import { CharacterService } from 'src/app/services/characters.service';
import { WeaponType } from 'src/app/models/enums/weaponType.enum';
import { Element } from 'src/app/models/enums/element.enum';
import { Region } from 'src/app/models/enums/region.enum';
import { Sex } from 'src/app/models/enums/sex.enum';


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

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.characters = [];
    this.characterGroups = [];
    this.characterRequest = new CharacterRequest();
    this.getRequestFromFilter(this.characterRequest);
  }

  public async getRequestFromFilter($event: CharacterRequest){
    this.characterRequest = $event;
    this.characterService.getCharactersByRequest(this.characterRequest).subscribe(characters => {
      this.characters = characters.items;
      this.manageGroups();
      this.manageTemplate();
    });    
  }

  private manageGroups() {
    if(this._requestHasAny){
        this.groupCharacters();
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
    this.characterGroups.forEach(g => {        
      g.characters = g.characters.filter((value, index, self) => self.map(x => x.name).indexOf(value.name) == index)
    })
  }

  private groupByWeaponTypes(): CharacterGroup[]{   
    var groups: CharacterGroup[] = [];

    this.characterRequest.weaponsTypesIds.forEach(weaponTypeId => {      
      var group: CharacterGroup = new CharacterGroup();
      group.weaponTypeImg = "./assets/icons/filters/filter_weapon" + WeaponType[weaponTypeId].toLowerCase() + "50.png"

      this.characters.forEach(c => {
        if(c.weaponTypeId == weaponTypeId){
          group.characters.push(c);
        }
      })

      groups.push(group);
    });

    if(this.characterRequest.elementsIds.length > 0){
      groups.forEach(g => {
        var characters: Character[] = [];
        this.orderByElement(g.characters).forEach(c => characters.push(c))
        g.characters = characters;
      })
    }
    else if(this.characterRequest.regionsIds.length > 0){
      groups.forEach(g => {
        var characters: Character[] = [];
        this.orderByRegion(g.characters).forEach(c => characters.push(c))
        g.characters = characters;
      })
    }

    if(this.characterRequest.sexIds.length > 0){
      var groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        var groupBySex: CharacterGroup[] = [];
        this.characterRequest.sexIds.forEach(sexId => {
          var group: CharacterGroup = new CharacterGroup();
          if(groupBySex.length == 0){ group.weaponTypeImg = g.weaponTypeImg; }
          g.characters.forEach(c => {
            if(c.sexId == sexId){
              group.characters.push(c);
            }
          })
          groupBySex.push(group);
        });
        groupBySex.forEach(gbs => groupsBySex.push(gbs));
      });
      groups = groupsBySex;
    }

    return groups;
  }
  private groupByElement(): CharacterGroup[]{
    var groups: CharacterGroup[] = [];
    this.characterRequest.elementsIds.forEach(elementId => {      
      var group: CharacterGroup = new CharacterGroup();
      this.characters.forEach(c => {
        if(c.element == Element[elementId]){
          group.characters.push(c);
        }
      })
      groups.push(group);
    });

    if(this.characterRequest.elementsIds.length > 0){
      groups.forEach(g => {
        var characters: Character[] = [];
        this.orderByElement(g.characters).forEach(c => characters.push(c))
        g.characters = characters;
      })
    }

    if(this.characterRequest.sexIds.length > 0){
      var groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.sexIds.forEach(sexId => {
          var group: CharacterGroup = new CharacterGroup();
          g.characters.forEach(c => {
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
  private groupByRegion(): CharacterGroup[]{
    var groups: CharacterGroup[] = [];
    
    this.characterRequest.regionsIds.forEach(regionId => {      
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
        var characters: Character[] = [];
        this.orderByRarity(g.characters).forEach(c => characters.push(c))
        g.characters = characters;
      })
    }

    if(this.characterRequest.sexIds.length > 0){
      var groupsBySex: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.sexIds.forEach(sexId => {
          var group: CharacterGroup = new CharacterGroup();
          g.characters.forEach(c => {
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
    this.characterRequest.sexIds.forEach(sexId => {      
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
        var characters: Character[] = [];
        this.orderByRarity(g.characters).forEach(c => characters.push(c))
        g.characters = characters;
      })
    }

    if(this.characterRequest.rarities.length > 0){
      var groupsByRarity: CharacterGroup[] = [];
      groups.forEach(g => {
        this.characterRequest.rarities.forEach(rarity => {
          var group: CharacterGroup = new CharacterGroup();
          g.characters.forEach(c => {
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
    this.characterRequest.rarities.forEach(rarity => {      
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

    this.characterRequest.elementsIds.forEach(e => {
      var charactersSubOrder: Character[] = [];
      charToOrder.forEach(c => {
        if(c.element == Element[e]){
          charactersSubOrder.push(c);
        }
      })
      if(this.characterRequest.rarities.length > 0){
        this.orderByRarity(charactersSubOrder).forEach(c => charactersOrdered.push(c))
      }
      else{
        charactersSubOrder.forEach(c => charactersOrdered.push(c));
      }
    });
    
    return charactersOrdered;
  }
  private orderByRegion(charToOrder: Character[]): Character[]{
    var charactersOrdered: Character[] = [];

    this.characterRequest.regionsIds.forEach(r => {
      var charactersSubOrder: Character[] = [];
      charToOrder.forEach(c => {
        if(c.region == Region[r]){
          charactersSubOrder.push(c);
        }
      })
      if(this.characterRequest.rarities.length > 0){
        this.orderByRarity(charactersSubOrder).forEach(c => charactersOrdered.push(c))
      }
      else{
        charactersSubOrder.forEach(c => charactersOrdered.push(c));
      }
    });
    
    return charactersOrdered;
  }
  private orderByRarity(charToOrder: Character[]): Character[]{
    var charactersOrdered: Character[] = [];

    this.characterRequest.rarities.forEach(r => {
      charToOrder.forEach(c => {
        if(c.rarity == r){
          charactersOrdered.push(c);
        }
      })
    });
    
    return charactersOrdered;
  }
}