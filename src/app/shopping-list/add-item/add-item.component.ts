import { ItemService } from './../../service/item.service';
import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public newItem = new Item(0, '', 0);

  public shops;

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
      () => { console.log('done loading'); }
    );
  }

}
