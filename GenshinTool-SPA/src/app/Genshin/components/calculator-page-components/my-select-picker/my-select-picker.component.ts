import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SelectPickerValue } from 'src/app/Genshin/models/selectPickerValue.model';

@Component({
  selector: 'app-my-select-picker',
  templateUrl: './my-select-picker.component.html',
  styleUrls: ['./my-select-picker.component.css']
})
export class MySelectPickerComponent implements OnInit{
  @Input() selectPickerValues!: SelectPickerValue[];
  @Input() selectPickerImages!: string[];
  @Output() selectedValueEvent = new EventEmitter<string>();
  @ViewChild('choices', {static: true}) choices!: ElementRef<HTMLDivElement>;

  private collapsed: string = "collapsed";
  selectedValue: string = "";
  selectedImage: string = "";
  isChoicesImages: boolean = false;

  ngOnInit(): void {
    if(this.selectPickerValues?.length > 0){
      this.selectedValue = this.selectPickerValues.at(0)?.displayValue ?? "";
      this.selectedValueEvent.emit(this.selectedValue);
      this.choices.nativeElement.classList.add("custom_select_options");
    }
    else if(this.selectPickerImages?.length > 0){
      this.selectedImage = this.selectPickerImages.at(0) ?? "";
      this.selectedValueEvent.emit(this.selectedImage);
      this.isChoicesImages = true;
      this.choices.nativeElement.classList.add("flex");
      this.choices.nativeElement.classList.add("col");
      this.choices.nativeElement.classList.add("custom-select-choices");
    }
  }

  private openOrCloseChoices(): void {
    let isClose = this.choices.nativeElement.classList.contains(this.collapsed);
    if(isClose){
      this.choices.nativeElement.classList.remove(this.collapsed)
    }
    else{
      this.choices.nativeElement.classList.add(this.collapsed)
    }
  }

  onSelectedChoiceClick(): void {    
    this.openOrCloseChoices();
  }
  onChoiceClick(selectedValue: SelectPickerValue): void {    
    this.selectedValue = selectedValue.displayValue;
    this.openOrCloseChoices();
    this.selectedValueEvent.emit(this.selectedValue);
  }  
  onChoiceImageClick(selectedImage: string): void {    
    this.selectedImage = selectedImage;
    this.openOrCloseChoices();
    this.selectedValueEvent.emit(this.selectedImage);
  }
}
