import { Injectable } from '@angular/core';

import { Book } from "./book";
import {Observable, of} from "rxjs";
import { ShelfService } from "./shelf.service";
import {Shelf} from "./shelf";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private shelfService: ShelfService,
    private http: HttpClient
  ) { }

  private postUrl= 'http://localhost:8080/books';

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

  updateCurrentPage(currentPage: string, bookId: number): void {
    let url: string = "http://localhost:8080/books/" + bookId + "/updateCurrentPage";
    let params = new HttpParams().set("currentPage", currentPage);
    this.http.post(url, {params: params}).toPromise().then(() => console.log("update finished"));
    console.log("it made it inside the book service update method")
  }

  createNewBook(title: string, author: string, currentPage: number, shelfId: number): Observable<number> {
    let book: Book = new Book();
    book.title = title;
    book.author = author;
    book.currentPage = currentPage;
    book.shelfId = shelfId;
    return this.http.post<number>(this.postUrl, book, httpOptions);
  }
}
