import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: environment.apiUrl + '/api/expenses',
      columns: [
      {
        title: 'Description',
        data: 'description'
      },
      {
        title: 'Date',
        data: 'date'
      },
      {
        title: 'Category',
        data: 'expenseCategory.categoryName'
      },
      {
        title: 'Sub-Category',
        data: 'expenseCategory.subCategoryName'
      },
      {
        title: 'Account',
        data: 'expenseAccount.name'
      }]
    };
  }

}
