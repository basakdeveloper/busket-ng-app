import { Expense } from './../../model/expense.model';
import { ExpenseCategory } from './../../model/expense-category.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpenseService } from '../../service/expense.service';
import { TreeNode, TreeComponent, TreeModel } from 'angular-tree-component';
import { ExpenseAccount } from '../../model/expense-account.model';
import { ITreeNode } from 'angular-tree-component/dist/defs/api';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public newExpense = new Expense(0, '', 0, new Date(),
                              new ExpenseAccount(0, ''),
                              new ExpenseCategory(0, '', ''));

  public accounts;
  public expenseCategories;

  public nodes = [];
  options = {};

  @ViewChild('tree') treeComponent: TreeComponent;
  treeModel: TreeModel;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {

    this.treeModel = this.treeComponent.treeModel;

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

          const expenseCategoriesMap: { [index: string ]: {} } = {};
          for (const expenseCategory of this.expenseCategories) {
            if (!(expenseCategory.categoryName in expenseCategoriesMap)) {
              expenseCategoriesMap[expenseCategory.categoryName] = {
                name: expenseCategory.categoryName,
                type: 'Category',
                children: []
              };
            }

            expenseCategoriesMap[expenseCategory.categoryName]['children'].push({
              id: expenseCategory.id,
              type: 'Sub-Category',
              name: expenseCategory.subCategoryName
            });
          }

          Object.keys(expenseCategoriesMap).forEach(key => {
            this.nodes.push(expenseCategoriesMap[key]);
          });

          this.options = {
            getChildren: (node: TreeNode) => {
              return this.nodes;
            }
          };
        },
        err => { console.error(err); },
        () => {}
      );

  }

  selectTreeNode() {
    if (this.treeModel.focusedNode.data.type === 'Sub-Category') {
      console.log(this.treeModel.focusedNode.data.id);
      this.newExpense.expenseCategory.id = this.treeModel.focusedNode.data.id;
    }
  }

  addExpense(addExpenseForm) {
    const date1 = new Date();
    date1.setDate(this.newExpense.date['day']);
    date1.setMonth(this.newExpense.date['month'] - 1);
    date1.setFullYear(this.newExpense.date['year']);
    this.newExpense.date = date1;

    this.expenseService.addExpense(this.newExpense).subscribe(
      data => {
        // addExpenseForm.reset();
      },
      err => { console.error(err); },
      () => {}
    );
  }

}
