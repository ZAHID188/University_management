import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})
export class StudentManageComponent implements OnInit {
  students:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetStudent();

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
}
