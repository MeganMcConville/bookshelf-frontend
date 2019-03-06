import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BookComponent} from "./book/book.component";
import {ShelfComponent} from "./shelf/shelf.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import { AppRoutingModule } from './app-routing.module';
import {BookshelfComponent} from "./bookshelf/bookshelf.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShelfComponent,
    BookDetailsComponent,
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
