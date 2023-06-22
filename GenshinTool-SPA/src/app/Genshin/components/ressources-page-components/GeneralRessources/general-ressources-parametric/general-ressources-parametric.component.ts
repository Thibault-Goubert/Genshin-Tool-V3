import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-ressources-parametric',
  templateUrl: './general-ressources-parametric.component.html',
  styleUrls: ['./general-ressources-parametric.component.css']
})
export class GeneralRessourcesParametricComponent implements OnInit{
  private timeRemaining = 0;

  displayDaysRemaining = "";
  displayHoursAndMinutesRemaining = "";
  showTimeRemaining!: boolean;

  private parametriqueTargetDateStorageKey = "parametrique_targetDate";
  private parametriqueHideStorageKey = "panel_parametric_transformer_hide";

  isHided: boolean = false;

  ngOnInit(): void {    
    this.setVisibility();
    this.setParametriqueValues();
  }

  setParametriqueValues() {
    let value = localStorage.getItem(this.parametriqueTargetDateStorageKey);

    if(value){
      let targetDate = Number.parseInt(value);
      let currentDate = Date.parse(new Date().toString());
      this.timeRemaining = Math.round((targetDate-currentDate)/1000);

      if(this.timeRemaining <= 0){
        localStorage.removeItem(this.parametriqueHideStorageKey)
        localStorage.removeItem(this.parametriqueTargetDateStorageKey)
      }
      this.updateDisplay();
    }    
    this.showTimeRemaining = this.timeRemaining > 0;
  } 

  onClick(): void{
    if(this.timeRemaining <= 0){
      this.timeRemaining = 3600*24*7;
      this.showTimeRemaining = this.timeRemaining > 0;

      let now = new Date();
      let resetDate = now.setDate(now.getDate() + 7);

      localStorage.setItem(this.parametriqueTargetDateStorageKey, resetDate.toString());
      localStorage.setItem(this.parametriqueHideStorageKey, "hide");
         
      this.updateDisplay();
    }
  }

  updateDisplay(): void{
    this.convertTimeRemainingToReadableString(this.timeRemaining);
    this.setTick();
    this.setVisibility(); 
  }

  setTick(): void{
    setInterval(() => {
      console.log(1)
      if(this.timeRemaining > 0){
        this.timeRemaining -= 60;
        this.convertTimeRemainingToReadableString(this.timeRemaining);
      }
      else{
        localStorage.removeItem(this.parametriqueTargetDateStorageKey);
        localStorage.removeItem(this.parametriqueHideStorageKey);

        this.showTimeRemaining = this.timeRemaining > 0;
        this.isHided = false;
      }  
    }, 60000);
  }  

  convertTimeRemainingToReadableString(seconds: number) {
    seconds = seconds || 0;
    seconds = Number(seconds);
    seconds = Math.abs(seconds);
  
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const parts = [];
  
    if (d >= 0) {
      this.displayDaysRemaining = d + 'd';
    } 
    if (h >= 0) {
      parts.push(h + 'h');
    }  
    if (m >= 0) {
      parts.push(m + 'm');
    }  

    this.displayHoursAndMinutesRemaining = parts.join(' ');
  }
  
  setVisibility(): void {
    if(localStorage.getItem(this.parametriqueHideStorageKey) == "hide"){
      this.isHided = true;
    }
    else{
      this.isHided = false;
    }
  }
}
