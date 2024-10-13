import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {

  constructor(private studentService:StudentService){}

    firstName=new FormControl('',[])
    lastName=new FormControl('',[])
    dob=new FormControl('',[])

     studentregFG=new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName,
      dob:this.dob
    })

    registerStudent(){
      this.studentService.registerStudent(this.studentregFG.value).subscribe((response)=>{
        console.log(response)
      })
    }



}
