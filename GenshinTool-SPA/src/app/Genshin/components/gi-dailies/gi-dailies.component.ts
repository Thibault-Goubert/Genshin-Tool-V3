import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gi-dailies',
  templateUrl: './gi-dailies.component.html',
  styleUrls: ['./gi-dailies.component.css']
})
export class GiDailiesComponent implements OnInit{
  @ViewChild('btnDailies', {static: true}) btnDailies!: ElementRef<HTMLDivElement>;
  @ViewChild('dailiesPopup', {static: true}) dailiesPopup!: ElementRef<HTMLDivElement>;  
  @ViewChild('dailiesPopup2', {static: true}) dailiesPopup2!: ElementRef<HTMLDivElement>;  

  @ViewChild('giCommissions', {static: true}) giCommissions!: ElementRef<HTMLDivElement>;  
  @ViewChild('giTeapot', {static: true}) giTeapot!: ElementRef<HTMLDivElement>;  
  @ViewChild('giResine', {static: true}) giResine!: ElementRef<HTMLDivElement>;  

  @ViewChild('giFragileResine', {static: true}) giFragileResine!: ElementRef<HTMLDivElement>;
  @ViewChild('giReputation', {static: true}) giReputation!: ElementRef<HTMLDivElement>;
  @ViewChild('giBoss', {static: true}) giBoss!: ElementRef<HTMLDivElement>;
  @ViewChild('giAbyss', {static: true}) giAbyss!: ElementRef<HTMLDivElement>;

  dailyDoneClass = "dailyDone";
  collapsedClass = "collapsed";

  dailyTimerId = "gi_dailiesDate";
  dailiesButtons!: HTMLDivElement[];

  hebdoTimerId = "gi_hebdosDate";
  hebdosButtons!: HTMLDivElement[];

  dailiesImg = "";
  dailiesTodoImgPath = "gi_daily";
  dailiesCheckImgPath = "gi_daily_check";

  ngOnInit(): void {
    this.dailiesButtons = [
      this.giCommissions.nativeElement,
      this.giTeapot.nativeElement,
      this.giResine.nativeElement
    ]
    this.hebdosButtons = [
      this.giFragileResine.nativeElement,
      this.giReputation.nativeElement,
      this.giBoss.nativeElement,
      this.giAbyss.nativeElement
    ]
    this.resetClassesValues();
    this.setCurrentDateAndStartDailiesResetTimer();
    this.setCurrentDateAndStartHedbosResetTimer();
    this.setDailyImg();
  }

  setDailyImg() {
    this.dailiesImg = this.dailiesTodoImgPath;
    if(this.areAllDailiesDone() && this.areAllHebdosDone()){
      this.dailiesImg = this.dailiesCheckImgPath;
    }
  }

  areAllDone(array:HTMLDivElement[]): boolean {
    var result = true;
    array.forEach(element => {
      var value = localStorage.getItem(element.id);
      if(value == null){
        result = false;
        return;
      }
    });
    return result;
  }

  resetClassesValues() {
    this.dailiesButtons.forEach(element => {
      if(localStorage.getItem(element.id)){
        element.classList.add(this.dailyDoneClass)
      }
    });
    this.hebdosButtons.forEach(element => {
      if(localStorage.getItem(element.id)){
        element.classList.add(this.dailyDoneClass)
      }
    });
  }

  onDailiesClick(){
    var dailiesClasses = this.dailiesPopup.nativeElement.classList;
    var dailiesClasses2 = this.dailiesPopup2.nativeElement.classList;

    if(dailiesClasses.contains(this.collapsedClass)){
      dailiesClasses.remove(this.collapsedClass);
      dailiesClasses2.remove(this.collapsedClass);
    }
    else{
      dailiesClasses.add(this.collapsedClass);
      dailiesClasses2.add(this.collapsedClass);
    }
  }

  onDailyClick($event: HTMLDivElement){
    $event.classList.add(this.dailyDoneClass);
    localStorage.setItem($event.id, this.dailyDoneClass);
    this.setDailyImg();
  }

  //#region Dailies
  setCurrentDateAndStartDailiesResetTimer() {
    if(localStorage.getItem(this.dailyTimerId) == null){
      let value = this.setDailiesResetDate(new Date()).toString();
      localStorage.setItem(this.dailyTimerId, value);
    }

    setInterval(() => {
      let resetTimerValue = localStorage.getItem(this.dailyTimerId);
      if(resetTimerValue){
        let resetTimer = new Date(resetTimerValue);
        if(new Date().getTime() >= resetTimer.getTime()){
          this.resetDailies();
          let nextResetTimer = this.setDailiesResetDate(resetTimer).toString();
          localStorage.setItem(this.dailyTimerId, nextResetTimer);
        }
      }
    }, 1000);
  }
  setDailiesResetDate(lastTimerDate: Date): Date{
    let resetTimerDate = new Date();

    resetTimerDate.setHours(lastTimerDate.getHours() - 4);
    resetTimerDate.setHours(4,0,0);
    resetTimerDate.setDate(resetTimerDate.getDate() + 1);
    
    return resetTimerDate;
  }
  resetDailies() {
    this.dailiesButtons.forEach(element =>  {
      localStorage.removeItem(element.id)
      element.classList.remove(this.dailyDoneClass);
    });
    this.dailiesImg = this.dailiesTodoImgPath;
  }
  areAllDailiesDone(): boolean {
    return this.areAllDone(this.dailiesButtons);
  }
  //#endregion

  //#region Hebdos
  setCurrentDateAndStartHedbosResetTimer() {
    if(localStorage.getItem(this.hebdoTimerId) == null){
      let value = this.setHebdosResetDate(new Date()).toString();
      localStorage.setItem(this.hebdoTimerId, value);
    }

    setInterval(() => {
      let resetTimerValue = localStorage.getItem(this.hebdoTimerId);
      if(resetTimerValue){
        let resetTimer = new Date(resetTimerValue);
        if(new Date().getTime() >= resetTimer.getTime()){
          this.resetHebdos();
          let nextResetTimer = this.setHebdosResetDate(resetTimer).toString();
          localStorage.setItem(this.hebdoTimerId, nextResetTimer);
        }
      }
    }, 1000);
  }
  setHebdosResetDate(lastTimerDate: Date): Date{
    let dayValue = lastTimerDate.getDay();
    let resetTimerDate = new Date();

    resetTimerDate.setDate(lastTimerDate.getDate() + (7 - (dayValue-1)));  
    resetTimerDate.setHours(4,0,0);   

    return resetTimerDate;
  }
  resetHebdos() {
    this.hebdosButtons.forEach(element =>  {
      localStorage.removeItem(element.id)
      element.classList.remove(this.dailyDoneClass);
    });
    this.dailiesImg = this.dailiesTodoImgPath;
  }
  areAllHebdosDone(): boolean {
    return this.areAllDone(this.hebdosButtons);
  }
  //#endregion

  onResetDailiesAndHebdosRightClick(){
    this.dailiesButtons.forEach(element =>  {
      localStorage.removeItem(element.id)
      element.classList.remove(this.dailyDoneClass);
    });
    this.hebdosButtons.forEach(element =>  {
      localStorage.removeItem(element.id)
      element.classList.remove(this.dailyDoneClass);
    });
    this.dailiesImg = this.dailiesTodoImgPath;

    return false;
  }

}
