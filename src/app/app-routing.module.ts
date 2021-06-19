import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path : '' , component : LandingComponent},
  { path : 'search' , component : SearchComponent},
  { path : 'recipe/:name' , component : RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
