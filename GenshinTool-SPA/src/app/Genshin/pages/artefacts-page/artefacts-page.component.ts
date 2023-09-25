import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/routes';
import { Character } from '../../models/Character/character.model';
import { CharacterService } from '../../services/characters.service';
import { ArtefactService } from '../../services/artefact.service';
import { ArtefactPiece } from '../../models/Artefact/artefactPiece.model';
import { Artefact } from '../../models/Artefact/artefact.model';

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
  public selectedCharacterArtefacts!: Artefact[]; 
  private selectedCardFace!: HTMLDivElement;

  public pieces!: ArtefactPiece[];

  constructor(private router: Router, 
    private characterService: CharacterService, 
    private artefactService: ArtefactService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.updateUsed();
    this.artefactService.getAllPiece().subscribe(result => {
      this.pieces = result.items;
    });
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
      this.characters = characters.items.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    });
  }

  updateCharactersListHandler($event: Character[]){
    this.characters = $event;
  }

  closeCharactersPopupHandler(){
    this.isCharPopupDisplayed = false;
  }
  closeArtefactsPopupHandler(){
    this.isArtePopupDisplayed = false;
  }

  getCharacterSideImgSrc(name: string): string{
    return "assets/icons/characters/char_"+name.toLowerCase().replace(' ','_')+"_face.png";
  }

  getCharacterCardImgSrc(): string{
    return "assets/icons/characters/char_"+this.selectedCharacter.name.toLowerCase().replace(' ','_')+"_card.png";
  }

  onCharacterClick(character: Character, cardCharFace: HTMLDivElement){
    this.selectedCharacter = character;

    if(this.selectedCardFace){
      this.selectedCardFace.classList.remove("selected");
    }

    this.selectedCardFace = cardCharFace;
    this.selectedCardFace.classList.add("selected");

    this.getCharacterArtefacts(character.id);
  }

  getCharacterArtefacts(id: Number) {
    this.artefactService.GetAllByCharacter(id).subscribe(result => {
      this.selectedCharacterArtefacts = result.items;
    });
  }

  getArtefactTypeImgSrc(name: string): string{
    return "assets/icons/filters/artifact_icon_"+name.toLowerCase()+"50.png";
  }

  getArtefactPiece(piece: ArtefactPiece): Artefact{
    if(piece){
      var arte = this.selectedCharacterArtefacts.find(x => x.pieceId == piece.id);
      var result = arte ?? new Artefact();
      console.log(result)
      return result
    }
    return new Artefact();
  }
}
