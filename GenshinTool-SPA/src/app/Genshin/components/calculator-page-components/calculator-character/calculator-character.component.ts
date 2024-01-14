import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';
import { CharacterCalculatorResult } from 'src/app/Genshin/models/characterCalculatorResult.model';
import { CalculatorService } from 'src/app/Genshin/services/calculator/calculator.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-calculator-character',
  templateUrl: './calculator-character.component.html',
  styleUrls: ['./calculator-character.component.css']
})
export class CalculatorCharacterComponent implements OnInit{
  lvlChoicesValues!: SelectPickerValue[];
  talentChoicesValues!: SelectPickerValue[];
  @ViewChild('characterResult', {static: true}) characterResult!: ElementRef<HTMLDivElement>;

  selectedCurrentLvl: string = "";
  currentTalentValues: string = "";
  selectedTargetTalents: string = "";

  result: CharacterCalculatorResult = new CharacterCalculatorResult();

  constructor(private calculatorService: CalculatorService, private clipboard: Clipboard){}

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

    this.talentChoicesValues = [
      {value: '666',  displayValue:'666'},
      {value: '999', displayValue: '999'},
      {value: 'x99', displayValue: 'x99'},
      {value: 'xx9', displayValue: 'xx9'},
      {value: 'xxx', displayValue: 'xxx'}
    ]
  }

  onInputChange(input: HTMLInputElement) {
    this.currentTalentValues = input.value;
  }

  onComputeCharacterRessourcesClick(): void{
    this.characterResult.nativeElement.classList.remove("collapsed");
    this.result = this.calculatorService.ComputeCharacterRessources(Number.parseInt(this.selectedCurrentLvl, 10), this.currentTalentValues, this.selectedTargetTalents);
    this.clipboard.copy(
    `XP Books: ${this.result.xpBook}
Moras: ${this.result.mora}
Gems ❔: ${this.result.gemVe}ve ${this.result.gemB}b ${this.result.gemVi}vi ${this.result.gemG}g
Elem ❔: ${this.result.elem}
(Local❔): ${this.result.local}
Boss ❔: ${this.result.boss}
Crown: ${this.result.crown}
(Common❔): ${this.result.commonGr}gr ${this.result.commonVe}ve ${this.result.commonB}b
Talents ❔: ${this.result.talentVe}ve ${this.result.talentB}b ${this.result.talentVi}vi`);
  }

  currentLvlSelected(currentLvl: string){
    this.selectedCurrentLvl = currentLvl;
  }

  targetTalentsSelected(targetTalents: string){
    this.selectedTargetTalents = targetTalents;
  }
}
