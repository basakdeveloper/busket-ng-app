import { ExpenseAccount } from './expense-account.model';
import { ExpenseCategory } from './expense-category.model';


export class Expense {
    constructor(public id: number, public description: string, public amount: number, public date: Date,
                public expenseAccount: ExpenseAccount,
                public expenseCategory: ExpenseCategory) {}
}
