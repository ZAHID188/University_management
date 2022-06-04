import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  model:any={}
  temp:any;


  constructor(private router:Router) {  }

  ngOnInit(): void {
    this.model.username='admin';
    this.model.email='admin@gmail.com';
  }


  login(){
    
    if(this.model.username == "admin" && this.model.email=="admin@gmail.com")
    {
      this.router.navigate(['/admin']);
    }}

}
