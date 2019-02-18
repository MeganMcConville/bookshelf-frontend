import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BookComponent} from "./book/book.component";
import {ShelfComponent} from "./shelf/shelf.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShelfComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
