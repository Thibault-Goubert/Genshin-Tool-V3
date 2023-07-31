import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/Genshin/services/helperService';
import { routes } from 'src/routes';
import { starRail, genshin } from 'src/urls';

@Component({
  selector: 'app-hsr-tools',
  templateUrl: './hsr-tools.component.html',
  styleUrls: ['./hsr-tools.component.css']
})
export class HsrToolsComponent implements OnInit{
  @ViewChild('dailyCheckIn', {static: true}) dailyCheckIn!: ElementRef<HTMLElement>;

  dailyCheckInImg = "";
  dailyCheckInImgTodo = "hsr_check-in";
  dailyCheckInImgDone = "hsr_check-in_check";

  constructor(private router: Router, private helperService: HelperService) {
    
  }

  ngOnInit(): void {
    this.dailyCheckInImg = this.dailyCheckInImgTodo;
  }

  onChangeAppClick(){
    this.router.navigateByUrl(routes.genshinNotes);
  }
  onDailyCoClick(){
    this.helperService.openLinkOnFirefoxAndChrome(starRail.dailyCo);
    this.helperService.openLinkOnFirefoxAndChrome(genshin.dailyCo);
  }
  onGiftCodeClick(){
    this.helperService.openLinkOnFirefoxAndChrome(starRail.giftCode);
  }
  onAchievementsClick(){
    this.helperService.openLinkOnChrome(starRail.achievements);
  }
  onMapClick(){
    this.helperService.openLinkOnChrome(starRail.map);
  }
}
