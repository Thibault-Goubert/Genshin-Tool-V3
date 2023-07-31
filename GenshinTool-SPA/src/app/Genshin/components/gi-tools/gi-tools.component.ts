import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from 'src/routes';
import { genshin, starRail } from 'src/urls';
import { HelperService } from '../../services/helperService';

@Component({
  selector: 'app-gi-tools',
  templateUrl: './gi-tools.component.html',
  styleUrls: ['./gi-tools.component.css']
})
export class GiToolsComponent{
  @ViewChild('dailyCheckIn', {static: true}) dailyCheckIn!: ElementRef<HTMLElement>;

  dailyCheckInImg = "";
  dailyCheckInImgTodo = "gi_check-in";
  dailyCheckInImgDone = "gi_check-in_check";

  constructor(private router: Router, private helperService: HelperService) {
    
  }

  ngOnInit(): void {
    this.dailyCheckInImg = this.dailyCheckInImgTodo;
  }

  onChangeAppClick(){
    this.router.navigateByUrl(routes.hsrNotes);
  }
  onDailyCoClick(){
    this.helperService.openLinkOnFirefoxAndChrome(genshin.dailyCo);
    this.helperService.openLinkOnFirefoxAndChrome(starRail.dailyCo);
  }
  onGiftCodePageClick(){
    this.helperService.openLinkOnFirefoxAndChrome(genshin.giftCode);
  }
  onAchievementsClick(){
    this.helperService.openLinkOnChrome(genshin.achievements);
  }
  onMapClick(){
    this.helperService.openLinkOnChrome(genshin.map);
  }
}
