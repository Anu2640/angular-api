import { Component } from '@angular/core';
import { ApiServerService } from '../api-server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {
  public bankAccount:any = {}

   constructor(private _bankService:ApiServerService,private _activatedRoute:ActivatedRoute,private router:Router){
    _activatedRoute.params.subscribe(
      (data:any) => {
        _bankService.getSingleBankAccount(data.id).subscribe(
          (data:any) => {
            this.bankAccount = data
          }
        )
      }
    )
   }

   back() {
    this.router.navigateByUrl("/dashboard/bank-account")
  }

}
