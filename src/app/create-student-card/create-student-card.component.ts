import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ApiServerService } from '../api-server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {

  public id:string = ""
  public studentForm:FormGroup= new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile:new FormControl(),
    email:new FormControl(),
    school_name:new FormControl(),
    school_city:new FormControl(),
    school_pin:new FormControl(),
    id:new FormControl()
  })
  
  constructor(private _studentService:ApiServerService,private router:Router,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=> {
        this.id = data.id
        _studentService.getSingleStudent(data.id).subscribe(
          (data:any) => {
            this.studentForm.patchValue(data)
          }
        )
      }
    )
  }

  createStudent() {
    if (this.id) {
      this._studentService.updateStudentCard(this.studentForm.value,this.id).subscribe(
        (data:any) => {
          alert("updated successfully")
          this.studentForm.reset()
          this.router.navigateByUrl("/dashboard/student-card")
        }
      )
    } else {
      this._studentService.createStudentCard(this.studentForm.value).subscribe(
        (data:any) => {
          alert("student details created successfully!!")
          this.studentForm.reset()
          this.router.navigateByUrl('/dashboard/student-card')
  
        },
        (err:any) => {
          alert("server error!!")
        }
      )
    }
  }

}
