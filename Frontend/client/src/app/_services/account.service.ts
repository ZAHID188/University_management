import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="https://localhost:7187/api/"

  constructor(private htttp:HttpClient) {}

    login(){
      return this.htttp.get(this.baseUrl+'Teachers');
    }
   
}
