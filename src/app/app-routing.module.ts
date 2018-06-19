import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'shopping-list', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'expense-tracker', component: ExpenseTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
