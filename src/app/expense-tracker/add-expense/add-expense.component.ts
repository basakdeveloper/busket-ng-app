import { Expense } from './../../model/expense.model';
import { ExpenseCategory } from './../../model/expense-category.model';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ExpenseService } from '../../service/expense.service';
import { ExpenseAccount } from '../../model/expense-account.model';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  addExpenseForm: FormGroup;

  public accounts;
  public expenseCategories;
  public expenseCategoriesArr = new Array();
  public expenseCategoriesMap: { [index: string ]: {} } = {};

  @Output()
  addExpenseEvent = new EventEmitter<string>();

  constructor(private expenseService: ExpenseService, private fb: FormBuilder, private flashMessage: FlashMessagesService) {
    this.createForm();
  }

  createForm() {
    this.addExpenseForm = this.fb.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      account: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.expenseService.getAccounts()
      .subscribe(
        data => {
          this.accounts = data;
        },
        err => { console.error(err); },
        () => {}
      );

    this.expenseService.getCategories()
      .subscribe(
        data => {
          this.expenseCategories = data;

          for (const expenseCategory of this.expenseCategories) {
            if (!(expenseCategory.categoryName in this.expenseCategoriesMap)) {
              this.expenseCategoriesMap[expenseCategory.categoryName] = {
                name: expenseCategory.categoryName,
                type: 'Category',
                children: []
              };

              this.expenseCategoriesArr.push(expenseCategory.categoryName);
            }

            this.expenseCategoriesMap[expenseCategory.categoryName]['children'].push({
              id: expenseCategory.id,
              type: 'Sub-Category',
              name: expenseCategory.subCategoryName
            });
          }
        },
        err => { console.error(err); },
        () => {}
      );

  }

  addExpense(formDirective: FormGroupDirective) {
    const expenseFormModel = this.addExpenseForm.value;
    const newExpense = new Expense(0, expenseFormModel.description as string,
                                    expenseFormModel.amount as number,
                                    expenseFormModel.date as Date,
                                    new ExpenseAccount(expenseFormModel.account as number, ''),
                                    new ExpenseCategory(expenseFormModel.category as number, '', ''));

    this.expenseService.addExpense(newExpense).subscribe(
      data => {
        this.flashMessage.show('New Expense has been Added!', { cssClass: 'alert-success', timeout: 5000 });
        formDirective.resetForm();
        this.addExpenseForm.reset();
        this.addExpenseEvent.emit('done');
      },
      err => { console.error(err); },
      () => {}
    );
  }

}
