import { Component } from '@angular/core';
import * as fromItems from './reducers/items.reducer'
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Item } from "app/models/item.model";
import * as ItemsAction from './actions/items.actions'
import { State } from "./reducers/items.reducer";

@Component({
  selector: 'app-root',
  template: `
  <list [items$]="items$ | async"></list>
  <div>
  <input type="text" #newtodo placeholder="Add a todo" />
      <button (click)="add(newtodo)">Add</button>
      <div>
  
  `
})
export class AppComponent {
  private items$: Observable<Item[]>;
  constructor(private store: Store<fromItems.State>) {
    this.items$ = store.select(state => state.items);
  }

  add(input: any) {
    this.store.dispatch({
      type: ItemsAction.ActionTypes.ADD,
      payload: {
        name: input.value
      }
    });
  }
}
