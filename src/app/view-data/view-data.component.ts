import { Component } from '@angular/core';
import { ApiServerService } from '../api-server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {
  public student:any = {}

  constructor(private _studentService:ApiServerService,private _activatedRoute:ActivatedRoute,private router:Router){
    _activatedRoute.params.subscribe(
      (data:any) => {
        _studentService.getSingleStudent(data.id).subscribe(
          (data:any) => {
            this.student = data
          }
        )
      }
    )
  }

  back() {
    this.router.navigateByUrl("/dashboard/student-card")
  }

}
