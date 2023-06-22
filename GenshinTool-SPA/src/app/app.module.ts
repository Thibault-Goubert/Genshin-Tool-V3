import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HonkaiStarRailHeaderComponent } from './HonkaiStarRail/honkai-star-rail-header/honkai-star-rail-header.component';
import { GenshinImpactHeaderComponent } from './Genshin/genshin-impact-header/genshin-impact-header.component';

import { CharactersPageComponent } from './Genshin/pages/characters-page/characters-page.component';
import { CharacterPanelComponent } from './Genshin/components/character-page-components/character-panel/character-panel.component';
import { CharacterPanelListComponent } from './Genshin/components/character-page-components/character-panel-list/character-panel-list.component';
import { CharacterFiltersComponent } from './Genshin/components/character-page-components/filters/character-filters/character-filters.component';

import { ArtefactsPageComponent } from './Genshin/pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './Genshin/pages/notes-page/notes-page.component';

import { RessourcesPageComponent } from './Genshin/pages/ressources-page/ressources-page.component';
import { GeneralRessourcesComponent } from './Genshin/components/ressources-page-components/GeneralRessources/general-ressources/general-ressources.component';
import { DomainRessourcesPageComponent } from './Genshin/components/ressources-page-components/DomainsRessources/domain-ressources-page/domain-ressources-page.component';
import { BossRessourcesPageComponent } from './Genshin/components/ressources-page-components/BossRessources/boss-ressources-page/boss-ressources-page.component';
import { HarvestableRessourcesPageComponent } from './Genshin/components/ressources-page-components/HarvestablesRessources/harvestable-ressources-page/harvestable-ressources-page.component';
import { BossRessourcesGemsComponent } from './Genshin/components/ressources-page-components/BossRessources/boss-ressources-gems/boss-ressources-gems.component';
import { BossRessourcesElementsComponent } from './Genshin/components/ressources-page-components/BossRessources/boss-ressources-elements/boss-ressources-elements.component';
import { MonsterRessourcesPageComponent } from './Genshin/components/ressources-page-components/MonstersRessources/monster-ressources-page/monster-ressources-page.component';
import { BossRessourcesBossComponent } from './Genshin/components/ressources-page-components/BossRessources/boss-ressources-boss/boss-ressources-boss.component';
import { RessourcePanelComponent } from './Genshin/components/ressources-page-components/ressource-panel/ressource-panel.component';
import { GeneralRessourcesParametricComponent } from './Genshin/components/ressources-page-components/GeneralRessources/general-ressources-parametric/general-ressources-parametric.component';
import { CalculatorCharacterComponent } from './Genshin/components/calculator-page-components/calculator-character/calculator-character.component';
import { CalculatorWeaponComponent } from './Genshin/components/calculator-page-components/calculator-weapon/calculator-weapon.component';
import { MySelectPickerComponent } from './Genshin/components/calculator-page-components/my-select-picker/my-select-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenshinImpactPageComponent } from './Genshin/pages/genshin-impact-page/genshin-impact-page.component';
import { HonkaiStarRailPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-page/honkai-star-rail-page.component';
@NgModule({
  declarations: [
    AppComponent,
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
    MySelectPickerComponent,
    GenshinImpactPageComponent,
    HonkaiStarRailPageComponent,
    HonkaiStarRailHeaderComponent,
    GenshinImpactHeaderComponent
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
