import { Injectable } from '@angular/core';

import { Shelf } from './shelf';
import { SHELVES } from './mock-shelves';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  getShelves(): Shelf[] {
    return SHELVES;
  }

  constructor() { }
}
