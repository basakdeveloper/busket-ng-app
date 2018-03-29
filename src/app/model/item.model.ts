import { Shop } from './shop.model';

export class Item {
    constructor(public id: number, public name: string, public shop: Shop) {}
}
