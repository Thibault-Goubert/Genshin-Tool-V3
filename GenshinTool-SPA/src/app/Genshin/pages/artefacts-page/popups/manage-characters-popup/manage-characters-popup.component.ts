import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/Genshin/models/Character/character.model';
import { CharacterService } from 'src/app/Genshin/services/characters.service';

@Component({
  selector: 'app-manage-characters-popup',
  templateUrl: './manage-characters-popup.component.html',
  styleUrls: ['./manage-characters-popup.component.css']
})
export class ManageCharactersPopupComponent implements OnInit{
  private allCharacterFilter!: string;
  private allCharacters!: Character[];
  public allDisplayedCharacters!: Character[];  

  private currentCharacterFilter!: string;
  private currentCharacters!: Character[];
  public currentDisplayedCharacters!: Character[];
  
  @Output() characterUsedListChangedEvent = new EventEmitter();
  @Output() closeCharactersPopupEvent = new EventEmitter();

  private selectedCharacter!: Character | null;
  private selectedDiv!: HTMLDivElement | null;
  
  constructor(private characterService: CharacterService, private router: Router) {
    this.allCharacterFilter = '';
    this.allCharacters = [];
    this.allDisplayedCharacters = [];

    this.currentCharacterFilter = '';
    this.currentCharacters = [];
    this.currentDisplayedCharacters = [];
  }

  ngOnInit(): void {    
    this.characterService.getCharacters().subscribe(characters => {
      this.allCharacters = characters.items.filter(character => !character.isUsed);
      console.log(this.allCharacters);
      this.currentCharacters = characters.items.filter(character => character.isUsed);
      this.updateDisplayedLists();
    });
  }

  onAllCharactersInputChange(value: string): void{
    this.allCharacterFilter = value;
    this.allDisplayedCharacters = this.filterCharacters(value, this.allCharacters);
  }

  onCurrentCharactersInputChange(value: string): void{ 
    this.currentCharacterFilter = value; 
    this.currentDisplayedCharacters = this.filterCharacters(value, this.currentCharacters);
  }

  filterCharacters(value: string, array: Character[]): Character[]{
    value = value.toLowerCase().trim().replaceAll(' ', '');
    return array.filter(character => {
      let characterName = character.name.toLowerCase().trim().replaceAll(' ', '');
      return characterName.includes(value) ? true : false;
    })     
  }

  addCharacterToCurrent(char: Character){
    let allIndex = this.allCharacters.indexOf(char);

    if(allIndex >= 0){
      let result = this.characterService.setCharacterUsed(char.name, true).subscribe();      
      if(result){
        this.currentCharacters.push(char);
        this.allCharacters.splice(allIndex, 1);
        this.updateDisplayedLists();
      }
      else{
        console.log(result);
      }
    }

    this.selectedCharacter = null;
  }

  onSelectCharacter(char: Character){
    this.selectedCharacter = char;

    if(this.selectedDiv){
      this.selectedDiv.classList.remove("selectedRow");
    }
    this.selectedDiv = document.getElementById("popup_manageCharacters_List_Row_" + char.name) as HTMLDivElement
    this.selectedDiv.classList.add("selectedRow");
  }

  onSwitchClick(){
    if(this.selectedCharacter){
      this.addCharacterToCurrent(this.selectedCharacter);
    }
  }

  removeCharacterFromCurrent(char: Character){
    let currentIndex = this.currentCharacters.indexOf(char);
    if(currentIndex >= 0){
      let result = this.characterService.setCharacterUsed(char.name, false).subscribe();      
      if(result){
        this.currentCharacters.splice(currentIndex, 1);
        this.allCharacters.push(char);
        this.updateDisplayedLists();
      }
      else{
        console.log(result);
      }
    }
  }

  updateDisplayedLists(){
    this.currentDisplayedCharacters = this.filterCharacters(this.currentCharacterFilter, this.currentCharacters);
    this.allDisplayedCharacters = this.filterCharacters(this.allCharacterFilter, this.allCharacters);
  }

  onClose(){
    this.closeCharactersPopupEvent.emit();
    this.characterUsedListChangedEvent.emit(this.currentCharacters);
  }
}