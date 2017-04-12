import { Component } from '@angular/core';
import * as fromItems from './reducers/items.reducer'
import { Store, Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Item } from "app/models/item.model";
import * as ItemsAction from './actions/items.actions'
import { State } from "./reducers/items.reducer";
import * as fromRoot from './reducers'
import { LayoutState } from "app/reducers/layout.reducer";
import { ShowAuth, ShowInfo, ShowReg, ShowReg2 } from "app/actions/layout.actions";

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
  <br>
  <h2>layout</h2>
  <p>Auth - {{(layout$ | async).showAuth}}</p><button (click)="showAuth()">showAuth</button>
  <p>Info - {{(layout$ | async).showInfo}}</p><button (click)="showInfo()">showInfo</button>
  <p>Reg - {{(layout$ | async).showReg}}</p><button (click)="showReg()">showReg</button>
  <p>Reg2 - {{(layout$ | async).showReg2}}</p><button (click)="showReg2()">showReg2</button>
  `
})
export class AppComponent {
  private items$: Observable<Item[]>;
  private selectItem$: Observable<Item>;
  private layout$: Observable<LayoutState>;
  constructor(private storeItems: Store<State>, private storeLayout: Store<LayoutState> ) {
    this.items$ = storeItems.select(fromRoot.getItems);
    this.selectItem$ = storeItems.select(fromRoot.getSelect);
    this.layout$ = storeLayout.select(fromRoot.getLayoutState);
  }

  add(input: any) {
    this.storeItems.dispatch({
      type: ItemsAction.ActionTypes.ADD,
      payload: {
        name: input.value
      }
    });
  }

  remove(item: Item) {
    this.storeItems.dispatch({
      type: ItemsAction.ActionTypes.REMOVE,
      payload: item
    });
  }

  select(item: Item) {
    this.storeItems.dispatch({
      type: ItemsAction.ActionTypes.SELECT,
      payload: item
    });
  }

  showAuth() {
    this.storeLayout.dispatch(new ShowAuth());
  }

  showInfo() {
    this.storeLayout.dispatch(new ShowInfo());
  }

  showReg() {
    this.storeLayout.dispatch(new ShowReg());
  }

  showReg2() {
    this.storeLayout.dispatch(new ShowReg2());
  }
}
