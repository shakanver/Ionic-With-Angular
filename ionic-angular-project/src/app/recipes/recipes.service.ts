import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitty',
      imageUrl: 'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_2560%2Cc_limit/chicken-schnitzel.jpg',
      ingredients: ['French Fries', 'Chicken', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg',
      ingredients: ['Pasta', 'Meatballa', 'Tomato Sauce']
    }
  ];

  constructor() { }

  get_all_recipes () {
    /*
    '...' is called the spread operator
    its pointing to the recipes list, pulls all the elements in that array
    and copies it to this new array being returned.
     */
    return [...this.recipes];
  }

  get_recipe(recipe_id: string) {
    /*
    'find' takes in a function that gets executed on each array element. If the function
    returns true on a certain element, find will return that element.
    */ 
    return this.recipes.find(recipe => {
      return recipe.id === recipe_id;
    });
  }

  delete_recipe(recipe_id: string) {
    /* 
    filter takes in a function which executes for each element in the list. If the function
    returns false for an element, it deletes that element of the list. Note: filter will return a 
    new list and not edit the original.
     */

    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipe_id;
    });
  }

}
