import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  databaseUrl = 'https://udemy-recipe-book-5f8ce.firebaseio.com/';

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    // return this.httpClient.put(
    //   this.databaseUrl + '/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', this.authService.getToken())
    //   }
    // );
    const request = new HttpRequest(
      'PUT',
      this.databaseUrl + '/recipes.json',
      this.recipeService.getRecipes(),
      { reportProgress: true }
    );

    return this.httpClient.request(request);
  }

  getRecipes() {
    return this.httpClient
      .get<Recipe[]>(this.databaseUrl + '/recipes.json')
      .pipe(
        map(recipes => {
          for (const recipe of recipes) {
            if (!recipes['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
