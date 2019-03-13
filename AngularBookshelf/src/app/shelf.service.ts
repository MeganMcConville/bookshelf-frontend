import { Injectable } from '@angular/core';

import { Shelf } from './shelf';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "./book";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  private getUrl = 'http://localhost:8080/shelves';
  private postUrl= 'http://localhost:8080/shelves';

  getShelves(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(this.getUrl)
  }

  constructor(private http: HttpClient) { }

  createNewShelf(name: string): Observable<number> {
    let shelf: Shelf = new Shelf();
    shelf.name = name;
    return this.http.post<number>(this.postUrl, shelf, httpOptions);
  }
}
