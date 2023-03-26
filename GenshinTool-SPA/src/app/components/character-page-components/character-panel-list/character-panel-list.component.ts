import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-character-panel-list',
  templateUrl: './character-panel-list.component.html',
  styleUrls: ['./character-panel-list.component.css']
})
export class CharacterPanelListComponent implements OnInit{
  @Input() initialTemplate!: TemplateRef<any>;
  @Input() byGroupTemplate!: TemplateRef<any>;
  currentTemplate!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    this.currentTemplate = this.initialTemplate;
  }
  
  public triggerTemplateChange(templateId: number){ 
    switch(templateId){
      case(1): 
        this.currentTemplate = this.initialTemplate;
        break;
      case(2):
        this.currentTemplate = this.byGroupTemplate;
        break;
      default:
        this.currentTemplate = this.initialTemplate;
        break;
    }
  }
}
