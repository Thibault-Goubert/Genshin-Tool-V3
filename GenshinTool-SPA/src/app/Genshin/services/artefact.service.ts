import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments";
import { ResponseItem, ResponseItems } from "../models/responseItems.model";
import { ArtefactPiece } from "../models/Artefact/artefactPiece.model";
import { Artefact } from "../models/Artefact/artefact.model";
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

    public getAllPiece(): Observable<ResponseItems<ArtefactPiece>>{
        return this.http.get<ResponseItems<ArtefactSet>>(this.baseUrl + 'GetAllArtefactPiece'); 
    }

    public insertArtefact(artefact: Artefact): Observable<ResponseItem<Artefact>>{
      return this.http.post<ResponseItem<Artefact>>(this.baseUrl + 'InsertArtefact', artefact);
    } 

    public getAll(): Observable<ResponseItems<Artefact>>{
      return this.http.get<ResponseItems<Artefact>>(this.baseUrl + 'GetAll'); 
    }

    public GetAllByCharacter(id: Number): Observable<ResponseItems<Artefact>>{
      return this.http.get<ResponseItems<Artefact>>(this.baseUrl + 'GetAllByCharacter/' + id); 
    }

    public GetAllByPiece(id: Number): Observable<ResponseItems<Artefact>>{
      return this.http.get<ResponseItems<Artefact>>(this.baseUrl + 'GetAllByPiece/' + id); 
    }

    public AssociateArtefactToCharacter(artefact: Artefact, characterId: number){
      return this.http.post<ResponseItem<Artefact>>(this.baseUrl + 'AssociateArtefactToCharacter/' + characterId, artefact);
    }

    public delete(id: number): Observable<ResponseItem<boolean>>{
      return this.http.delete<ResponseItem<boolean>>(this.baseUrl + 'DeleteArtefact/' + id);
    }
  }