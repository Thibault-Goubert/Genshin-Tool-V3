import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filter } from 'rxjs';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent {
  @Input() dropdownInputPlaceholder!: string;
  protected dropdownInputValue: string = "";
  @Input() dropdownChoiceList: SelectPickerValue[] = [];
  protected dropdownChoiceListDisplayed!: SelectPickerValue[];
  protected isListDisplayed: boolean = false;
  @Output() onSelected = new EventEmitter<SelectPickerValue>();
  @Input() canUnselect: boolean = false;

  onInput(value: string): void {
    console.log(value);
    this.dropdownInputValue = value;
    this.dropdownChoiceListDisplayed = this.dropdownChoiceList.filter(c => c.displayValue.toLowerCase().includes(value.toLowerCase()));
    this.isListDisplayed = (value || value.trim() !== "") ? true : false;
    if(this.canUnselect && value.trim() == ""){
      console.log("reset");
      this.onSelected.emit(undefined);
    }
  }

  onSelect(choice: SelectPickerValue): void {
    this.isListDisplayed = false;
    this.dropdownInputValue = choice.displayValue;
    this.onSelected.emit(choice);
  }

  resetInputValue(): void{
    this.dropdownInputValue = "";
  }
}
