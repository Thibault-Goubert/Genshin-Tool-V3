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

    private openLink(link:string, browser:string): void{ 
      this.http.post(this.baseUrl + "OpenLink", new OpenLinkRequest(link, browser)).subscribe();
    }

    public openLinkOnFirefox(link:string){
      this.openLink(link, "firefox");
    }
    
    public openLinkOnChrome(link:string){
      this.openLink(link, "chrome");
    }

    public openLinkOnFirefoxAndChrome(link:string){
      this.openLinkOnFirefox(link);
      this.openLinkOnChrome(link);
    }
}