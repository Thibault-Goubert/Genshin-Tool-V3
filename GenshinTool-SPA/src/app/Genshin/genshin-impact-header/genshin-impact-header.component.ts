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

  // @ViewChild('btnDailies', {static: true}) btnDailies!: ElementRef<HTMLElement>;
  // @ViewChild('btnDailyCo', {static: true}) btnDailyCo!: ElementRef<HTMLElement>;

  protected GenshinImpactMainPagePath: string = routes.genshin;

  ngOnInit(): void {
    if(this.router.url != routes.genshinNotes){
      this.findAndOpenLastOpenedMainTab();
    }
  }

  constructor(private helperService: HelperService, private router: Router, private activatedRoute: ActivatedRoute) {    
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

  // findKeyAndApplyClass(element: HTMLElement) {
  //   let value = this.findLocalStorageKey(element.id)
  //   if(value){
  //     element.classList.add(value)
  //   }
  // }

  // findKeyAndRemoveIfResetDateOutdated(element: HTMLElement){
  //   let resetDate = this.findLocalStorageKey(element.id+'_reset')
  //   if(resetDate){
  //     let currentDate = new Date();
  //     if(currentDate > new Date(resetDate)){
  //       localStorage.removeItem(element.id)
  //       localStorage.removeItem(element.id+'_reset')
  //     }
  //   }
  // }

  // findLocalStorageKey(key: string){
  //   return localStorage.getItem(key)
  // }

  // setResetToMidnight(key: string){
  //   let now = new Date().setHours(23, 59, 59, 999);
  //   localStorage.setItem(key, now.toString())
  // }
}
