import {Component, Input, OnInit} from '@angular/core';

import { Book } from '../book';
import {Shelf} from '../shelf';
import { BookDetailsComponent} from "../book-details/book-details.component";
import { ShelfService } from "../shelf.service";

@Component({
  selector: 'shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  @Input() shelf: Shelf;
  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
