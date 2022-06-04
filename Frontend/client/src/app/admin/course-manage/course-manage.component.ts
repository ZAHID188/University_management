import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent implements OnInit {
  courses:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetCourses();
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
