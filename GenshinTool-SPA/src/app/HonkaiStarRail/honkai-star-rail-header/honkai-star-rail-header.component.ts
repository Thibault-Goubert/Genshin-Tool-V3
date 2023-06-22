import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/routes';

@Component({
  selector: 'app-honkai-star-rail-header',
  templateUrl: './honkai-star-rail-header.component.html',
  styleUrls: ['./honkai-star-rail-header.component.css']
})
export class HonkaiStarRailHeaderComponent {

  constructor(private router: Router) {

  }

  onChangeAppClick(){
    this.router.navigateByUrl(routes.genshin);
  }
}
