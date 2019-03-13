import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
// import {BookComponent} from "./book/book.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookshelfComponent} from "./bookshelf/bookshelf.component";


const routes: Routes = [
  {path: 'detail/:id', component: BookDetailsComponent},
  {path: 'bookshelves', component: BookshelfComponent},
  {path: '', redirectTo: '/bookshelves', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
