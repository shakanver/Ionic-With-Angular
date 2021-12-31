import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  /*The @Input() makes this attribute bindable externally.
    This is the equivalent of a react prop
    daslafjksdalf
  */
  @Input() recipe_item: Recipe;

  constructor() { }

  ngOnInit() {}

}
