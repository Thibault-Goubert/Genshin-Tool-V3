import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterPanelComponent } from './components/character-page-components/character-panel/character-panel.component';
import { CharacterPanelListComponent } from './components/character-page-components/character-panel-list/character-panel-list.component';
import { CharacterFiltersComponent } from './components/character-page-components/filters/character-filters/character-filters.component';

import { ArtefactsPageComponent } from './pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

import { RessourcesPageComponent } from './pages/ressources-page/ressources-page.component';
import { GeneralRessourcesComponent } from './components/ressources-page-components/GeneralRessources/general-ressources/general-ressources.component';
import { DomainRessourcesPageComponent } from './components/ressources-page-components/DomainsRessources/domain-ressources-page/domain-ressources-page.component';
import { BossRessourcesPageComponent } from './components/ressources-page-components/BossRessources/boss-ressources-page/boss-ressources-page.component';
import { HarvestableRessourcesPageComponent } from './components/ressources-page-components/HarvestablesRessources/harvestable-ressources-page/harvestable-ressources-page.component';
import { BossRessourcesGemsComponent } from './components/ressources-page-components/BossRessources/boss-ressources-gems/boss-ressources-gems.component';
import { BossRessourcesElementsComponent } from './components/ressources-page-components/BossRessources/boss-ressources-elements/boss-ressources-elements.component';
import { MonsterRessourcesPageComponent } from './components/ressources-page-components/MonstersRessources/monster-ressources-page/monster-ressources-page.component';
import { BossRessourcesBossComponent } from './components/ressources-page-components/BossRessources/boss-ressources-boss/boss-ressources-boss.component';
import { RessourcePanelComponent } from './components/ressources-page-components/ressource-panel/ressource-panel.component';
import { GeneralRessourcesParametricComponent } from './components/ressources-page-components/GeneralRessources/general-ressources-parametric/general-ressources-parametric.component';
import { CalculatorCharacterComponent } from './components/calculator-page-components/calculator-character/calculator-character.component';
import { CalculatorWeaponComponent } from './components/calculator-page-components/calculator-weapon/calculator-weapon.component';
import { MySelectPickerComponent } from './components/calculator-page-components/my-select-picker/my-select-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CharacterPanelListComponent,
    CharacterFiltersComponent,
    BossRessourcesPageComponent,
    DomainRessourcesPageComponent,
    HarvestableRessourcesPageComponent,
    GeneralRessourcesComponent,
    BossRessourcesGemsComponent,
    BossRessourcesElementsComponent,
    MonsterRessourcesPageComponent,
    BossRessourcesBossComponent,
    RessourcePanelComponent,
    GeneralRessourcesParametricComponent,
    CalculatorCharacterComponent,
    CalculatorWeaponComponent,
    MySelectPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
