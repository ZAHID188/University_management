import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  teachers:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
}
