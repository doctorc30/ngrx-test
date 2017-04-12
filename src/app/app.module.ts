import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import * as items from './reducers/items.reducer'
import * as layout from './reducers/layout.reducer'
import * as fromRoot from './reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListComponent } from "app/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(fromRoot.reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
