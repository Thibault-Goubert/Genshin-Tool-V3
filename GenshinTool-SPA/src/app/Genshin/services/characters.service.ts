import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/Character/character.model';
import { CharacterRequest } from '../models/Character/characterRequest.model';
import { ResponseItem, ResponseItems } from '../models/responseItems.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';

@Injectable({
    providedIn: 'root'
  })
export class CharacterService{
    private baseUrl: string = environment.baseUrl + 'Character/';
    
    constructor(private http: HttpClient) {}

    public getCharacters(): Observable<ResponseItems<Character>> {
        return this.http.get<ResponseItems<Character>>(this.baseUrl + 'GetAllCharacters');
    }

    public getCharactersByRequest(req: CharacterRequest): Observable<ResponseItems<Character>>{        
        return this.http.post<ResponseItems<Character>>(this.baseUrl + 'GetByRequest', req);   
    }
    
    public getCharactersUsed(): Observable<ResponseItems<Character>>{        
        return this.http.get<ResponseItems<Character>>(this.baseUrl + 'GetUsed');  
    }

    public setCharacterUsed(name: string, isUsed: boolean): Observable<ResponseItem<boolean>>{
        return this.http.patch<ResponseItem<boolean>>(this.baseUrl + 'SetIsUsed/' + name + '/' + isUsed, null);
    }
}