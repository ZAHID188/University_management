import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css'],
})
export class CourseManageComponent implements OnInit {
  courses: any;
  zero: number;
  editMode: boolean = false;
  courseId: number;
  @ViewChild('courseForm') ngform: NgForm;

  constructor(
    private http: HttpClient,
    private router: Router,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.GetCourses();
    this.zero = 0;
  }

  GetCourses() {
    this.http.get('https://localhost:7187/api/Courses').subscribe(
      (response) => {
        this.courses = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Just auto reloading for fetching we can do the dynamic way later
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  onAdd(info: any) {
    if (!this.editMode) {
      this.courseService.addCourse(info).subscribe((x) => {
        this.reloadComponent();
      });
    } else {
      this.courseService.updateCourse(this.courseId, info).subscribe((x) => {
        this.reloadComponent();
      });
    }
  }

  onEdit(identity: number) {
    let specificCourse = this.courses.find((p) => {
      return p.id == identity;
    });
    this.ngform.setValue({
      id: specificCourse.id,
      code: specificCourse.code,
      courseName: specificCourse.courseName,
      courseDescrpition: specificCourse.courseDescrpition,
    });
    this.courseId = specificCourse.id;
    this.editMode = true;
  }

  onDelete(id: number) {
    this.courseService.deleteCourse(id).subscribe((x) => {
      this.reloadComponent();
    });
  }
}
