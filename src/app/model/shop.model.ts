import { Item } from './item.model';
export class Shop {
    constructor(public id: number, public name: string, public items: Item[]) {}
}
