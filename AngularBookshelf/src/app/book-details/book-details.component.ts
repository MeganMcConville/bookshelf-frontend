import { Component, OnInit, Input} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Book } from '../book';
import { BookService } from "../book.service";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
  // @Input()
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).then(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
}
