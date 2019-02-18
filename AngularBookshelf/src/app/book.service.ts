import { Injectable } from '@angular/core';

import { Book } from "./book";
import { FANTASYBOOKS } from "./mock-fantasy-books";
import { NONFICTIONBOOKS } from "./mock-nonfiction-books";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
}
