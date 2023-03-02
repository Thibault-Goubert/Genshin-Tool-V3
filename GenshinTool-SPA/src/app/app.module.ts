import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { RessourcesPageComponent } from './pages/ressources-page/ressources-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ArtefactsPageComponent } from './pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

import { CharacterPanelComponent } from './components/character-page-components/character-panel/character-panel.component';
import { CharacterPanelListComponent } from './components/character-page-components/character-panel-list/character-panel-list.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    LandingPageComponent,

    RessourcesPageComponent,
    CharactersPageComponent,
    ArtefactsPageComponent,
    NotesPageComponent,

    CharacterPanelComponent,
    CharacterPanelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
