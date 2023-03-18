export class CharacterRequest{
    rarities!: number[];
    elementsIds!: number[];
    weaponsTypesIds!: number[];
    sexIds!: number[];
    regionsIds!: number[];

    constructor() {
        this.elementsIds = [], 
        this.rarities = [],
        this.weaponsTypesIds = [],
        this.sexIds = [],
        this.regionsIds = []
    };
}