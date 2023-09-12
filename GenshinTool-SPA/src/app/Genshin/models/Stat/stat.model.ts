import { StatName } from "./statName.model";

export class Stat{
    id!: number;
    value!: number;
    statName!: StatName;
    isMain!: boolean;

    constructor(value: number, statName: StatName, isMain: boolean) {
        this.value = value;
        this.statName = statName;
        this.isMain = isMain;
    }
}