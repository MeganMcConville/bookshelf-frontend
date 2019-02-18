import { Shelf} from './shelf';
import {FANTASYBOOKS} from "./mock-fantasy-books";
import {NONFICTIONBOOKS} from "./mock-nonfiction-books";

export const SHELVES: Shelf[] = [
  { name: 'Fantasy', books: FANTASYBOOKS },
  {name: 'Nonfiction', books: NONFICTIONBOOKS}
];
