import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher-manage',
  templateUrl: './teacher-manage.component.html',
  styleUrls: ['./teacher-manage.component.css'],
})
export class TeacherManageComponent implements OnInit {
  private readonly API_URL = 'https://localhost:7187/api/Teachers';

  teachers: any;
  model:any;
  editMode: boolean=false;
  editId:number;
  @ViewChild('teacherForm') form:NgForm;
  constructor(
    private http: HttpClient,
    private tech_service: TeacherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetTeacher();
    this.model=0;
  }
  // Just auto reloading for fetching we can do the dynamic way later
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
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

  onAdd(data: any) {

    if(!this.editMode)
    {
      this.tech_service.addTeacher(data).subscribe((x) => {
        this.reloadComponent();
      });
    }
    else{
      console.log(data)
      this.tech_service.updateTeacher(this.editId,data).subscribe((x) => {
        this.reloadComponent();
       
      },(error) => {
        console.log(error);
      });
    }
    
  }

  //Delete --

  onDelete(id: number) {
    this.tech_service.delTeacher(id).subscribe((res) => {
      alert('delete ok');
      this.reloadComponent();
    });
  }

  onEdit(id: number) {
    let specificTeacher = this.teachers.find((p) => {
      return p.identity == id;
    });
    this.form.setValue({
      identity:specificTeacher.identity,
      name: specificTeacher.name,
      email: specificTeacher.email
    });
    this.editId=id;

    this.editMode=true;
  }
}
