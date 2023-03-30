import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RessourceService {

  canRessourceGoalChange: Subject<boolean> = new Subject<boolean>();

  setToggleRessourceGoalState(state: boolean): void {
    this.canRessourceGoalChange.next(state);
  }

}