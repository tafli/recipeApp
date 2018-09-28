import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'http://dolerecipe.dolesunshine.com/RecipeImages/1593/Dole_Pineapple%20Red%20Velvet%20Cake%20192x192.jpg'
    ),
    new Recipe('A 2nd Test Recipe',
      'This is another simple a test',
      'http://dolerecipe.dolesunshine.com/RecipeImages/1593/Dole_Pineapple%20Red%20Velvet%20Cake%20192x192.jpg'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }
}
