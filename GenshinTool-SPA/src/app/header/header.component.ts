import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  ngOnInit(): void {
    this.findAndOpenLastOpenedMainTab();
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
}
