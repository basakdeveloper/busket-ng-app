import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get(environment.apiUrl + '/api/items');
  }

  getShops() {
    return this.httpClient.get(environment.apiUrl + '/api/shops');
  }

  getShopsWithItems() {
    return this.httpClient.get(environment.apiUrl + '/api/shopsWithItems');
  }

}
