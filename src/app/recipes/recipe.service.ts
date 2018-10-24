import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'http://dolerecipe.dolesunshine.com/RecipeImages/1593/Dole_Pineapple%20Red%20Velvet%20Cake%20192x192.jpg'
    ),
    new Recipe('A 2nd Test Recipe',
      'This is another simple a test',
      'http://dolerecipe.dolesunshine.com/RecipeImages/1593/Dole_Pineapple%20Red%20Velvet%20Cake%20192x192.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
