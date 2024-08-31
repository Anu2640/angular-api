import { Component } from '@angular/core';
import { ApiServerService } from '../api-server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent {
  public bankAccounts:any = []
  public input:string = ""
  public column:string = ""
  public order:string = ""
  public limit:number = 0
  public page:number = 0

  constructor(private bank_details:ApiServerService,private router:Router){
    
    
    bank_details.getBankAccounts().subscribe(
      (data:any) => {
        this.bankAccounts = data
      },
      (err:any) => {
        alert("server error")
      }
    )
  }

  filter() {
    this.bank_details.getSpecificAccountDetails(this.input).subscribe(
      (data:any) => {
        this.bankAccounts = data
      },
      (err:any) => {
        alert("server error")
      }
    )
  }

  sort() {
    this.bank_details.getAccountSortedDetails(this.column,this.order).subscribe(
      (data:any) => {
        console.log(data)
        this.bankAccounts = data
      },
      (err:any) => {
        alert("server error")
      }
    )
  }

  paginate() {
    this.bank_details.getAccountPaginatedDetails(this.limit,this.page).subscribe(
      (data:any) => {
        this.bankAccounts = data
      }
    )
  }

  deleteAccount(id:string) {
    this.bank_details.getModifiedDetails(id).subscribe(
      (data:any) => {
        alert("deleted successfully")
        location.reload()
      },
      (err:any) => {
        alert("server error")
      }
    )
  }

  viewAccount(id:string) {
    this.router.navigateByUrl("/dashboard/view-account/"+id)
  }

  editAccount(id:string) {
    this.router.navigateByUrl("/dashboard/create-bank-account/"+id)
  }
}
