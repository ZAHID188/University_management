import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css'],
})
export class StudentManageComponent implements OnInit {
  students: any;
  zero: number;
  editMode: Boolean = false;
  studentId:number;
  @ViewChild('studentForm') ngform:NgForm;

  constructor(
    private http: HttpClient,
    private student_service: StudentServiceService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.GetStudent();
    this.zero = 0;
  }

   // Just auto reloading for fetching we can do the dynamic way later
   reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  GetStudent() {
    this.http.get('https://localhost:7187/api/Students').subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAdd(data: any) {
    if(!this.editMode)
    {
      this.student_service.addStudent(data).subscribe(x=>{
        this.reloadComponent();
      });

    }
    else
    {
      this.student_service.updateStudent(this.studentId,data).subscribe(x=>{
        this.reloadComponent();
      });

    }
    
  }

  onEdit(id: number) {
    let specific_student=this.students.find((x)=>{
     return x.identitity==id;
    });
    this.ngform.setValue({
      identitity:specific_student.identitity,
      name:specific_student.name,
      email:specific_student.email
    })
    this.studentId=id;
    this.editMode=true;
  }

  onDelete(id: number) {
    this.student_service.deleteStudent(id).subscribe(x=>{
      this.reloadComponent();
    });
  }
}
