import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    //using a colon makes recipeId act as a variable name/alias
    path: ':recipeId',
    loadChildren: () => import('./recipes-detail/recipes-detail.module').then( m => m.RecipesDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule { }
