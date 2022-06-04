import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-manage',
  templateUrl: './teacher-manage.component.html',
  styleUrls: ['./teacher-manage.component.css'],
})
export class TeacherManageComponent implements OnInit {
  teachers: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.GetTeacher();
  }

  GetTeacher() {
    this.http.get('https://localhost:7187/api/Teachers').subscribe(
      (response) => {
        this.teachers = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
