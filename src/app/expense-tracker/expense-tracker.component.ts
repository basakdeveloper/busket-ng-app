import { Expense } from './../model/expense.model';
import { ExpenseService } from './../service/expense.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenseAccount } from '../model/expense-account.model';
import { ExpenseCategory } from '../model/expense-category.model';
import { MatTable, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {
  displayedColumns = ['date', 'expenseCategory', 'expenseSubCategory', 'expenseAccount', 'description', 'amount'];
  dataSource: MatTableDataSource<Expense>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
        console.log(data);
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
