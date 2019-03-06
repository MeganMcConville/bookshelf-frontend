import {Component, OnInit} from '@angular/core';
import {Shelf} from "../shelf";
import {ShelfService} from "../shelf.service";


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

}
