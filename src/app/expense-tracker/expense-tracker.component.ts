import { Expense } from './../model/expense.model';
import { ExpenseService } from './../service/expense.service';
import { Component, OnInit } from '@angular/core';
import { ExpenseAccount } from '../model/expense-account.model';
import { ExpenseCategory } from '../model/expense-category.model';

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
    this.expenseService.getExpenses().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

}
