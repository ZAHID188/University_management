import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  teachers:any;

  constructor(private http:HttpClient){

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
}
