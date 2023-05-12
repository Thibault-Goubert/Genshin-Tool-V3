import { Injectable } from '@angular/core';
import { CharacterCalculatorResult } from '../../models/characterCalculatorResult.model';
import { CalculatorCharacterService } from './calculator.character';
import { CalculatorWeaponService } from './calculator.weapon';
import { WeaponCalculatorResult } from 'src/app/models/weaponCalculatorResult.model';

@Injectable({
    providedIn: 'root'
  })
export class CalculatorService{

    constructor(
        private calculatorCharacterService: CalculatorCharacterService, 
        private calculatorWeaponService: CalculatorWeaponService) { }

    ComputeCharacterRessources(currentCharacterLevel: number, currentTalentsLevel: string, targetTalentsLevel: string): CharacterCalculatorResult {
        return this.calculatorCharacterService.Compute(currentCharacterLevel, currentTalentsLevel, targetTalentsLevel);
    }

    ComputeWeaponRessources(currentWeaponLevel: number, weaponRarity: number): WeaponCalculatorResult{
        return this.calculatorWeaponService.Compute(currentWeaponLevel, weaponRarity);
    }
}