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
import { HonkaiStarRailRelicsPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-relics-page/honkai-star-rail-relics-page.component';
import { HonkaiStarRailNotesPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-notes-page/honkai-star-rail-notes-page.component';
import { HonkaiStarRailRessourcesPageComponent } from './HonkaiStarRail/pages/ressources/honkai-star-rail-ressources-page/honkai-star-rail-ressources-page.component';
import { HonkaiStarRailCharactersPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-characters-page/honkai-star-rail-characters-page.component';
import { HonkaiStarRailGeneralRessourcesComponent } from './HonkaiStarRail/Components/RessourcesComponents/honkai-star-rail-general-ressources/honkai-star-rail-general-ressources.component';
import { HonkaiStarRailFarmRessourcesPageComponent } from './HonkaiStarRail/pages/ressources/honkai-star-rail-farm-ressources-page/honkai-star-rail-farm-ressources-page.component';
import { HsrRessourcePanelComponent } from './HonkaiStarRail/Components/RessourcesComponents/hsr-ressource-panel/hsr-ressource-panel.component';
import { HsrDailiesComponent } from './HonkaiStarRail/Components/hsr-dailies/hsr-dailies.component';
import { GiDailiesComponent } from './Genshin/components/gi-dailies/gi-dailies.component';
import { HsrToolsComponent } from './HonkaiStarRail/Components/hsr-tools/hsr-tools.component';
import { GiToolsComponent } from './Genshin/components/gi-tools/gi-tools.component';
import { ManageCharactersPopupComponent } from './Genshin/pages/artefacts-page/popups/manage-characters-popup/manage-characters-popup.component';
import { ManageArtefactsPopupComponent } from './Genshin/pages/artefacts-page/popups/manage-artefacts-popup/manage-artefacts-popup.component';

@NgModule({
  declarations: [
    AppComponent,

    GenshinImpactPageComponent,
    GenshinImpactHeaderComponent,

    RessourcesPageComponent,

    RessourcePanelComponent,

    GeneralRessourcesComponent,
    GeneralRessourcesParametricComponent,

    DomainRessourcesPageComponent,
    BossRessourcesPageComponent,
    BossRessourcesGemsComponent,
    BossRessourcesElementsComponent,
    BossRessourcesBossComponent,
    HarvestableRessourcesPageComponent,
    MonsterRessourcesPageComponent,

    CharactersPageComponent,

    CharacterFiltersComponent,
    CharacterPanelComponent,
    CharacterPanelListComponent,

    ArtefactsPageComponent,

    NotesPageComponent,
    
    CalculatorCharacterComponent,
    CalculatorWeaponComponent,
    MySelectPickerComponent,

    HonkaiStarRailPageComponent,
    HonkaiStarRailHeaderComponent,
    HonkaiStarRailRelicsPageComponent,
    HonkaiStarRailNotesPageComponent,
    HonkaiStarRailRessourcesPageComponent,
    HonkaiStarRailCharactersPageComponent,
    HonkaiStarRailGeneralRessourcesComponent,
    HonkaiStarRailFarmRessourcesPageComponent,
    HsrRessourcePanelComponent,
    HsrDailiesComponent,
    GiDailiesComponent,
    HsrToolsComponent,
    GiToolsComponent,
    ManageCharactersPopupComponent,
    ManageArtefactsPopupComponent
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
