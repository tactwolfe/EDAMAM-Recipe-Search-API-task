import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = '';
  RecipeData:any;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  fetchRecipe(){
    this.recipeService.getRecipe(this.search).subscribe((res:any)=>{
      this.RecipeData = res.hits;
      console.log(this.RecipeData);
    });
  }

}
