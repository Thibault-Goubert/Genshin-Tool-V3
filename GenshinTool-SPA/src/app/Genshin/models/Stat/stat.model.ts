import { StatName } from "./statName.model";

export class Stat{
    id!: number;
    value!: number;
    statName!: StatName;
    isMain!: boolean;
    associationId!: number;

    constructor(value: number = 0, statName: StatName, isMain: boolean = false, associationId: number = 0) {
        this.value = value;
        this.statName = statName;
        this.isMain = isMain;
        this.associationId = associationId;
    }
}