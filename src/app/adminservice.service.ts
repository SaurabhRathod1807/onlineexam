import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpclient:HttpClient) { }

adminsave(adminuser: AdminUser ){
  return this.httpclient.post<void>("http://localhost:8080/adminsave", adminuser);
}

admincheck(adminuser: AdminUser){
  return this.httpclient.post<boolean>("http://localhost:8080/admincheck", adminuser);
}




}

export class AdminUser{
  username:string;
  password:string;
  email:string;
  mobno:string;

  constructor(username:string, password:string, email:string, mobno:string){
    this.username=username;
    this.password=password;
    this.email=email;
    this.mobno=mobno;
  }
}
