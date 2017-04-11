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
  <ul>
     <li *ngFor="let item of items$ | async">{{item.name}}
     <button (click)="remove(item)">Remove</button>
     <button (click)="select(item)">Select</button>
     </li>
    </ul>
  <div>
  <input type="text" #newtodo placeholder="Add a todo" />
      <button (click)="add(newtodo)">Add</button>
      <div>
  <div>{{(selectItem$ | async).name}}</div>
  `
})
export class AppComponent {
  private items$: Observable<Item[]>;
  private selectItem$: Observable<Item>;
  constructor(private store: Store<fromItems.State>) {
    this.items$ = store.select(state => state.items);
    this.selectItem$ = store.select(state => state.select);
  }

  add(input: any) {
    this.store.dispatch({
      type: ItemsAction.ActionTypes.ADD,
      payload: {
        name: input.value
      }
    });
  }

  remove(item: Item) {
    this.store.dispatch({
      type: ItemsAction.ActionTypes.REMOVE,
      payload: item
    });
  }
  select(item: Item) {
    this.store.dispatch({
      type: ItemsAction.ActionTypes.SELECT,
      payload: item
    });
  }
}
