import { Component, OnInit } from '@angular/core';
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
      'Other Recipe',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fc4%2Fed%2Fsushi_sashimi_food_oriental_combined_barca_japanese-625376.jpg!s&f=1&nofb=1&ipt=0500182dd56a19d091ae75a0b3c5b906efda7e30645f3714f13431a9e2975276&ipo=images'
    ),
    new Recipe(
      'Ones more RecipeName',
      'And ones more Description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fc4%2Fed%2Fsushi_sashimi_food_oriental_combined_barca_japanese-625376.jpg!s&f=1&nofb=1&ipt=0500182dd56a19d091ae75a0b3c5b906efda7e30645f3714f13431a9e2975276&ipo=images'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
