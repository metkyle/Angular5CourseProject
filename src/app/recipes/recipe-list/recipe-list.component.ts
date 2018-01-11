import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  
  recipes: Recipes[] = [
    new Recipes('A Test Recipes', 'This is simply a test', 
    'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis'),
    new Recipes("Second Test Recipe", "a test", "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeSelected: Recipes){
    this.recipeWasSelected.emit(recipeSelected);
  }
}
