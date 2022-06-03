import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
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
