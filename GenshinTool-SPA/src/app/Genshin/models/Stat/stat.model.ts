import { StatName } from "./statName.model";

export class Stat{
    id!: Number;
    value!: Number;
    statName!: StatName;
    isMain!: boolean;
    associationId!: Number;

    constructor(value: Number, statName: StatName, isMain: boolean = false, associationId: Number = 0) {
        this.value = value;
        this.statName = statName;
        this.isMain = isMain;
        this.associationId = associationId;
    }
}