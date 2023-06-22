import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RessourceService {

  canRessourceGoalChange: Subject<boolean> = new Subject<boolean>();
  currentCanRessourceGoalChange: boolean = false;

  setToggleRessourceGoalState(state: boolean): void {
    this.canRessourceGoalChange.next(state);
    this.currentCanRessourceGoalChange = state;
  }

}