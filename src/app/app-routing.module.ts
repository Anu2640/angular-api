import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { DisplayMemesComponent } from './display-memes/display-memes.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'',component:StudentCardComponent},
    {path:'student-card',component:StudentCardComponent},
    {path:'create-student-card',component:CreateStudentCardComponent},
    {path:'display-memes',component:DisplayMemesComponent},
    {path:'view-data/:id',component:ViewDataComponent},
    {path:'create-student-card/:id',component:CreateStudentCardComponent},
    {path:'bank-account',component:BankAccountComponent},
    {path:'view-account/:id',component:ViewAccountComponent},
    {path:'create-bank-account',component:CreateBankAccountComponent},
    {path:'create-bank-account/:id',component:CreateBankAccountComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
