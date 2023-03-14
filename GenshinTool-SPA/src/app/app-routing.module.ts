import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { RessourcesPageComponent } from './pages/ressources-page/ressources-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ArtefactsPageComponent } from './pages/artefacts-page/artefacts-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ressources', component: RessourcesPageComponent },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'artefacts', component: ArtefactsPageComponent },
  { path: 'notes', component: NotesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
