import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/routes';

@Component({
  selector: 'app-honkai-star-rail-header',
  templateUrl: './honkai-star-rail-header.component.html',
  styleUrls: ['./honkai-star-rail-header.component.css']
})
export class HonkaiStarRailHeaderComponent implements OnInit{
  @ViewChild('btnRessources', {static: true}) btnRessources!: ElementRef<HTMLElement>;
  @ViewChild('btnCharacters', {static: true}) btnCharacters!: ElementRef<HTMLElement>;
  @ViewChild('btnRelics', {static: true}) btnRelics!: ElementRef<HTMLElement>;
  @ViewChild('btnNotes', {static: true}) btnNotes!: ElementRef<HTMLElement>;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if(this.router.url != routes.hsrNotes){
      this.findAndOpenLastOpenedMainTab();
    }
  }

  findAndOpenLastOpenedMainTab() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      
      switch (key) {
        case "hsr_ressourcesPage_mainTab":
          this.btnRessources.nativeElement.click();
          break;
        case "hsr_charactersPage_mainTab":
          this.btnCharacters.nativeElement.click();
          break;
        case "hsr_relicsPage_mainTab":
          this.btnRelics.nativeElement.click();
          break;
        case "hsr_notesPage_mainTab":
          this.btnNotes.nativeElement.click();
          break;
      
        default:
          continue;
      }
    }
  }

  onChangeAppClick(){
    this.router.navigateByUrl(routes.genshinNotes);
  }
}
