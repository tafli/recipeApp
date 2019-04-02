import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  databaseUrl = 'https://udemy-recipe-book-5f8ce.firebaseio.com/';

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put(this.databaseUrl + '/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.databaseUrl + '/recipes.json')
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipes[ 'ingredients' ]) {
              recipe[ 'ingredients' ] = [];
            }
          }

          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
