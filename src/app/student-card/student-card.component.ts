import { Component } from '@angular/core';
import { ApiServerService } from '../api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  public studentsList:any = []
  public input:string = ""
  public column:string = ""
  public order:string = ""
  public limit:number = 0
  public page:number = 0

    constructor(private student_details:ApiServerService,private router:Router){
      student_details.getStudentDetails().subscribe(
        (data:any) => {
          this.studentsList = data
        },
        (err:any) => {
          alert("server error")
        }
      )
    }

    filter() {
      this.student_details.getSpecificStudentDetails(this.input).subscribe(
        (data:any) => {
          this.studentsList = data
        },
        (err:any) => {
          alert("server error")
        }
      )
    }

    sort() {
      this.student_details.getSortedDetails(this.column,this.order).subscribe(
        (data:any) => {
          this.studentsList = data
        },
        (err:any) => {
          alert("server error")
        }
      )
    }

    paginate() {
      this.student_details.getPaginatedDetails(this.limit,this.page).subscribe(
        (data:any) => {
          console.log(this.limit,this.page)
          this.studentsList = data
        },
        (err:any) => {
          alert("server error")
        }
      )
    }

    delete(id:string) {
      this.student_details.modifiedDetails(id).subscribe(
        (data:any) => {
          alert("deleted successfully")
          location.reload()
        },
        (err:any) => {
          alert("server error")
        }
      )
    }

    view(id:string) {
      this.router.navigateByUrl("/dashboard/view-data/"+id)
    }

    edit(id:string){
      this.router.navigateByUrl("/dashboard/create-student-card/"+id)
    }
}
