import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loaded_recipe: Recipe;

  /*
  ActivatedRoute object is used to access url data 
  for exampmle, we used paramMap in this case to access all the url parameters

  */
  constructor(
    private activated_route: ActivatedRoute, 
    private recipes_service: RecipesService,
    private router: Router,
    private alert_ctrl: AlertController
  ) { }

  ngOnInit() {
    /* 
    Observables: objects you can subscribe to which will give you data
    ParamMap explanation: 
    https://www.c-sharpcorner.com/article/using-parammap-observable-for-handling-route-in-angular/  
    */
    this.activated_route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipe_Id')) {
        //redirect
        console.log("should not be here");
        this.router.navigate(['/recipes']);
        return;
      }

      const recipe_Id = paramMap.get('recipe_Id');
      this.loaded_recipe = this.recipes_service.get_recipe(recipe_Id);
    });
  }

  on_delete_recipe(){
    this.alert_ctrl.create({
      header: 'Are you sure?',
      message: 'This recipe will be permanently deleted from your records',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipes_service.delete_recipe(this.loaded_recipe.id);
          this.router.navigate(['/recipes']);
        }
      }
      ]
    }).then(alert_el => {
      alert_el.present()
    });
  }

}
