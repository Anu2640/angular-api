import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServerService } from '../api-server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {
  public id:string = ""
  public bankAccountForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl(),
    id: new FormControl()
  })

  constructor(private _bankService:ApiServerService,private router:Router,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any) => {
        this.id = data.id
        _bankService.getSingleBankAccount(data.id).subscribe(
          (data:any) => {
            this.bankAccountForm.patchValue(data)
          }
        )
      }
    )
  }

  createBankAccount() {
   if (this.id) {
    this._bankService.updateBankAccount(this.bankAccountForm.value,this.id).subscribe(
      (data:any) => {
        alert("Account updated successfully!")
        this.bankAccountForm.reset()
        this.router.navigateByUrl("/dashboard/bank-account")
      },
      (err:any) => {
        alert("server error!!")
      }
    )
   } else {
    this._bankService.createAccount(this.bankAccountForm.value).subscribe(
      (data:any) => {
        alert("Bank account created successfully!!")
        this.bankAccountForm.reset()
        this.router.navigateByUrl('/dashboard/bank-account')
      },
      (err:any) => {
        alert("server error!!")
      }
    )
   }
  }
}
