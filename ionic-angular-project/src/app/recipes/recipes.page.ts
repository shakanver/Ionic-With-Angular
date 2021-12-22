import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipes_service: RecipesService, private router: Router) { 
    /* This ensures that the recipes page gets re-rendered everytime we change routes from 
      somewhere else, because that doesnt happen by default.
    */
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.recipes = recipes_service.get_all_recipes();
      }
    });
  }

  ngOnInit() {
    this.recipes =  this.recipes_service.get_all_recipes();
  }

}
