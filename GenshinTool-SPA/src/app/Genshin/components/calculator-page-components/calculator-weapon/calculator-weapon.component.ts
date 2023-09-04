import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';
import { WeaponCalculatorResult } from 'src/app/Genshin/models/weaponCalculatorResult.model';
import { CalculatorService } from 'src/app/Genshin/services/calculator/calculator.service';

@Component({
  selector: 'app-calculator-weapon',
  templateUrl: './calculator-weapon.component.html',
  styleUrls: ['./calculator-weapon.component.css']
})
export class CalculatorWeaponComponent implements OnInit{
  lvlChoicesValues!: SelectPickerValue[];
  rarityChoices!: string[];
  @ViewChild('weaponResult', {static: true}) weaponResult!: ElementRef<HTMLDivElement>;

  selectedCurrentLvl: string = "";
  selectedCurrentRarity: number = 0;

  result: WeaponCalculatorResult = new WeaponCalculatorResult();
  
  constructor(private calculatorService: CalculatorService){}

  ngOnInit(): void {
    this.lvlChoicesValues = [
      {value: '1',  displayValue: '1'},
      {value: '20', displayValue: '20'},
      {value: '40', displayValue: '40'},
      {value: '50', displayValue: '50'},
      {value: '60', displayValue: '60'},
      {value: '70', displayValue: '70'},
      {value: '80', displayValue: '80'},
      {value: '90', displayValue: '90'}
    ]
    this.rarityChoices = [
      "assets/icons/filters/filter_rarity5.png",
      "assets/icons/filters/filter_rarity4.png",
      "assets/icons/filters/filter_rarity3.png"
    ]    
  }

  currentLvlSelected(currentLvl: string) {
    this.selectedCurrentLvl = currentLvl;
  }

  currentRaritySelected(currentRarity: string){
    this.selectedCurrentRarity = Number.parseInt(currentRarity.substring(currentRarity.length - 5, currentRarity.length - 4), 10);
  }

  onComputeWeaponRessourcesClick(){
    this.weaponResult.nativeElement.classList.remove("collapsed");
    this.result = this.calculatorService.ComputeWeaponRessources(Number.parseInt(this.selectedCurrentLvl, 10), this.selectedCurrentRarity)
  }

}
