import {Component, OnInit} from '@angular/core';
import {Shelf} from "./shelf";
import {ShelfService} from "./shelf.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Bookshelf';

  shelfList: Shelf[];

  constructor(private shelfService: ShelfService){}

  getShelves(): void{
    this.shelfList = this.shelfService.getShelves();
  }

  ngOnInit() {
    this.getShelves();
  }

}
