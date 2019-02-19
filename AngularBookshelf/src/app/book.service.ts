import { Injectable } from '@angular/core';

import { Book } from "./book";
import { FANTASYBOOKS } from "./mock-fantasy-books";
import { NONFICTIONBOOKS } from "./mock-nonfiction-books";
import {Observable, of} from "rxjs";
import { ShelfService } from "./shelf.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private shelfService: ShelfService
  ) { }

  getBook(id: number ): Book {
    let shelvesToCheck = this.shelfService.getShelves();
    for (let shelf of shelvesToCheck){
      let book = shelf.books.find(book => book.id === id);
      if(book !== undefined){
        return book;
      }
    }
    return null;
  }
}
