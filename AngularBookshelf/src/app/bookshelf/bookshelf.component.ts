import {Component, OnInit} from '@angular/core';
import {Shelf} from "../shelf";
import {ShelfService} from "../shelf.service";
import {Book} from "../book";


@Component({
  selector: 'bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit{
  title = 'My Bookshelf';
  shelfList: Shelf[];

  constructor(private shelfService: ShelfService){}

  getShelves(): void{
    this.shelfService.getShelves().toPromise().then(shelf => this.shelfList = shelf);
  }

  ngOnInit() {
    this.getShelves();
  }

  createNewShelf(name: string): void {
    this.shelfService.createNewShelf(name).toPromise().then(shelfId => {
      let shelf: Shelf = new Shelf();
      shelf.name = name;
      shelf.id = shelfId;
      this.shelfList.push(shelf);
    })
  }

}
