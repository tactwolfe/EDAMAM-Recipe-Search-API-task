import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }


  getRecipe(item:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${environment.APP_ID}&app_key=${environment.API_KEY}&q=${item}`);
  }

  getRecipeByName(name:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${environment.APP_ID}&app_key=${environment.API_KEY}&q=${name}`);
  }
}
