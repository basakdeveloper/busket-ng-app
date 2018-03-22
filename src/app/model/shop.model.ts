import { Item } from './item.model';
export class Shop {
    constructor(private id: number, private name: string, private items: Item[]) {}
}
