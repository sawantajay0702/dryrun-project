import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) { }

   registerStudentUrl="/api/v1";

  registerStudent(student:any){
         return this.httpclient.post(this.registerStudentUrl+"/student/save",student)
  }
}
