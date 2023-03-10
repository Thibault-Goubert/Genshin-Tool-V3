import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { ResponseItems } from '../models/responseItems.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments';

@Injectable({
    providedIn: 'root'
  })
export class CharacterService{
    private baseUrl: string = environment.baseUrl + 'Character/';
    
    constructor(private http: HttpClient) {}

    public getCharacters(): Observable<ResponseItems<Character>> {
        return this.http.get<ResponseItems<Character>>(
            this.baseUrl + 'GetAllCharacters');
    }
    
}