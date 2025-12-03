import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionDetailsComponent } from './core/suggestion-details/suggestion-details.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'suggestions', component: ListSuggestionComponent },
  { path:'suggestion/add', component: AddSuggestionComponent },
  { path:'suggestion/:id', component: SuggestionDetailsComponent },
  { path:'annonce', loadChildren: () => import('./annonce/annonce.module').then(m => m.AnnonceModule) },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
