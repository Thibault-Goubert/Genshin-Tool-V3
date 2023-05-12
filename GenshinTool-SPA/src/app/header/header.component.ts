import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelperService } from '../services/helperService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild('btnRessources', {static: true}) btnRessources!: ElementRef<HTMLElement>;
  @ViewChild('btnCharacters', {static: true}) btnCharacters!: ElementRef<HTMLElement>;
  @ViewChild('btnArtefacts', {static: true}) btnArtefacts!: ElementRef<HTMLElement>;
  @ViewChild('btnNotes', {static: true}) btnNotes!: ElementRef<HTMLElement>;
  
  @ViewChild('btnDailies', {static: true}) btnDailies!: ElementRef<HTMLElement>;
  @ViewChild('btnDailyCo', {static: true}) btnDailyCo!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.findAndOpenLastOpenedMainTab();
  }

  constructor(private helperService: HelperService) {    
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
    this.btnDailies.nativeElement.classList.add("clicked");
  }
  onDailyCoClick(){
    let urlGenshin = 'https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=share&utm_medium=link&utm_campaign=web' 
    let urlStarRail = 'https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311&bbs_auth_required=true&bbs_presentation_style=fullscreen&lang=fr-fr&utm_source=share&utm_medium=link&utm_campaign=web'
    
    this.openLinkOnFirefoxAndChrome(urlGenshin);
    this.openLinkOnFirefoxAndChrome(urlStarRail);

    this.btnDailyCo.nativeElement.classList.add("clicked");
  }
  onGiftCodePageClick(){
    let urlGenshin = 'https://genshin.mihoyo.com/en/gift' 
    let urlStarRail = 'https://hsr.hoyoverse.com/gift?code'

    this.openLinkOnFirefoxAndChrome(urlGenshin);
    this.openLinkOnFirefoxAndChrome(urlStarRail);
  }
  onCopyMdpClick(){
    
  }
  onChangeAppClick(){
    
  }

  openLinkOnFirefoxAndChrome(link: string){    
    let c = this.helperService.openLink(link, 'chrome');
    let f = this.helperService.openLink(link, 'firefox');
  }
}