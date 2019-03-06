import { Injectable } from '@angular/core';

import { Shelf } from './shelf';
import { SHELVES } from './mock-shelves';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  private getUrl = 'http://localhost:8080/shelves';

  getShelves(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(this.getUrl)
  }

  constructor(private http: HttpClient) { }
}
