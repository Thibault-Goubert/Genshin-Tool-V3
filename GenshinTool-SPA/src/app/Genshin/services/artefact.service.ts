import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments";
import { ResponseItems } from "../models/responseItems.model";
import { ArtefactSet } from "../models/Artefact/ArtefactSet.model";

@Injectable({
    providedIn: 'root'
  })
  export class ArtefactService{
    private baseUrl: string = environment.baseUrl + 'Artefact/';

    constructor(private http: HttpClient) {}
    
    public getAllSet(): Observable<ResponseItems<ArtefactSet>>{
        return this.http.get<ResponseItems<ArtefactSet>>(this.baseUrl + 'GetAllArtefactSet'); 
    }
  }