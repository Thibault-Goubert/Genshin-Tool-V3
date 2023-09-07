import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments";
import { ResponseItems } from "../models/responseItems.model";
import { StatName } from "../models/Stat/statName.model";

@Injectable({
    providedIn: 'root'
  })
export class StatService{
    private baseUrl: string = environment.baseUrl + 'Stat/';
    
    constructor(private http: HttpClient) {}

    public getAllName(): Observable<ResponseItems<StatName>> {
        return this.http.get<ResponseItems<StatName>>(this.baseUrl + 'getAllNames');
    }
}