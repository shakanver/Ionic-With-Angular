import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;

  /*
  ActivatedRoute object is used to access url data 
  for exampmle, we used paramMap in this case to access all the url parameters

  */
  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    /* 
    Observables: objects you can subscribe to which will give you data
    ParamMap explanation: 
    https://www.c-sharpcorner.com/article/using-parammap-observable-for-handling-route-in-angular/  
    */
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipe_Id')) {
        //redirect
        console.log("should not be here");
        return;
      }
      console.log("here");
      const recipe_Id = paramMap.get('recipe_Id');
      this.loadedRecipe = this.recipesService.get_recipe(recipe_Id);
    });
  }

}
