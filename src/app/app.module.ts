import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { DisplayMemesComponent } from './display-memes/display-memes.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    StudentCardComponent,
    CreateStudentCardComponent,
    DisplayMemesComponent,
    ViewDataComponent,
    BankAccountComponent,
    ViewAccountComponent,
    CreateBankAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
