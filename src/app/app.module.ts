import { ExpenseService } from './service/expense.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemService } from './service/item.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddItemComponent } from './shopping-list/add-item/add-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { AddExpenseComponent } from './expense-tracker/add-expense/add-expense.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeModule } from 'angular-tree-component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    SidebarComponent,
    AddItemComponent,
    ExpenseTrackerComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TreeModule
  ],
  providers: [ItemService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
