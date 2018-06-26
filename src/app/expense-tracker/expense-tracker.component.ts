import { Expense } from './../model/expense.model';
import { ExpenseService } from './../service/expense.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenseAccount } from '../model/expense-account.model';
import { ExpenseCategory } from '../model/expense-category.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {
  displayedColumns = ['date', 'description', 'expenseCategory', 'expenseSubCategory', 'expenseAccount'];
  dataSource: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  reloadExpenses(event) {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

}
