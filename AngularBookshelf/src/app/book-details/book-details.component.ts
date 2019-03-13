import { Component, OnInit, Input} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Book } from '../book';
import { BookService } from "../book.service";
import { Comment } from "../comment";
import {CommentService} from "../comment.service";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private commentService: CommentService
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

  saveComment(content: string): void {
    this.commentService.saveComment(content, this.book.id).toPromise().then(commentId => {
      var comment: Comment = new Comment();
      comment.content = content;
      comment.bookId = this.book.id;
      comment.id = commentId;
      this.book.comments.push(comment);
    })
  }

  updateCurrentPage(currentPage: string): void {
    if(currentPage != "") {
      console.log("It made it inside the component update method")
      this.bookService.updateCurrentPage(currentPage, this.book.id);
    }
    console.log("It didn't make it inside the component if")
  }
}
