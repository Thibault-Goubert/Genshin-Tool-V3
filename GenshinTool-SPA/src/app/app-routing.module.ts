import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenshinImpactPageComponent } from './Genshin/pages/genshin-impact-page/genshin-impact-page.component';

import { CharactersPageComponent } from './Genshin/pages/characters-page/characters-page.component';
import { ArtefactsPageComponent } from './Genshin/pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './Genshin/pages/notes-page/notes-page.component';

import { RessourcesPageComponent } from './Genshin/pages/ressources-page/ressources-page.component';
import { BossRessourcesPageComponent } from './Genshin/components/ressources-page-components/BossRessources/boss-ressources-page/boss-ressources-page.component';
import { DomainRessourcesPageComponent } from './Genshin/components/ressources-page-components/DomainsRessources/domain-ressources-page/domain-ressources-page.component';
import { HarvestableRessourcesPageComponent } from './Genshin/components/ressources-page-components/HarvestablesRessources/harvestable-ressources-page/harvestable-ressources-page.component';
import { MonsterRessourcesPageComponent } from './Genshin/components/ressources-page-components/MonstersRessources/monster-ressources-page/monster-ressources-page.component';

import { HonkaiStarRailPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-page/honkai-star-rail-page.component';
import { HonkaiStarRailRessourcesPageComponent } from './HonkaiStarRail/pages/ressources/honkai-star-rail-ressources-page/honkai-star-rail-ressources-page.component';
import { HonkaiStarRailCharactersPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-characters-page/honkai-star-rail-characters-page.component';
import { HonkaiStarRailRelicsPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-relics-page/honkai-star-rail-relics-page.component';
import { HonkaiStarRailNotesPageComponent } from './HonkaiStarRail/pages/honkai-star-rail-notes-page/honkai-star-rail-notes-page.component';
import { HonkaiStarRailFarmRessourcesPageComponent } from './HonkaiStarRail/pages/ressources/honkai-star-rail-farm-ressources-page/honkai-star-rail-farm-ressources-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/genshinimpact', pathMatch: 'full' },
  { path: 'cheatCode', redirectTo: '/genshinimpact', pathMatch: 'full' },
  { path: 'genshinimpact', component: GenshinImpactPageComponent,
    children: [
      { path: 'ressources', component: RessourcesPageComponent,
        children:[
          { path: 'boss', component: BossRessourcesPageComponent },
          { path: 'domains', component: DomainRessourcesPageComponent },
          { path: 'harvestables', component: HarvestableRessourcesPageComponent },
          { path: 'monsters', component: MonsterRessourcesPageComponent }
        ]
      },
      { path: 'characters', component: CharactersPageComponent },
      { path: 'artefacts', component: ArtefactsPageComponent },
      { path: 'notes', component: NotesPageComponent }
    ]
  },
  { path: 'honkaistarrail', component: HonkaiStarRailPageComponent,
    children: [
      { path: 'ressources', component: HonkaiStarRailRessourcesPageComponent,
        children: [
          { path: 'farm', component: HonkaiStarRailFarmRessourcesPageComponent }
        ] 
      },
      { path: 'characters', component: HonkaiStarRailCharactersPageComponent },
      { path: 'relics', component: HonkaiStarRailRelicsPageComponent },
      { path: 'notes', component: HonkaiStarRailNotesPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
