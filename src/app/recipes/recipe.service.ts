import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../common/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Aloo Chat',
      'This is Aloo Chat',
      'https://upload.wikimedia.org/wikipedia/commons/5/58/Aloo_chat_Recipe.JPG',
      [new Ingredient('Potato', 5), new Ingredient('Spices', 10)]
    ),

    new Recipe(
      'Handi Chicken',
      'This is Handi Chicken',
      'https://upload.wikimedia.org/wikipedia/commons/0/0a/Handi-chicken-Indian-dum-chicken-curry-recipe.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Spices', 12), new Ingredient('Salt', 1)]
    ),

    new Recipe(
      'KFC Chicken',
      'This is KFC Chicken',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Spices', 20), new Ingredient('Salt', 1)]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
