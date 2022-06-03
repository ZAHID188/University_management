import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  teachers:any;
  model:any={}
  loggedin:boolean;

  constructor(private http:HttpClient,private router: Router, private accountservice:AccountService){

  }
  ngOnInit() {
    this.GetUser();
    
  }

  GetUser(){

    this.http.get('https://localhost:7187/api/Teachers').subscribe(response=>
    {
      this.teachers=response;
      

    },error =>
    {
      console.log(error);
    })
  }

  // login(){
  //   this.accountservice.login().subscribe(response=>{
  //     console.log(response);
  //     this.loggedin=true;
  //   },error =>    {
  //     console.log(error);
  //   })
  //   console.log(this.model);
    
  // }


    

  
}
