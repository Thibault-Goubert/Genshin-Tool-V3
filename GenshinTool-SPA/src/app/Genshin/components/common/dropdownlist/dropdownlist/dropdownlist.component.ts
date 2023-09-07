import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent {
  @Input() dropdownInputPlaceholder!: string;
  public dropdownInputValue: string = "";
  @Input() dropdownChoiceList: SelectPickerValue[] = [];
  public dropdownChoiceListDisplayed!: SelectPickerValue[];
  public isListDisplayed: boolean = false;
  @Output() onSelected = new EventEmitter<SelectPickerValue>();

  onInput(value: string): void {
    this.dropdownInputValue = value;
    this.dropdownChoiceListDisplayed = this.dropdownChoiceList.filter(s => s.displayValue.toLowerCase().includes(value.toLowerCase()));
    this.isListDisplayed = (value || value.trim() !== "") ? true : false;
  }

  onSelect(choice: SelectPickerValue): void {
    this.isListDisplayed = false;
    this.dropdownInputValue = choice.displayValue;
    this.onSelected.emit(choice);
  }
}
