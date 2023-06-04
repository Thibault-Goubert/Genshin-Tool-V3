import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit{
  private tabOpenedSaveKey = "notesPage_mainTab";

  ngOnInit(): void {
    this.removeOtherTabSavedKeyFromStorage();
    localStorage.setItem(this.tabOpenedSaveKey, "open");
    this.setSavedValues();
  }
  setSavedValues() {
    let textareas = document.getElementsByName("textarea")
    textareas.forEach(element => {
      let value = localStorage.getItem(element.id)
      if(value){
        (element as HTMLTextAreaElement).value = value;
      }
    });
  }
  
  removeOtherTabSavedKeyFromStorage() {
    for(let index=0;index<localStorage.length;index++){
      let key = localStorage.key(index) ?? "";
      if(key.includes("mainTab")){
        localStorage.removeItem(key);
        break;
      }
    }
  }

  onChange(event: Event){
    let element = event.target as HTMLTextAreaElement;
    localStorage.setItem(element.id, element.value)
  }
}
