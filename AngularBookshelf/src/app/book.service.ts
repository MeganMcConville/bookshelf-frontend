import { Injectable } from '@angular/core';

import { Book } from "./book";
import { FANTASYBOOKS } from "./mock-fantasy-books";
import { NONFICTIONBOOKS } from "./mock-nonfiction-books";
import {Observable, of} from "rxjs";
import { ShelfService } from "./shelf.service";
import {Shelf} from "./shelf";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private shelfService: ShelfService
  ) { }

  async getBook(id: number ): Promise<Book> {
    let shelvesToCheck = await this.shelfService.getShelves().toPromise().then(resp =>resp as Shelf[]);
    for (let shelf of shelvesToCheck){
      let book = shelf.books.find(book => book.id === id);
      if(book !== undefined){
        return book;
      }
    }
    return null;
  }
}
