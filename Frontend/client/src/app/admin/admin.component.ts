import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  teachers:any;
  students:any;
  courses:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetTeacher();
    
  }
  GetTeacher(){

    this.http.get('https://localhost:7187/api/Teachers').subscribe(response=>
    {
      this.teachers=response;
      

    },error =>
    {
      console.log(error);
    })
  }
  GetStudent(){

    this.http.get('https://localhost:7187/api/Students').subscribe(response=>
    {
      this.students=response;
      

    },error =>
    {
      console.log(error);
    })
  }

  GetCourses(){

    this.http.get('https://localhost:7187/api/Courses').subscribe(response=>
    {
      this.courses=response;
      

    },error =>
    {
      console.log(error);
    })
  }
}
