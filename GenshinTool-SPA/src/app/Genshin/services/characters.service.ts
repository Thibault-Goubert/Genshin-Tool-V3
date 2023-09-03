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

    public getDistinctCharacters(): Observable<ResponseItems<Character>> {
        return this.http.get<ResponseItems<Character>>(this.baseUrl + 'GetAllCharacters');
    }

    public getAllCharacters(): Observable<ResponseItems<Character>> {
        return this.http.get<ResponseItems<Character>>(this.baseUrl + 'GetAllCharacters/' + true);
    }

    public getCharactersByRequest(req: CharacterRequest): Observable<ResponseItems<Character>>{        
        return this.http.post<ResponseItems<Character>>(this.baseUrl + 'GetByRequest', req);   
    }
    
    public getCharactersUsed(): Observable<ResponseItems<Character>>{        
        return this.http.get<ResponseItems<Character>>(this.baseUrl + 'GetUsed');  
    }

    public setCharacterUsed(name: string, element: number, isUsed: boolean): Observable<ResponseItem<boolean>>{
        return this.http.patch<ResponseItem<boolean>>(this.baseUrl + 'SetIsUsed/' + name + '/' + element + '/' + isUsed, null);
    }
}