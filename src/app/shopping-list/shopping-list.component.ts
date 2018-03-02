import { Item } from '../model/item.model';
import { ItemService } from '../service/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      data => {
        this.items = data;
        console.log(data);
      },
      err => { console.error(err); },
      () => { console.log('done loading'); }
    );
  }

}
