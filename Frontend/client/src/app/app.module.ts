import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { StudentLoginComponent } from './All_Login/student-login/student-login.component';
import { TeacherLoginComponent } from './All_Login/teacher-login/teacher-login.component';
import { AdminLoginComponent } from './All_Login/admin-login/admin-login.component';
import { LoginComponent } from './All_Login/login/login.component';
import { StudentManageComponent } from './admin/student-manage/student-manage.component';
import { TeacherManageComponent } from './admin/teacher-manage/teacher-manage.component';
import { CourseManageComponent } from './admin/course-manage/course-manage.component';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    AdminLoginComponent,
    LoginComponent,
    StudentManageComponent,
    TeacherManageComponent,
    CourseManageComponent,
    StudentComponent,
    TeacherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
