import { Component, ElementRef, ViewChild } from '@angular/core';
import { genshin, starRail } from 'src/urls';
import { HelperService } from '../services/helperService';
import { routes } from 'src/routes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genshin-impact-header',
  templateUrl: './genshin-impact-header.component.html',
  styleUrls: ['./genshin-impact-header.component.css']
})
export class GenshinImpactHeaderComponent {
  @ViewChild('btnRessources', {static: true}) btnRessources!: ElementRef<HTMLElement>;
  @ViewChild('btnCharacters', {static: true}) btnCharacters!: ElementRef<HTMLElement>;
  @ViewChild('btnArtefacts', {static: true}) btnArtefacts!: ElementRef<HTMLElement>;
  @ViewChild('btnNotes', {static: true}) btnNotes!: ElementRef<HTMLElement>;

  @ViewChild('btnDailies', {static: true}) btnDailies!: ElementRef<HTMLElement>;
  @ViewChild('btnDailyCo', {static: true}) btnDailyCo!: ElementRef<HTMLElement>;

  protected GenshinImpactMainPagePath: string = routes.genshin;

  ngOnInit(): void {
    this.refresh();
  }

  constructor(private helperService: HelperService, private router: Router, private activatedRoute: ActivatedRoute) {    
  }
  
  refresh() {
    this.findAndOpenLastOpenedMainTab();
    this.checkDailiesResetDate();
    this.restoreDailies();
  } 

  findAndOpenLastOpenedMainTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      switch (key) {
        case "ressourcesPage_mainTab":
          this.btnRessources.nativeElement.click();
          break;
        case "charactersPage_mainTab":
          this.btnCharacters.nativeElement.click();
          break;
        case "artefactsPage_mainTab":
          this.btnArtefacts.nativeElement.click();
          break;
        case "notesPage_mainTab":
          this.btnNotes.nativeElement.click();
          break;
      
        default:
          continue;
      }
    }
  }

  onDailiesClick(){
    let nativeElement = this.btnDailies.nativeElement;

    nativeElement.classList.add("clicked");    
    localStorage.setItem(nativeElement.id, "clicked")

    this.setResetToMidnight(nativeElement.id+'_reset');
  }
  onDailyCoClick(){
    let nativeElement = this.btnDailyCo.nativeElement;

    this.openLinkOnFirefoxAndChrome(genshin.dailyCo);
    this.openLinkOnFirefoxAndChrome(starRail.dailyCo);

    nativeElement.classList.add("clicked");
    localStorage.setItem(nativeElement.id, "clicked")

    this.setResetToMidnight(nativeElement.id+'_reset');
  }
  onGiftCodePageClick(){
    this.openLinkOnFirefoxAndChrome(genshin.giftCode);
    this.openLinkOnFirefoxAndChrome(starRail.giftCode);
  }
  onChangeAppClick(){
    this.router.navigateByUrl(routes.honkaisr);
  }

  openLinkOnFirefoxAndChrome(link: string){    
    this.helperService.openLink(link, 'chrome');
    this.helperService.openLink(link, 'firefox');
  }

  checkDailiesResetDate() {
    this.findKeyAndRemoveIfResetDateOutdated(this.btnDailies.nativeElement);
    this.findKeyAndRemoveIfResetDateOutdated(this.btnDailyCo.nativeElement);
  }
  restoreDailies() {
    this.findKeyAndApplyClass(this.btnDailies.nativeElement)
    this.findKeyAndApplyClass(this.btnDailyCo.nativeElement)
  }
  findKeyAndApplyClass(element: HTMLElement) {
    let value = this.findLocalStorageKey(element.id)
    if(value){
      element.classList.add(value)
    }
  }
  findKeyAndRemoveIfResetDateOutdated(element: HTMLElement){
    let resetDate = this.findLocalStorageKey(element.id+'_reset')
    if(resetDate){
      let currentDate = new Date();
      if(currentDate > new Date(resetDate)){
        localStorage.removeItem(element.id)
        localStorage.removeItem(element.id+'_reset')
      }
    }
  }
  findLocalStorageKey(key: string){
    return localStorage.getItem(key)
  }

  setResetToMidnight(key: string){
    let now = new Date().setHours(23, 59, 59, 999);
    localStorage.setItem(key, now.toString())
  }

  resetOnRightClick(event: Event){    
    let element = (event.target as Element);
    let key = element.id;
    localStorage.removeItem(key);    
    localStorage.removeItem(key+'_reset');
    element.classList.remove("clicked")
    return false;
  }
}
