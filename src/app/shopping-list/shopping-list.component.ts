import { Item } from './../model/item.model';
import { ItemService } from '../service/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public items;

  public shopsWithItems;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getShopsWithItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      data => {
        this.items = data;
      },
      err => { console.error(err); },
      () => { console.log('done loading'); }
    );
  }

  getShopsWithItems() {
    this.itemService.getShopsWithItems().subscribe(
      data => {
        this.shopsWithItems = data;
        console.log(data);
      },
      err => { console.error(err); },
      () => { console.log('done loading'); }
    );
  }

}
