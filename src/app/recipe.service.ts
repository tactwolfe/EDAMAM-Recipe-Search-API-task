import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }


  getRecipe(item:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=20dab9a3&app_key=ac511092716ab82bef3660ae049bf74f&q=${item}`);
  }

  getRecipeByName(name:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=20dab9a3&app_key=ac511092716ab82bef3660ae049bf74f&q=${name}`);
  }
}
