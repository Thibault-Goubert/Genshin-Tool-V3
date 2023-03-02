import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
    providedIn: 'root'
  })
export class CharacterService{
    characters: Character[] = [
        {
            id: 1,
            Name: "test",
            ElementId: 1,
            WeaponTypeId: 1, 
            RegionId: 1,
            RarityId: 1,
            SexId: 1,
            WeaponId: 1, 
            IsCollab: false,
            Element: "test Element",
            WeaponType: "test WeaponType",
            Region: "test Region",
            Rarity: "test Rarity",
            Sex: "test Sex",
            Weapon: "test Weapon",

            BackgroundImg: "./assets/icons/characters/case5nat.png",
            PortraitImg: "./assets/icons/characters/char_ayaka.png",
            ElementImg: "./assets/icons/filters/element_cryo.png"
        },
        {
            id: 1,
            Name: "test",
            ElementId: 1,
            WeaponTypeId: 1, 
            RegionId: 1,
            RarityId: 1,
            SexId: 1,
            WeaponId: 1, 
            IsCollab: false,
            Element: "test Element",
            WeaponType: "test WeaponType",
            Region: "test Region",
            Rarity: "test Rarity",
            Sex: "test Sex",
            Weapon: "test Weapon",

            BackgroundImg: "./assets/icons/characters/case4nat.png",
            PortraitImg: "./assets/icons/characters/char_sayu.png",
            ElementImg: "./assets/icons/filters/element_anemo.png"
        }
    ];
}