import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/routes';
import { Character } from '../../models/Character/character.model';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-artefacts-page',
  templateUrl: './artefacts-page.component.html',
  styleUrls: ['./artefacts-page.component.css']
})
export class ArtefactsPageComponent implements OnInit{

  private tabOpenedSaveKey = "artefactsPage_mainTab";
  public isCharPopupDisplayed = false;
  public isArtePopupDisplayed = false;

  public characters!: Character[];

  public selectedCharacter!: Character;

  constructor(private router: Router, private characterService: CharacterService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.updateUsed();
  }
  
  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("mainTab")){
        localStorage.removeItem(key);
        break;
      }
    }
  }

  onManageCharactersClick(){
    this.isCharPopupDisplayed = !this.isCharPopupDisplayed;
    this.isArtePopupDisplayed = false;
    if(!this.isCharPopupDisplayed){
      this.router.navigateByUrl(routes.genshinArtefacts);
      this.updateUsed();
    }
  }

  onManageArtefactsClick(){
    this.isArtePopupDisplayed = !this.isArtePopupDisplayed;

    if(this.isCharPopupDisplayed){
      this.updateUsed();
    }

    this.isCharPopupDisplayed = false;

    if(!this.isArtePopupDisplayed){
      this.router.navigateByUrl(routes.genshinArtefacts);
    }
  }

  updateUsed(){
    this.characterService.getCharactersUsed().subscribe(characters => {
      this.characters = characters.items;
    });
  }

  updateCharactersListHandler($event: Character[]){
    this.characters = $event;
  }

  closeCharactersPopupHandler(){
    this.isCharPopupDisplayed = false;
  }

  getCharacterSideImgSrc(name: string): string{
    return "assets/icons/characters/char_"+name.toLowerCase().replace(' ','_')+"_face.png";
  }

  getCharacterCardImgSrc(): string{
    return "assets/icons/characters/char_"+this.selectedCharacter.name.toLowerCase().replace(' ','_')+"_card.png";
  }

  onCharacterClick(character: Character){
    this.selectedCharacter = character;
  }
}
