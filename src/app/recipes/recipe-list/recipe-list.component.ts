import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'testRecipeName',
      'testRecipe Description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fc4%2Fed%2Fsushi_sashimi_food_oriental_combined_barca_japanese-625376.jpg!s&f=1&nofb=1&ipt=0500182dd56a19d091ae75a0b3c5b906efda7e30645f3714f13431a9e2975276&ipo=images'
    ),
    new Recipe(
      'Other Recipe name',
      'Other Recipe Description',
      'https://c4.wallpaperflare.com/wallpaper/536/754/328/steak-wallpaper-thumb.jpg'
    ),
    new Recipe(
      'Ones more RecipeName',
      'And ones more Description',
      'https://c.pxhere.com/photos/dd/fc/italian_salad_basil_salad_tomatoes_cherry_tomatoes_vegetable_healthy_food-1215229.jpg!s'
    ),
  ];

  @Output() recipeWasSelectted = new EventEmitter<Recipe>();

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelectted.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
