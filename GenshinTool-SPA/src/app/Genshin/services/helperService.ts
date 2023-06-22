import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments';
import { OpenLinkRequest } from "../models/openLinkRequest.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class HelperService{
    private baseUrl: string = environment.baseUrl + 'Helper/';
    
    constructor(private http: HttpClient) {}

    public openLink(link:string, browser:string): void{ 
      this.http.post(this.baseUrl + "OpenLink", new OpenLinkRequest(link, browser)).subscribe();
    }
}