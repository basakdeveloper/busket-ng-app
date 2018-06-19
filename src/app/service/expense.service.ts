import { Expense } from './../model/expense.model';
import { ExpenseCategory } from './../model/expense-category.model';
import { ExpenseAccount } from './../model/expense-account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ExpenseService {

    constructor(private httpClient: HttpClient) { }

    getAccounts() {
        return this.httpClient.get<ExpenseAccount[]>(environment.apiUrl + '/api/expense/accounts');
    }

    getCategories() {
        return this.httpClient.get<ExpenseCategory[]>(environment.apiUrl + '/api/expense/categories');
    }

    addExpense(expense: Expense) {
        return this.httpClient.post<Expense>(environment.apiUrl + '/api/expense/add', expense);
    }
}
