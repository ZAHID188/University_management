import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  model:any={}


  constructor() { }

  ngOnInit(): void {
  }

  login(){
    
    if(this.model.username == "admin" && this.model.email=="admin@gmail.com")
    {
      alert("done");
      // this.router.navigate[('/admin')];
    }}

}
