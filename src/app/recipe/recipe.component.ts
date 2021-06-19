import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  currentRecipeName = "";
  recipeData:any;

  constructor( private activatedRoute:ActivatedRoute ,private recipeService:RecipeService ) {
    this.currentRecipeName = this.activatedRoute.snapshot.params.name;
    console.log(this.currentRecipeName);
   }

  ngOnInit(): void {
    this.recipeService.getRecipeByName(this.currentRecipeName).subscribe((res:any)=>{
      this.recipeData = res.hits[0];
    });
  }

}
