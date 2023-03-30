import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ArtefactsPageComponent } from './pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

import { RessourcesPageComponent } from './pages/ressources-page/ressources-page.component';
import { BossRessourcesPageComponent } from './components/ressources-page-components/BossRessources/boss-ressources-page/boss-ressources-page.component';
import { DomainRessourcesPageComponent } from './components/ressources-page-components/DomainsRessources/domain-ressources-page/domain-ressources-page.component';
import { HarvestableRessourcesPageComponent } from './components/ressources-page-components/HarvestablesRessources/harvestable-ressources-page/harvestable-ressources-page.component';
import { MonsterRessourcesPageComponent } from './components/ressources-page-components/MonstersRessources/monster-ressources-page/monster-ressources-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
