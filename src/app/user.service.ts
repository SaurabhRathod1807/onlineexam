import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  saveDB(user:User)
{
return this.httpclient.post("http://localhost:8080/saveDB", user)
}

check(user:User)
{

  return this.httpclient.post<boolean>("http://localhost:8080/check", user)

}

saveDB2(userpassword:PasswordReset){

  return this.httpclient.post<boolean>("http://localhost:8080/saveDB2", userpassword);
 }

 updatepassword(username:string, password:string){
  return this.httpclient.get<boolean>("http://localhost:8080/updatepassword/" + username +"/"+ password);
 }

  checking(userpassword:PasswordReset){
  return this.httpclient.post<boolean>("http://localhost:8080/checking", userpassword);
 }

}

export class User{

  username:string;
  password:string;
  mobno:string;
  email:string;


  constructor(username:string, password:string, mobno:string,email:string){
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.email=email;
  }
}

export class PasswordReset{

  username:string;
  passwordquestion:string;
  passwordanswer:string;
  
  constructor(username:string, passwordquestion:string,passwordanswer:string){
    this.username=username;
    this.passwordquestion=passwordquestion;
    this.passwordanswer=passwordanswer;
  }
  
  }



