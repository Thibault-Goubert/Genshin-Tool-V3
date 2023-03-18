import { Character } from "./character.model";

export class CharacterGroup{
    characters!: Character[];
    weaponTypeImg!: string;

    constructor() {
        this.characters = []
        this.weaponTypeImg = ""
    }
}