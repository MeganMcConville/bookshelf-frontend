import {Component, Input, OnInit} from '@angular/core';

import { Book } from '../book';
import {Shelf} from '../shelf';
import { BookDetailsComponent} from "../book-details/book-details.component";
import { ShelfService } from "../shelf.service";
import { BookService } from "../book.service";

@Component({
  selector: 'shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  @Input() shelf: Shelf;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createNewBook(title: string, author: string, currentPage: string): void {
    this.bookService.createNewBook(title, author, +currentPage, this.shelf.id).toPromise().then(bookId => {
      let book: Book = new Book();
      book.title = title;
      book.author = author;
      book.currentPage = +currentPage;
      book.shelfId = this.shelf.id;
      book.id = bookId;
      this.shelf.books.push(book);
    })
  }

}
