import { Component, OnInit, ViewChild } from '@angular/core';
import { GenshinImpactHeaderComponent } from '../../genshin-impact-header/genshin-impact-header.component';

@Component({
  selector: 'app-genshin-impact-page',
  templateUrl: './genshin-impact-page.component.html',
  styleUrls: ['./genshin-impact-page.component.css']
})
export class GenshinImpactPageComponent implements OnInit{
  @ViewChild(GenshinImpactHeaderComponent, {static : true}) headerComponent! : GenshinImpactHeaderComponent;

  ngOnInit(): void {
    this.headerComponent.refresh();
  }
}
