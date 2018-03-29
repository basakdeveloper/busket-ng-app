import { ItemService } from './../../service/item.service';
import { Item } from './../../model/item.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shop } from '../../model/shop.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public newItem = new Item(0, '', new Shop(0, '', []));

  public shops;

  @Output()
  addItemEvent = new EventEmitter<string>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getShops();
  }

  getShops() {
    this.itemService.getShops().subscribe(
      data => {
        this.shops = data;
      },
      err => { console.error(err); },
      () => {}
    );
  }

  addItem(addItemForm) {
    this.itemService.addItem(this.newItem).subscribe(
      data => {
        this.addItemEvent.emit('done');
      },
      err => { console.error(err); },
      () => {}
    );
    addItemForm.reset();
  }

}
