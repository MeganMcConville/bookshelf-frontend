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

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).toPromise().then(() => {
      let book = this.shelf.books.filter(x => x.id == bookId)[0];
      let index = this.shelf.books.indexOf(book, 0);
      if(index > -1){
        this.shelf.books.splice(index,1);
      }
    });
  }

}
