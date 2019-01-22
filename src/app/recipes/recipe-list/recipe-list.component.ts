import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Aloo Chat',
      'This is Aloo Chat',
      'https://upload.wikimedia.org/wikipedia/commons/5/58/Aloo_chat_Recipe.JPG'
    ),

    new Recipe(
      'Handi Chicken',
      'This is Handi Chicken',
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg'),

    new Recipe(
      'KFC Chicken',
      'This is KFC Chicken',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
